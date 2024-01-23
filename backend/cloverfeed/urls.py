# backend/cloverfeed/urls.py
# URL 경로와 뷰를 매핑해주는 파일
from django.urls import path
from . import views

app_name = "cloverfeed"

urlpatterns = [
    # 회원가입
    path("user/auth/signup", views.SignupView.as_view(), name="signup"),
    # 로그인
    path("user/auth/login", views.LoginView.as_view(), name="login"),
    # 피드백 질문 목록 작성
    path("questions", views.SubmitFormView.as_view(), name="form"),
    # 피드백 폼 유무 조회
    path("form", views.CheckFormExistenceView.as_view(), name="form"),
    # 작성한 질문 목록 확인
    path("form/questions", views.QuestionListView.as_view(), name="questionlist"),
    # 피드백 질문에 답변 제출
    path("answers", views.AnswersView.as_view(), name="answer"),
    # 카테고리(직군)별 피드백 개수 확인
    path(
        "feedbacks/response/count",
        views.CategoryCountView.as_view(),
        name="CategoryCount",
    ),
    # 카테고리(직군)별 피드백 목록 확인
    path(
        "feedbacks/response",
        views.FeedbackListByCategory.as_view(),
        name="feedback-list-by-category",
    ),
    # 받은 피드백답변(주관식) 내용 검색
    path(
        "feedbacks/response",
        views.FeedbackSearchView.as_view(),
        name="feedback-search",
    ),
    # 특정 피드백 상세 내용 확인
    # <int:pk> 부분은 요청 URL에서 피드백 ID를 읽어오는 역할
    path("feedbacks/<int:pk>/", views.FeedbackResultDetail.as_view()),
    # 피드백 결과의 태그들을 원형차트로 시각화
    path(
        "feedbacks/tags/chart",
        views.FeedbackChartView.as_view(),
        name="feedback_chart",
    ),
    # 피드백 요약
    path(
        "feedbacks/summary/",
        views.SummaryView.as_view(),
        name="wordcloudkeyword",
    ),
    # 워드클라우드
    path(
        "feedbacks/wordcloud/", views.WordCloudContextView.as_view(), name="wordcloud"
    ),
    path(
        "feedbacks/wordcloudkeyword/",
        views.WordCloudKeywordView.as_view(),
        name="wordcloudkeyword",
    ),
]
