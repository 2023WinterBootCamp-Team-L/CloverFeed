# backend/cloverfeed/urls.py
# URL 경로와 뷰를 매핑해주는 파일

from django.urls import path
from .views import FeedbackResultDetail

# FeedbackResultDetail view를 /feedbacks/<int:pk> 경로에 연결
# <int:pk> 부분은 요청 URL에서 피드백 ID를 읽어오는 역할
urlpatterns = [
    path('feedbacks/<int:pk>', FeedbackResultDetail.as_view()),
]