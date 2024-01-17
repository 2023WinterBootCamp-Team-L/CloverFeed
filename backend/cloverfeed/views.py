# backend/cloverfeed/views.py
# 요청을 처리하고 응답을 반환하는데 필요한 로직을 작성하는 파일

from django.http import JsonResponse
from django.contrib.auth import login
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import AllowAny
from django.db.models import Q
from django.db.models import Count
from .models import (
    Form,
    Question,
    AuthUser,
    FeedbackResult,
    QuestionAnswer,
    MultipleChoice,
)
from .serializers import QuestionSerializer, FeedbackResultSerializer, FeedbackResultSearchSerializer, FeedbackTagSerializer
import json

class SignupView(APIView):
    permission_classes = [AllowAny]

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


class LoginView(APIView):
    permission_classes = [AllowAny]

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

# 받은 피드백 상세내용 조회
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


# 카테고리(직군)별 피드백 목록 조회
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
        userid = request.query_params.get('userid', None)
        keyword = request.query_params.get('keyword', None)
        if not userid:
            return Response({"status": "error", "error_code": 401, "message": "사용자를 찾을 수 없습니다."})
        user = AuthUser.objects.get(pk=userid)
        if keyword:
            feedbacks = QuestionAnswer.objects.filter(Q(feedback__form__user=user), Q(context__icontains=keyword), Q(type="주관식"))
        else:
            feedbacks = QuestionAnswer.objects.filter(Q(feedback__form__user=user), Q(type="주관식"))
        serializer = FeedbackResultSearchSerializer(feedbacks, many=True)
        return Response({"status": "success", "feedbacks": serializer.data})


# 피드백 결과의 태그들을 원형차트로 시각화
class FeedbackChartView(APIView):
    def get(self, request, *args, **kwargs):
        userid = self.request.query_params.get('userid', None)
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
                    tag_works = feedback['tag_work'].split(', ')
                    tag_attitudes = feedback['tag_attitude'].split(', ')
                    for tag in tag_works:
                        tag_work_freq[tag] = tag_work_freq.get(tag, 0) + 1
                    for tag in tag_attitudes:
                        tag_attitude_freq[tag] = tag_attitude_freq.get(tag, 0) + 1

                # 각 태그의 퍼센테이지 계산 후 내림차순으로 정렬
                total_work_tags = sum(tag_work_freq.values())
                total_attitude_tags = sum(tag_attitude_freq.values())
                tag_work_percent = sorted(
                    [{'tag': tag, 'percentage': (freq / total_work_tags) * 100} for tag, freq in
                     tag_work_freq.items()], key=lambda x: x['percentage'], reverse=True)
                tag_attitude_percent = sorted(
                    [{'tag': tag, 'percentage': (freq / total_attitude_tags) * 100} for tag, freq in
                     tag_attitude_freq.items()], key=lambda x: x['percentage'], reverse=True)

                # tag_work와 tag_attitude의 원형 차트 데이터를 각각 반환
                return Response({
                    'status': 'success',
                    'work': tag_work_percent,
                    'attitude': tag_attitude_percent,
                })
            except AuthUser.DoesNotExist:
                return Response({
                    'status': 'error',
                    'error_code': 401,
                    'message': '사용자를 찾을 수 없습니다.'
                }, status=401)
        else:
            return Response({
                'status': 'error',
                'error_code': 400,
                'message': '잘못된 요청입니다.'
            }, status=400)


class QuestionListView(APIView):
    def get(self, request, *args, **kwargs):
        # query_params에서 userid 가져오기
        user_id = request.query_params.get("userid", None)

        # 필요한 유효성 검사를 수행하고, 예를 들어, 사용자가 필수 매개변수를 제공했는지 확인
        if user_id is None:
            return Response(
                {"error": "userid를 제공해야 합니다."}, status=status.HTTP_400_BAD_REQUEST
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


class SubmitFormsView(APIView):
    def post(self, request):
        user_id = request.data.get("user_id")
        questions = request.data.get("questions")

        print(user_id)
        print(questions)

        # username = request.data.get("username")
        # email = request.data.get("email")
        # password = request.data.get("password")

        # # 입력된 데이터 유효성 검사
        # if not (username and email and password):
        #     return JsonResponse(
        #         {
        #             "status": "error",
        #             "error_code": 400,
        #             "message": "입력한 정보 형식이 올바르지 않습니다.",
        #         },
        #         status=status.HTTP_400_BAD_REQUEST,
        #     )

        # # 사용자 생성
        # try:
        #     AuthUser.objects.create_user(
        #         username=username, email=email, password=password
        #     )
        # except ValidationError as e:
        #     return JsonResponse({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        # # 회원 가입 성공 응답
        # response_data = {
        #     "status": "success",
        #     "message": "회원가입을 환영합니다.",
        # }
        # return JsonResponse(response_data, status=status.HTTP_201_CREATED)


class CheckFormExistenceView(APIView):
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
