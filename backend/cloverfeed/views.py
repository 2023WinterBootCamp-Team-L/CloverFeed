# backend/cloverfeed/views.py
# 요청을 처리하고 응답을 반환하는데 필요한 로직을 작성하는 파일

from django.http import JsonResponse
from django.contrib.auth import login
from django.shortcuts import get_object_or_404
from django.db.models import Q, Count
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import AllowAny
import json, random
from datetime import datetime
from .models import (
    Form,
    Question,
    AuthUser,
    FeedbackResult,
    QuestionAnswer,
    MultipleChoice,
)
from .serializers import (
    QuestionSerializer,
    FeedbackResultSerializer,
    FeedbackResultSearchSerializer,
    FormSerializer,
    FeedbackTagSerializer,
)
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi


# 회원가입
class SignupView(APIView):
    @swagger_auto_schema(
        tags=["user"],
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                "username": openapi.Schema(type=openapi.TYPE_STRING),
                "email": openapi.Schema(
                    type=openapi.TYPE_STRING, format=openapi.FORMAT_EMAIL
                ),
                "password": openapi.Schema(type=openapi.TYPE_STRING),
            },
            required=["username", "email", "password"],
        ),
        responses={201: "Created", 400: "Bad Request"},
    )
    def post(self, request):
        username = request.data.get("username")
        email = request.data.get("email")
        password = request.data.get("password")

        # 입력된 데이터 유효성 검사
        if not (username and email and password):
            return JsonResponse(
                {
                    "status": "error",
                    "error_code": 400,
                    "message": "입력한 정보 형식이 올바르지 않습니다.",
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        # 사용자 생성
        try:
            AuthUser.objects.create_user(
                username=username, email=email, password=password
            )
        except ValidationError as e:
            return JsonResponse({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        # 회원 가입 성공 응답
        response_data = {
            "status": "success",
            "message": "회원가입을 환영합니다.",
        }
        return JsonResponse(response_data, status=status.HTTP_201_CREATED)


# 로그인
class LoginView(APIView):
    permission_classes = [AllowAny]

    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                "email": openapi.Schema(type=openapi.TYPE_STRING),
                "password": openapi.Schema(type=openapi.TYPE_STRING),
            },
            required=["email", "password"],
        ),
        responses={
            200: openapi.Response(
                "Success",
                schema=openapi.Schema(
                    type=openapi.TYPE_OBJECT,
                    properties={
                        "status": openapi.Schema(type=openapi.TYPE_STRING),
                        "user_id": openapi.Schema(type=openapi.TYPE_INTEGER),
                        "user_name": openapi.Schema(type=openapi.TYPE_STRING),
                        "message": openapi.Schema(type=openapi.TYPE_STRING),
                    },
                ),
            ),
            400: openapi.Response(
                "Bad Request",
                schema=openapi.Schema(
                    type=openapi.TYPE_OBJECT,
                    properties={
                        "status": openapi.Schema(type=openapi.TYPE_STRING),
                        "error_code": openapi.Schema(type=openapi.TYPE_INTEGER),
                        "message": openapi.Schema(type=openapi.TYPE_STRING),
                    },
                ),
            ),
            401: openapi.Response(
                "Unauthorized",
                schema=openapi.Schema(
                    type=openapi.TYPE_OBJECT,
                    properties={
                        "status": openapi.Schema(type=openapi.TYPE_STRING),
                        "error_code": openapi.Schema(type=openapi.TYPE_INTEGER),
                        "message": openapi.Schema(type=openapi.TYPE_STRING),
                    },
                ),
            ),
            404: openapi.Response(
                "Not Found",
                schema=openapi.Schema(
                    type=openapi.TYPE_OBJECT,
                    properties={
                        "status": openapi.Schema(type=openapi.TYPE_STRING),
                        "error_code": openapi.Schema(type=openapi.TYPE_INTEGER),
                        "message": openapi.Schema(type=openapi.TYPE_STRING),
                    },
                ),
            ),
        },
    )
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        if not email or not password:
            return JsonResponse(
                {
                    "status": "error",
                    "error_code": 400,
                    "message": "입력한 정보 형식이 올바르지 않습니다.",
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        user = AuthUser.objects.filter(email=email).first()

        if user is None:
            return JsonResponse(
                {
                    "status": "error",
                    "error_code": 404,
                    "message": "해당 사용자가 존재하지 않습니다.",
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        if not user.check_password(password):
            return JsonResponse(
                {
                    "status": "error",
                    "error_code": 401,
                    "message": "이메일 혹은 비밀번호가 올바르지 않습니다.",
                },
                status=status.HTTP_401_UNAUTHORIZED,
            )

        if user:
            login(request, user)
            return JsonResponse(
                {
                    "status": "success",
                    "user_id": user.id,
                    "user_name": user.username,
                    "message": "로그인을 환영합니다.",
                },
                status=status.HTTP_200_OK,
            )
        else:
            return JsonResponse(
                {
                    "status": "error",
                    "error_code": 404,
                    "message": "해당 사용자가 존재하지 않습니다.",
                },
                status=status.HTTP_404_NOT_FOUND,
            )


# 피드백 질문 목록 작성
class SubmitFormView(APIView):
    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                "user_id": openapi.Schema(type=openapi.TYPE_NUMBER),
                "questions": openapi.Schema(
                    type=openapi.TYPE_ARRAY,
                    items=openapi.Schema(type=openapi.TYPE_OBJECT),
                ),
            },
            required=["user_id", "questions"],
        )
    )
    def post(self, request):
        user_id = request.data.get("user_id")
        questions_data = request.data.get("questions")

        # user_id가 제공되었는지 확인
        if not user_id:
            return Response(
                {"status": "error", "message": "user_id가 필요합니다."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # questions_data가 제공되었고 비어있지 않은지 확인
        if not questions_data or not isinstance(questions_data, list):
            return Response(
                {"status": "error", "message": "questions가 필요하며 비어 있지 않아야 합니다."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            # user_id를 기반으로 사용자 가져오기
            user = AuthUser.objects.get(id=user_id)
        except AuthUser.DoesNotExist:
            # user_id가 존재하지 않는 경우에 대한 응답
            return Response(
                {"status": "error", "message": "인증 실패. 유저 ID가 올바르지 않습니다."},
                status=status.HTTP_404_NOT_FOUND,
            )

        # 사용자를 위한 새로운 폼 생성
        form_data = {"user": user.id}
        form_serializer = FormSerializer(data=form_data)
        if form_serializer.is_valid():
            form = form_serializer.save()
        else:
            return Response(
                {"status": "error", "message": form_serializer.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # 질문을 생성하고 데이터베이스에 저장
        for question_data in questions_data:
            question_serializer = QuestionSerializer(data=question_data)
            if question_serializer.is_valid():
                question = question_serializer.save(form=form)

                # 질문이 "객관식"인 경우 MultipleChoice 객체를 생성
                if question_data.get("type") == "객관식":
                    choices = question_data.get("choice", [])
                    for choice_text in choices:
                        MultipleChoice.objects.create(
                            question=question, choice_context=choice_text
                        )
            else:
                # 폼 생성을 롤백하고 오류 응답을 반환
                form.delete()
                return Response(
                    {"status": "error", "message": question_serializer.errors},
                    status=status.HTTP_400_BAD_REQUEST,
                )

        return Response(
            {"status": "success", "message": "성공적으로 등록되었습니다."},
            status=status.HTTP_201_CREATED,
        )


# 피드백 폼 유무 조회
class CheckFormExistenceView(APIView):
    @swagger_auto_schema(
        manual_parameters=[
            openapi.Parameter(
                "user_id",
                openapi.IN_QUERY,
                description="사용자 ID",
                required=True,
                type=openapi.TYPE_NUMBER,
            ),
        ]
    )
    def get(self, request, format=None):
        # user_id인식 안됨
        user_id = request.query_params.get("user_id", None)

        # user_id가 존재하는지 확인
        try:
            user = AuthUser.objects.get(id=user_id)
            # 폼 존재 여부 확인
            form_exists = Form.objects.filter(user=user).exists()
            # 응답 생성
            response_data = {
                "status": "success",
                "feedbackform": "true" if form_exists else "false",
            }
            return Response(response_data)
        except AuthUser.DoesNotExist:
            # user_id가 존재하지 않는 경우에 대한 응답
            return Response(
                {"status": "error", "error_code": 404, "message": "사용자가 존재하지 않습니다."},
                status=404,
            )


# 작성한 질문 목록 확인
class QuestionListView(APIView):
    @swagger_auto_schema(
        manual_parameters=[
            openapi.Parameter(
                "userid",
                openapi.IN_QUERY,
                description="사용자 ID",
                required=True,
                type=openapi.TYPE_NUMBER,
            ),
        ]
    )
    def get(self, request, *args, **kwargs):
        # query_params에서 userid 가져오기
        user_id = request.query_params.get("userid", None)

        # 필요한 유효성 검사를 수행하고, 예를 들어, 사용자가 필수 매개변수를 제공했는지 확인
        if user_id is None:
            return Response(
                {"error": "userid를 제공해야 합니다."}, status=status.HTTP_400_BAD_REQUEST
            )

        try:
            form = Form.objects.filter(user=user_id)
        except Form.DoesNotExist:
            # user_id가 존재하지 않는 경우에 대한 응답
            return Response(
                {
                    "status": "error",
                    "error_code": 404,
                    "message": "폼이 없습니다.",
                },
                status=404,
            )

        # 사용자 ID를 사용하여 데이터를 조회하거나 다른 로직 수행
        # questions_data = list(Question.objects.all().values())
        questions_data = Question.objects.filter(form__user_id=user_id)
        print(questions_data)

        # 시리얼라이저를 사용하여 데이터 직렬화
        serializer = QuestionSerializer(questions_data, many=True)

        # 직렬화된 데이터를 응답으로 반환
        return Response(
            {
                "status": "success",
                "questions": serializer.data,
            },
            status=status.HTTP_200_OK,
        )


# 피드백 질문에 답변 제출
class AnswersView(APIView):
    @swagger_auto_schema(
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                "form_id": openapi.Schema(type=openapi.TYPE_NUMBER),
                "category": openapi.Schema(type=openapi.TYPE_STRING),
                "tags_work": openapi.Schema(type=openapi.TYPE_STRING),
                "tags_attitude": openapi.Schema(type=openapi.TYPE_STRING),
                "answers": openapi.Schema(
                    type=openapi.TYPE_ARRAY,
                    items=openapi.Schema(type=openapi.TYPE_OBJECT),
                ),
            },
            required=["form_id", "category", "tags_work", "tags_attitude", "answers"],
        ),
    )
    def post(self, request):
        form_id = request.data.get("form_id")
        category = request.data.get("category")
        tags_work = request.data.get("tags_work")
        tags_attitude = request.data.get("tags_attitude")
        answers_data = request.data.get("answers")

        # 폼 존재 여부 확인
        form = get_object_or_404(Form, id=form_id)

        try:
            # FeedbackResult 생성
            feedback_result = FeedbackResult.objects.create(
                form=form,
                category=category,
                tag_work=tags_work,
                tag_attitude=tags_attitude,
                respondent_name=f"#{random.randint(1000, 9999)}",
                created_at=datetime.now(),
            )

            # 각 답변에 대한 처리
            for answer_data in answers_data:
                question_context = answer_data.get("context")
                question_type = answer_data.get("type")
                answer_content = answer_data.get("answer")

                question = get_object_or_404(
                    Question, form=form, context=question_context
                )

                # QuestionAnswer 생성
                new_answer = QuestionAnswer(
                    feedback=feedback_result,
                    question=question,
                    context=answer_content,
                    type=question_type,
                    created_at=datetime.now(),
                    modified_at=datetime.now(),
                )
                new_answer.save()

            return JsonResponse(
                {"status": "success", "message": "응답해주셔서 감사합니다!"}, status=200
            )
        except Form.DoesNotExist:
            return JsonResponse({"error": "해당 폼이 존재하지 않습니다."}, status=404)
        except Question.DoesNotExist:
            return JsonResponse({"error": "해당 질문이 존재하지 않습니다."}, status=404)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)


# 카테고리(직군)별 피드백 개수 확인
class CategoryCountView(APIView):
    @swagger_auto_schema(
        manual_parameters=[
            openapi.Parameter(
                "user_id",
                openapi.IN_QUERY,
                description="사용자 ID",
                required=True,
                type=openapi.TYPE_NUMBER,
            ),
        ]
    )
    def get(self, request):
        user_id = request.query_params.get("user_id")

        # 전체 카테고리 목록
        all_categories = ["개발자", "디자이너", "기획자", "PM/PO", "기타직무"]

        try:
            # 해당 user_id에 대한 유저 정보 가져오기
            user = AuthUser.objects.get(id=user_id)

            # 유저의 폼들 가져오기
            user_forms = Form.objects.filter(user=user)

            # 각 카테고리에 대한 갯수 초기화
            category_counts = {category: 0 for category in all_categories}

            for form in user_forms:
                feedback_results = FeedbackResult.objects.filter(form=form)
                for feedback_result in feedback_results:
                    category = feedback_result.category
                    if category in all_categories:
                        category_counts[category] += 1

            # JSON 형태의 응답 데이터 생성
            response_data = {
                "status": "success",
                "counts": [
                    {category: count} for category, count in category_counts.items()
                ],
            }

            # JsonResponse로 응답
            return JsonResponse(response_data)
        except AuthUser.DoesNotExist:
            # user_id가 존재하지 않는 경우에 대한 응답
            return Response(
                {"status": "error", "error_code": 404, "message": "사용자가 존재하지 않습니다."},
                status=404,
            )


# 카테고리(직군)별 피드백 목록 확인
class FeedbackListByCategory(APIView):
    def get(self, request, format=None):
        userid = request.query_params.get("userid", None)
        category = request.query_params.get("category", None)

        # 유저 검증
        try:
            user = AuthUser.objects.get(pk=userid)
        except AuthUser.DoesNotExist:
            return Response(
                {"status": "error", "error_code": 401, "message": "사용자를 찾을 수 없습니다."},
                status=401,
            )

        # 카테고리에 따른 피드백 결과 조회
        # 카테고리 값이 있을 경우에는 해당 카테고리의 피드백 결과만 조회하고, 없을 경우에는 사용자의 모든 피드백 결과를 조회
        if category:
            feedbacks = FeedbackResult.objects.filter(
                form__user=user, category=category
            )
        else:
            feedbacks = FeedbackResult.objects.filter(form__user=user)
        # 응답
        serializer = FeedbackResultSerializer(feedbacks, many=True)
        return Response({"status": "success", "feedbacks": serializer.data})


# 받은 피드백답변(주관식) 내용 검색
class FeedbackSearchView(APIView):
    def get(self, request):
        userid = request.query_params.get("userid", None)
        keyword = request.query_params.get("keyword", None)
        if not userid:
            return Response(
                {"status": "error", "error_code": 401, "message": "사용자를 찾을 수 없습니다."}
            )
        user = AuthUser.objects.get(pk=userid)
        if keyword:
            feedbacks = QuestionAnswer.objects.filter(
                Q(feedback__form__user=user),
                Q(context__icontains=keyword),
                Q(type="주관식"),
            )
        else:
            feedbacks = QuestionAnswer.objects.filter(
                Q(feedback__form__user=user), Q(type="주관식")
            )
        serializer = FeedbackResultSearchSerializer(feedbacks, many=True)
        return Response({"status": "success", "feedbacks": serializer.data})


# 특정 피드백 상세 내용 확인
class FeedbackResultDetail(APIView):
    def get_object(self, pk, user_id):
        try:
            # 요청받은 pk와 user_id로 FeedbackResult를 조회
            return FeedbackResult.objects.get(pk=pk, id=user_id)
        except FeedbackResult.DoesNotExist:
            # 해당하는 FeedbackResult가 없으면 404 에러를 발생
            return Response(
                {"status": "error", "error_code": 404, "message": "피드백을 찾을 수 없습니다."},
                status=status.HTTP_404_NOT_FOUND,
            )

    def get(self, request, pk, format=None):
        # userid라는 쿼리 파라미터를 가져옴
        user_id = request.query_params.get("userid", None)
        # get_object 메서드를 이용해 해당 FeedbackResult를 가져옴
        feedback_result = self.get_object(pk, user_id)
        # 예외가 발생하면 Response 객체가 반환되므로, 이를 확인
        if isinstance(feedback_result, Response):
            return feedback_result
        # 가져온 FeedbackResult를 Serializer를 이용해 JSON 형태로 변환
        serializer = FeedbackResultSerializer(feedback_result)
        # 변환된 데이터를 Response 객체에 담아 반환
        # status 필드를 추가
        return Response({"status": "success", **serializer.data})


# 피드백 결과의 태그들을 원형차트로 시각화
class FeedbackChartView(APIView):
    @swagger_auto_schema(
        manual_parameters=[
            openapi.Parameter(
                "userid",
                openapi.IN_QUERY,
                description="사용자 ID",
                required=True,
                type=openapi.TYPE_NUMBER,
            ),
        ]
    )
    def get(self, request, *args, **kwargs):
        userid = self.request.query_params.get("userid", None)
        if userid is not None:
            try:
                user = AuthUser.objects.get(id=userid)
                feedbacks = FeedbackResult.objects.filter(form__user=user)
                serializer = FeedbackTagSerializer(feedbacks, many=True)
                data = serializer.data

                # tag_work와 tag_attitude의 빈도 계산
                tag_work_freq = dict()
                tag_attitude_freq = dict()
                for feedback in data:
                    # 쉼표로 분리된 태그들을 개별적으로 처리
                    tag_works = feedback["tag_work"]
                    tag_works = (
                        tag_works.replace("[", "").replace("]", "").replace("'", "")
                    ).split(", ")
                    tag_attitudes = feedback["tag_attitude"]
                    tag_attitudes = (
                        tag_attitudes.replace("[", "").replace("]", "").replace("'", "")
                    ).split(", ")

                    for tag in tag_works:
                        tag_work_freq[tag] = tag_work_freq.get(tag, 0) + 1
                    for tag in tag_attitudes:
                        tag_attitude_freq[tag] = tag_attitude_freq.get(tag, 0) + 1

                # 각 태그의 퍼센테이지 계산 후 내림차순으로 정렬
                total_work_tags = sum(tag_work_freq.values())
                total_attitude_tags = sum(tag_attitude_freq.values())
                tag_work_percent = sorted(
                    [
                        {
                            "tag": tag,
                            "percentage": round((freq / total_work_tags) * 100, 1),
                        }
                        for tag, freq in tag_work_freq.items()
                    ],
                    key=lambda x: x["percentage"],
                    reverse=True,
                )
                tag_attitude_percent = sorted(
                    [
                        {
                            "tag": tag,
                            "percentage": round((freq / total_attitude_tags) * 100, 1),
                        }
                        for tag, freq in tag_attitude_freq.items()
                    ],
                    key=lambda x: x["percentage"],
                    reverse=True,
                )

                # tag_work와 tag_attitude의 원형 차트 데이터를 각각 반환
                return Response(
                    {
                        "status": "success",
                        "work": tag_work_percent,
                        "attitude": tag_attitude_percent,
                    }
                )
            except AuthUser.DoesNotExist:
                return Response(
                    {
                        "status": "error",
                        "error_code": 401,
                        "message": "사용자를 찾을 수 없습니다.",
                    },
                    status=401,
                )
        else:
            return Response(
                {"status": "error", "error_code": 400, "message": "잘못된 요청입니다."},
                status=400,
            )
