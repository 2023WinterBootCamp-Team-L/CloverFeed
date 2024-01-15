from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
from rest_framework import status, serializers, generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework.exceptions import AuthenticationFailed, ValidationError
from .models import Form, Question, AuthUser
from .serializers import QuestionSerializer
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
