# backend/cloverfeed/urls.py
# URL 경로와 뷰를 매핑해주는 파일
from django.urls import path, re_path
from .views import QuestionListView, FeedbackResultDetail

urlpatterns = [
    # FeedbackResultDetail view를 /feedbacks/<int:pk> 경로에 연결
    # <int:pk> 부분은 요청 URL에서 피드백 ID를 읽어오는 역할
    path('feedbacks/<int:pk>', FeedbackResultDetail.as_view()),
    path("forms/questions/", QuestionListView.as_view(), name="questionlist"),
    # path("forms/questions/", QuestionListView.as_view()),  # handle trailing slash
]
