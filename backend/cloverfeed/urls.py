from django.urls import path, re_path
from .views import QuestionListView

urlpatterns = [
    path("forms/questions/", QuestionListView.as_view(), name="questionlist"),
    # path("forms/questions/", QuestionListView.as_view()),  # handle trailing slash
]
