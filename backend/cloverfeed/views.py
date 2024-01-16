# backend/cloverfeed/views.py
# 요청을 처리하고 응답을 반환하는데 필요한 로직을 작성하는 파일
from django.shortcuts import render
from django.http import HttpResponse, Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics
from .models import Form, Question, FeedbackResult
from .serializers import QuestionSerializer, FeedbackResultSerializer
from cloverfeed.models import AuthUser, Form
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt


class FeedbackResultDetail(APIView):
    def get_object(self, pk, user_id):
        try:
            # 요청받은 pk와 user_id로 FeedbackResult를 조회
            return FeedbackResult.objects.get(pk=pk, id=user_id)
        except FeedbackResult.DoesNotExist:
            # 해당하는 FeedbackResult가 없으면 404 에러를 발생
            return Response({
                "status": "error",
                "error_code": 404,
                "message": "피드백을 찾을 수 없습니다."
            }, status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk, format=None):
        # userid라는 쿼리 파라미터를 가져옴
        user_id = request.query_params.get('userid', None)
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
        

class CheckFormExistenceView(APIView):
    def post(self, request):
        user_id = request.data.get("user_id")
        
        # 사용자 객체 가져오기
        user = get_object_or_404(AuthUser, id=user_id)
        
        # 폼 존재 여부 확인
        #form_id가 1이면 폼이 존재, form_id가 0이면 폼이 존재하지않음
        form_exists = Form.objects.filter(user=user, id=1).exists()
        
        # 응답 생성
        response_data = {
            "user_id": request.data.get("user_id"),
            "message": "폼이 존재합니다." if form_exists else "폼이 존재하지 않습니다.",
        }
        
        return Response(response_data)