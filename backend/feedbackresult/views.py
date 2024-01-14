from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from .models import FeedbackResult, QuestionAnswer
from feedbackresult.models import Question


@csrf_exempt
@require_http_methods(["GET"])
def get_feedback_detail(request, feedback_id):
    try:
        # Get feedback result with the given ID
        feedback_result = get_object_or_404(FeedbackResult, id=feedback_id)

        # Get related questions and answers
        question_answers = QuestionAnswer.objects.filter(feedback_id=feedback_id)

        # Prepare the response data
        response_data = {
            "status": "success",
            "feedback_id": str(feedback_result.id),
            "respondent_name": feedback_result.respondent_name,
            "tag": feedback_result.tag.split(','),  # Assuming tags are stored as comma-separated values
            "summary": feedback_result.summary,
            "answers": []
        }

        # Iterate through question answers
        for qa in question_answers:
            question = get_object_or_404(Question, id=qa.question_id)
            answer_data = {
                "question": question.context,
                "type": question.type,
                "answer": qa.context
            }
            response_data["answers"].append(answer_data)

        return JsonResponse(response_data, safe=False)

    except FeedbackResult.DoesNotExist:
        # Return error response if feedback is not found
        error_response = {
            "status": "error",
            "error_code": 404,
            "message": "피드백을 찾을 수 없습니다."
        }
        return JsonResponse(error_response, status=404)
