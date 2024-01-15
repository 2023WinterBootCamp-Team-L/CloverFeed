# backend/cloverfeed/serializers.py
# 모델 인스턴스나 쿼리셋을 JSON 형태로 변환해주는 역할을 하는 파일

# FeedbackDetail 모델을 JSON 형태로 변환해주는 Serializer를 정의
from rest_framework import serializers
from .models import Form, Question, FeedbackResult

class FormSerializer(serializers.ModelSerializer):
    class Meta:
        model = Form
        fields = "__all__"


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = "__all__"
        
class FeedbackResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackResult
        fields = '__all__' # 모델의 모든 필드를 포함

