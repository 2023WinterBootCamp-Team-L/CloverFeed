from django.shortcuts import render
from rest_framework import generics
from .models import Form, Question
from .serializers import QuestionSerializer
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


# Create your views here.
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
