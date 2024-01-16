from django.db import models
from django.contrib.auth.models import AbstractUser
import random

# 나중에 답변 받는 API 할 때 쓰렴
# def generate_respondent_name():
#     return f"#{random.randint(1000, 9999)}"


# 사용자
class AuthUser(AbstractUser):
    keywords = models.CharField(max_length=254, null=True)
    summary = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(blank=True, null=True)  # nullable로 변경
    deleted_at = models.DateTimeField(null=True)


# 하나의 피드백폼(Form)의 링크를 통해 들어온 피드백답변(feedbackresult)
class FeedbackResult(models.Model):
    id = models.IntegerField(primary_key=True)
    form = models.ForeignKey("Form", on_delete=models.CASCADE)
    tag = models.CharField(max_length=255)
    respondent_name = models.CharField(max_length=255)
    category = models.CharField(max_length=255, blank=True, null=True)
    summary = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField()
    modified_at = models.DateTimeField(blank=True, null=True)
    field = models.DateTimeField(db_column="Field", blank=True, null=True)


# question들이 모여 만들어지는 피드백Form
class Form(models.Model):
    id = models.IntegerField(primary_key=True)  # 'id' 필드에 primary_key=True 속성 추가
    user = models.ForeignKey("AuthUser", on_delete=models.CASCADE)
    link = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField()
    modified_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)


# question이 객관식질문인 경우에만 해당됨. 객관식 선지
class MultipleChoice(models.Model):
    id = models.CharField(
        primary_key=True, max_length=255
    )  # 'id' 필드에 primary_key=True 속성 추가
    question = models.ForeignKey("Question", on_delete=models.CASCADE)
    choice_context = models.CharField(max_length=255)
    select_limit = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField()
    modified_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)


# Form에 들어가는 질문들
class Question(models.Model):
    id = models.IntegerField(primary_key=True)
    form = models.ForeignKey("Form", on_delete=models.CASCADE)
    context = models.CharField(max_length=255)
    type = models.CharField(max_length=3)  # 질문유형) 객관식질문인지, 주관식 질문인지
    created_at = models.DateTimeField()
    modified_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)


# 하나의 question에 대한 답변(answer)내용
class QuestionAnswer(models.Model):
    id = models.IntegerField(primary_key=True)
    feedback = models.ForeignKey("FeedbackResult", on_delete=models.CASCADE)
    question = models.ForeignKey("Question", on_delete=models.CASCADE)
    context = models.TextField(blank=True, null=True)
    type = models.CharField(max_length=1, blank=True, null=True)
    created_at = models.DateTimeField()
    modified_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
