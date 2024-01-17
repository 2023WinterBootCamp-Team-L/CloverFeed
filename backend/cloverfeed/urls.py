# backend/cloverfeed/urls.py
# URL 경로와 뷰를 매핑해주는 파일
from django.urls import path, re_path
from . import views

# from .views import QuestionListView, FeedbackResultDetail,CheckFormExistenceView

app_name = "cloverfeed"

urlpatterns = [
    path("user/auth/signup/", views.SignupView.as_view(), name="signup"),
    path("user/auth/login/", views.LoginView.as_view(), name="login"),
    path("forms/questions/", views.QuestionListView.as_view(), name="questionlist"),
    path("forms/", views.SubmitFormsView.as_view(), name="submitforms"),

    # 카테고리(직군)별 피드백 목록 조회
    path("feedbacks/response/list", views.FeedbackListByCategory.as_view(), name="feedback-list-by-category"),

    # 피드백 상세내용 조회
    # <int:pk> 부분은 요청 URL에서 피드백 ID를 읽어오는 역할
    path("feedbacks/<int:pk>", views.FeedbackResultDetail.as_view()),

    # 받은 피드백답변(주관식) 내용 검색
    path('feedbacks/response', views.FeedbackSearchView.as_view(), name='feedback-search'),

    # 피드백폼 유무 조회
    path(
        "check_form_existence/",
        views.CheckFormExistenceView.as_view(),
        name="check_form_existence",
    ),
    path('feedbackforms/', views.CheckFormExistenceView.as_view(), name='feedbackforms'),
    path('answer/', views.answersView.as_view(), name='answer'),

]
