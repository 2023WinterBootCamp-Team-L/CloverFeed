# backend/cloverfeed/serializers.py
# 모델 인스턴스나 쿼리셋을 JSON 형태로 변환해주는 역할을 하는 파일

# 모델을 JSON 형태로 변환해주는 Serializer를 정의
from rest_framework import serializers
from .models import AuthUser, Form, Question, FeedbackResult, MultipleChoice, QuestionAnswer
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
                    item["choices"] = literal_eval(choices[0])

            return instance
        else:
            # 단일 객체의 경우, 선택지를 가져오기
            if instance.type == "객관식":
                choices = MultipleChoice.objects.filter(
                    question=instance.id
                ).values_list("choice_context", flat=True)
                representation["choices"] = literal_eval(choices[0])

            return representation

# 피드백 상세내용 조회
class FeedbackResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = FeedbackResult
        fields = "__all__"  # 모델의 모든 필드를 포함

# 카테고리(직군)별 피드백 목록 조회
class FeedbackResultSerializer(serializers.ModelSerializer):
    respondent_name_category = serializers.SerializerMethodField()

    class Meta:
        model = FeedbackResult
        fields = [
            "id",
            "tag_work",
            "tag_attitude",
            "respondent_name_category",
            "summary",
            "created_at",
            "modified_at",
            "field",
        ]

    def get_respondent_name_category(self, obj):
        return f"{obj.respondent_name} {obj.category}"

# 받은 피드백답변 중 검색을 위한 Serializer
class FeedbackResultSearchSerializer(serializers.ModelSerializer):
    feedback_id = serializers.IntegerField(source='feedback.id')
    respondent_name = serializers.CharField(source='feedback.respondent_name')
    tag_work = serializers.CharField(source='feedback.tag_work')
    tag_attitude = serializers.CharField(source='feedback.tag_attitude')
    result = serializers.CharField(source='context')

    class Meta:
        model = QuestionAnswer
        fields = ['feedback_id', 'respondent_name', 'tag_work', 'tag_attitude', 'result']