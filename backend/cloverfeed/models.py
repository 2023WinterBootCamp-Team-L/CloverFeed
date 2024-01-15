from django.db import models
from django.contrib.auth.models import AbstractUser
import random

def generate_user_id():
    return f"#{random.randint(1000, 9999)}"
class AuthUser(AbstractUser):
    user_id = models.CharField(max_length=15, unique=True, default=generate_user_id)
    keywords = models.CharField(max_length=254, null=True)
    summary = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(blank=True, null=True)  # nullable로 변경
    deleted_at = models.DateTimeField(null=True)


class FeedbackResult(models.Model):
    id = models.IntegerField(primary_key=True)
    form = models.ForeignKey("Form", on_delete=models.CASCADE)
    tag = models.CharField(max_length=255)
    respondent_name = models.CharField(max_length=255)
    category = models.CharField(max_length=255, blank=True, null=True)
    summary = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField()
    modified_at = models.DateTimeField(blank=True, null=True)
    field = models.DateTimeField(
        db_column="Field", blank=True, null=True
    )  # Field name made lowercase.


class Form(models.Model):
    id = models.IntegerField(primary_key=True)  # 'id' 필드에 primary_key=True 속성 추가
    user = models.ForeignKey("AuthUser", on_delete=models.CASCADE)
    link = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField()
    modified_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)


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


class Question(models.Model):
    id = models.IntegerField(primary_key=True)
    form = models.ForeignKey("Form", on_delete=models.CASCADE)
    context = models.CharField(max_length=255)
    type = models.CharField(max_length=3)
    created_at = models.DateTimeField()
    modified_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)


class QuestionAnswer(models.Model):
    id = models.IntegerField(primary_key=True)
    feedback = models.ForeignKey("FeedbackResult", on_delete=models.CASCADE)
    question = models.ForeignKey("Question", on_delete=models.CASCADE)
    context = models.TextField(blank=True, null=True)
    type = models.CharField(max_length=1, blank=True, null=True)
    created_at = models.DateTimeField()
    modified_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
