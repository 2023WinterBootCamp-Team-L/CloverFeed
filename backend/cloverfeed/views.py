from django.shortcuts import render

# Create your views here.
from django.test import TestCase
from django.http import JsonResponse
from rest_framework.parsers import JSONParser
from django.contrib.auth.models import User
from rest_framework import serializers
from django.views.decorators.csrf import csrf_exempt
from rest_framework.exceptions import AuthenticationFailed
import jwt
import datetime
from rest_framework.exceptions import ValidationError
from rest_framework import status


JWT_SECRET = 'your_jwt_secret_key'  # 실제로는 보안으로 관리해야 하는 시크릿 키

@csrf_exempt
def signup(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')

        # 입력된 데이터 유효성 검사
        if not (username and email and password):
            return JsonResponse({'error': 'Invalid input data입력한 정보 형식이 올바르지 않습니다.'}, status=status.HTTP_400_BAD_REQUEST)

        # 사용자 생성
        try:
            user = User.objects.create_user(username=username, email=email, password=password)
        except ValidationError as e:
            return JsonResponse({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

        # JWT 토큰 생성
        payload = {
            'username': user.username,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(days=1),  # 토큰 만료 기간 설정
            'iat': datetime.datetime.utcnow()
        }
        token = jwt.encode(payload, JWT_SECRET, algorithm='HS256').decode('utf-8')

        # 회원 가입 성공 응답
        response_data = {
            'message': '회원가입을 환영합니다.',
            'token': token
        }
        return JsonResponse(response_data, status=status.HTTP_201_CREATED)

    return JsonResponse({'error': '입력한 정보 형식이 올바르지 않습니다.'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        email = data.get('email')  # 'email' 키로 이메일을 가져옵니다.
        password = data.get('password')

        if not email or not password:
            raise AuthenticationFailed('인증 실패. 이메일 또는 비밀번호가 올바르지 않습니다.')

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('인증 실패. 이메일 또는 비밀번호가 올바르지 않습니다.')

        if not user.check_password(password):
            raise AuthenticationFailed('인증 실패. 이메일 또는 비밀번호가 올바르지 않습니다.')

        payload = {
            'email': user.email,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, JWT_SECRET, algorithm='HS256').decode('utf-8')

        response = JsonResponse({
            'message': '로그인을 환영합니다.'
        })

        response.set_cookie(key='jwt', value=token, httponly=False, samesite='None')

        return response

@csrf_exempt
def logout(request) :
    if request.method == 'POST' :
        response = JsonResponse({
            "message" : "로그아웃 성공"
        })
        response.delete_cookie('jwt')
        return response