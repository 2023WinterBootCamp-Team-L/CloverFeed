from __future__ import absolute_import, unicode_literals
from celery import Celery, shared_task
from openai import OpenAI
from django.conf import settings
from .models import FeedbackResult
# from ..config.celery import app


# import pika
#
# def callback(ch, method, properties, body):
#     print(f" [x] Received '{body.decode()}'")
#
# def consume_messages_from_topic_exchange(topic):
#     # RabbitMQ 연결 설정
#     connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
#     channel = connection.channel()
#
#     # Topic Exchange로부터 메시지 받기
#     channel.exchange_declare(exchange='gpt_topic', exchange_type='topic')
#     result = channel.queue_declare(queue='', exclusive=True)
#     queue_name = result.method.queue
#
#     channel.queue_bind(exchange='gpt_topic', queue=queue_name, routing_key=topic)
#
#     print(f" [*] Waiting for messages with topic '{topic}'. To exit press CTRL+C")
#
#     channel.basic_consume(queue=queue_name, on_message_callback=callback, auto_ack=True)
#     channel.start_consuming()
#
# # 메시지 받기
# consume_messages_from_topic_exchange("gpt.topic.example")

# app = Celery('tasks', broker='pyamqp://cloverfeed@localhost//')
@shared_task
def generate_summary(answers, result_id):
    client = OpenAI(api_key=settings.OPENAI_KEY)
    print(client)
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
    print(2222)
    summary = response.choices[0].message.content.strip()

    # 작업이 완료되면 FeedbackResult 객체를 업데이트
    # 요약 텍스트가 준비되지 않은 상태에서 FeedbackResult 객체가 생성되는 것을 방지
    result = FeedbackResult.objects.filter(id=result_id).first()
    if result:  # 결과가 있는 경우에만 업데이트
        result.summary = summary
        result.save()

    return summary
