# backend/cloverfeed/views.py
# 요청을 처리하고 응답을 반환하는데 필요한 로직을 작성하는 파일

from django.http import JsonResponse, HttpResponse, Http404
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from rest_framework import status, serializers, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework.exceptions import AuthenticationFailed, ValidationError
from .models import Form, Question, AuthUser, FeedbackResult
from .serializers import QuestionSerializer, FeedbackResultSerializer
import uuid, random


# Create your views here.
@csrf_exempt
def signup(request):
    if request.method == "POST":
        data = JSONParser().parse(request)
        username = data.get("username")
        email = data.get("email")
        password = data.get("password")

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
            user_id = f"#{random.randint(1000, 9999)}"
            AuthUser.objects.create_user(
                username=username, email=email, password=password, user_id=user_id
            )
        except ValidationError as e:
            return JsonResponse({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        # 회원 가입 성공 응답
        response_data = {
            "status": "success",
            "message": "회원가입을 환영합니다.",
            "user_id": user_id,  # 추가된 부분: 생성된 user_id 반환
        }
        return JsonResponse(response_data, status=status.HTTP_201_CREATED)

    return JsonResponse(
        {
            "status": "error",
            "error_code": 405,
            "message": "입력한 정보 형식이 올바르지 않습니다.",
        },
        status=status.HTTP_405_METHOD_NOT_ALLOWED,
    )


@csrf_exempt
def login(request):
    if request.method == "POST":
        data = JSONParser().parse(request)
        email = data.get("email")
        password = data.get("password")

        if not email or not password:
            raise AuthenticationFailed("인증 실패. 이메일 또는 비밀번호가 올바르지 않습니다.")

        user = AuthUser.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed("인증 실패. 이메일 또는 비밀번호가 올바르지 않습니다.")

        if not user.check_password(password):
            raise AuthenticationFailed("인증 실패. 이메일 또는 비밀번호가 올바르지 않습니다.")

        # 토큰 생성 (여기서는 간단하게 uuid 모듈 사용)
        token = str(uuid.uuid4())

        response = JsonResponse({"message": "로그인을 환영합니다."})

        # 클라이언트의 쿠키에 토큰을 저장
        response.set_cookie("jwt", token, httponly=False, samesite="None")

        return response


@csrf_exempt
def logout(request):
    if request.method == "POST":
        token = request.COOKIES.get("jwt")

        if token is not None:
            # 여기에서 클라이언트로부터 받은 토큰(UUID)에 대한 로직을 수행합니다.
            # 예: 토큰을 무효화하는 데이터베이스에 추가 또는 기존의 무효화된 토큰 목록에 추가 등

            response = JsonResponse({"message": "로그아웃 성공"})

            # 클라이언트의 쿠키에서 'jwt' 토큰을 삭제합니다.
            response.delete_cookie("jwt")
        else:
            response = JsonResponse(
                {"message": "로그인이 필요합니다."}, status=status.HTTP_401_UNAUTHORIZED
            )

        return response


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


class QuestionListView(APIView):
    def get(self, request, *args, **kwargs):
        # query_params에서 userid 가져오기
        user_id = request.query_params.get("userid", None)

        # 필요한 유효성 검사를 수행하고, 예를 들어, 사용자가 필수 매개변수를 제공했는지 확인
        if user_id is None:
            return Response(
                {"error": "userid를 제공해야 합니다."}, status=status.HTTP_400_BAD_REQUEST
            )

        # queryset = Question.objects.all()
        # 사용자 ID를 사용하여 데이터를 조회하거나 다른 로직 수행
        # 여기에서는 예시로 더미 데이터를 사용
        questions_data = Question.objects.all()

        # 시리얼라이저를 사용하여 데이터 직렬화
        serializer = QuestionSerializer(questions_data, many=True)

        # 직렬화된 데이터를 응답으로 반환
        return Response(serializer.data, status=status.HTTP_200_OK)
