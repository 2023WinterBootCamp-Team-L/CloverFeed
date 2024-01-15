# backend/cloverfeed/views.py
# 요청을 처리하고 응답을 반환하는데 필요한 로직을 작성하는 파일

from django.http import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import FeedbackResult
from .serializers import FeedbackResultSerializer

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
