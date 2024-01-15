# backend/cloverfeed/views.py
# 요청을 처리하고 응답을 반환하는데 필요한 로직을 작성하는 파일
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics
from .models import Form, Question, FeedbackResult, AuthUser
from .serializers import QuestionSerializer, FeedbackResultSerializer

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

# 카테고리(직군)별 피드백 목록 조회
class FeedbackListByCategory(APIView):
    def get(self, request, format=None):
        userid = request.query_params.get('userid', None)
        category = request.query_params.get('category', None)

        # 유저 검증
        try:
            user = AuthUser.objects.get(pk=userid)
        except AuthUser.DoesNotExist:
            return Response({"status": "error", "error_code": 401, "message": "사용자를 찾을 수 없습니다."}, status=401)

        # 카테고리에 따른 피드백 결과 조회
        feedbacks = FeedbackResult.objects.filter(form__user=user, category=category)

        # 직렬화 및 응답
        serializer = FeedbackResultSerializer(feedbacks, many=True)
        return Response({"status": "success", "feedbacks": serializer.data})
   
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


