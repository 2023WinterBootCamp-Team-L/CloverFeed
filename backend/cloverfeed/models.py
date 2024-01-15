from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser) :
    username = models.CharField(max_length=255, unique=True)
    email = models.CharField(max_length=200, unique = True)
    password = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    REQUIRED_FIELDS = []

class AuthUser(AbstractUser):
    keywords = models.CharField(max_length=254, null=True)
    summary = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(blank=True, null=True)  # nullable로 변경
    deleted_at = models.DateTimeField(null=True)


class FeedbackResult(models.Model):
    id = models.IntegerField(primary_key=True)
    form_id = models.IntegerField()
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
    user_id = models.IntegerField()
    link = models.CharField(max_length=255, blank=True, null=True)
    created_at = models.DateTimeField()
    modified_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)


class MultipleChoice(models.Model):
    id = models.CharField(
        primary_key=True, max_length=255
    )  # 'id' 필드에 primary_key=True 속성 추가
    question_id = models.IntegerField()
    choice_context = models.CharField(max_length=255)
    select_limit = models.IntegerField(blank=True, null=True)
    created_at = models.DateTimeField()
    modified_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)


class Question(models.Model):
    id = models.IntegerField(primary_key=True)
    form_id = models.IntegerField()
    context = models.CharField(max_length=255)
    type = models.CharField(max_length=3)
    created_at = models.DateTimeField()
    modified_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)


class QuestionAnswer(models.Model):
    id = models.IntegerField(primary_key=True)
    feedback_id = models.IntegerField()
    question_id = models.IntegerField()
    context = models.TextField(blank=True, null=True)
    type = models.CharField(max_length=1, blank=True, null=True)
    created_at = models.DateTimeField()
    modified_at = models.DateTimeField(blank=True, null=True)
    deleted_at = models.DateTimeField(blank=True, null=True)
