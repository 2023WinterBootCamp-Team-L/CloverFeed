# backend/cloverfeed/serializers.py
# 모델 인스턴스나 쿼리셋을 JSON 형태로 변환해주는 역할을 하는 파일

# 모델을 JSON 형태로 변환해주는 Serializer를 정의
from rest_framework import serializers
from .models import AuthUser, Form, Question, FeedbackResult


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuthUser
        fields = [
            "id",
            "username",
            "email",
            "password",
            "created_at",
        ]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        password = validated_data.pop("password", None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class FormSerializer(serializers.ModelSerializer):
    class Meta:
        model = Form
        fields = "__all__"


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = "__all__"  # 모델의 모든 필드를 포함


class FeedbackResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackResult
        fields = "__all__"  # 모델의 모든 필드를 포함


class FeedbackResultSerializer(serializers.ModelSerializer):
    respondent_name_category = serializers.SerializerMethodField()

    class Meta:
        model = FeedbackResult
        fields = [
            "id",
            "tag",
            "respondent_name_category",
            "summary",
            "created_at",
            "modified_at",
            "field",
        ]

    def get_respondent_name_category(self, obj):
        return f"{obj.respondent_name} {obj.category}"
