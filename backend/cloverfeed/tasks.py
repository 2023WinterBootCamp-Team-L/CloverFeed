from __future__ import absolute_import, unicode_literals
from celery import shared_task
from openai import OpenAI
from django.conf import settings
from .models import FeedbackResult

@shared_task
def generate_summary(answers, result_id):  # result_id 파라미터 추가
    client = OpenAI(api_key=settings.OPENAI_KEY)
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "user",
                "content": str(answers)
                + "I want you to act like a co-worker or a corporate human resources manager. "
                  "Pick out only the important points and summarize them in one sentence as briefly and concisely as possible. "
                  "The length of the your answer must be 90~110 characters in Korean. "
                  "Korean like this example '홍길동님은 개성이 뚜렷하고 경청하는 팀 분위기 메이커라고 피드백을 보내셨네요!' "
                  "Your answer must be in polite Korean.",
            }
        ],
    )
    summary = response.choices[0].message.content.strip()

    # 작업이 완료되면 FeedbackResult 객체를 업데이트
    # 요약 텍스트가 준비되지 않은 상태에서 FeedbackResult 객체가 생성되는 것을 방지
    FeedbackResult.objects.filter(id=result_id).update(summary=summary)
