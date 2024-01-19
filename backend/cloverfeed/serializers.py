# backend/cloverfeed/serializers.py
# 모델 인스턴스나 쿼리셋을 JSON 형태로 변환해주는 역할을 하는 파일

# 모델을 JSON 형태로 변환해주는 Serializer를 정의
from rest_framework import serializers
from .models import (
    AuthUser,
    Form,
    Question,
    FeedbackResult,
    MultipleChoice,
    QuestionAnswer,
)
from ast import literal_eval


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
    choices = serializers.ListField(child=serializers.CharField(), required=False)

    class Meta:
        model = Question
        fields = ["context", "type", "choices"]

    def to_representation(self, instance):
        representation = super().to_representation(instance)

        if isinstance(instance, list):
            # QuerySet의 경우, 각 객체에 대해 선택지를 가져오기
            for item in instance:
                if item.type == "객관식":
                    choices = MultipleChoice.objects.filter(
                        question=item.id
                    ).values_list("choice_context", flat=True)
                    item["choices"] = choices[0]

            return instance
        else:
            # 단일 객체의 경우, 선택지를 가져오기
            if instance.type == "객관식":
                choices = MultipleChoice.objects.filter(
                    question=instance.id
                ).values_list("choice_context", flat=True)
                representation["choices"] = choices[0]

            return representation


# 피드백 상세내용 조회
class FeedbackResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackResult
        fields = "__all__"  # 모델의 모든 필드를 포함


# 카테고리(직군)별 피드백 목록 조회
class FeedbackResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackResult
        fields = [
            "id",
            "tag_work",
            "tag_attitude",
            "respondent_name",
            "category",
            "summary",
            "created_at",
            "modified_at",
            "field",
        ]

# 받은 피드백답변 중 검색을 위한 Serializer
class FeedbackResultSearchSerializer(serializers.ModelSerializer):
    feedback_id = serializers.IntegerField(source="feedback.id")
    respondent_name = serializers.CharField(source="feedback.respondent_name")
    category = serializers.CharField(source="feedback.category")
    tag_work = serializers.CharField(source="feedback.tag_work")
    tag_attitude = serializers.CharField(source="feedback.tag_attitude")
    result = serializers.CharField(source="context")

    class Meta:
        model = QuestionAnswer
        fields = [
            "feedback_id",
            "respondent_name",
            "category",
            "tag_work",
            "tag_attitude",
            "result",
        ]


# 피드백 결과의 'tag_work'와 'tag_attitude'를 JSON으로 변환 -> 원형차트 시각화
class FeedbackTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackResult
        fields = ("tag_work", "tag_attitude")
