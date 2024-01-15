from rest_framework import serializers
from .models import AuthUser,Form, Question

class UserSerializer(serializers.ModelSerializer) :
    class Meta:
        model = AuthUser
        fields = ['id', 'username', 'email', 'password', 'created_at']
        extra_kwargs = {
            'password' : {'write_only' : True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None :
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
        fields = "__all__"
