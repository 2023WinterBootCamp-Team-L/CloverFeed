import axios, { AxiosResponse } from "axios";
import BackButton from "../components/BackButton";
import React, { useEffect, useState } from "react";

interface RespondentInfo {
  respondent_name: string;
  category: string;
}

interface Feedback {
  feedback_id: string;
  respondent_info: RespondentInfo;
  tags_work: string[];
  tags_attitude: string[];
}

interface SuccessResponse {
  status: string;
  feedbacks: Feedback[];
}

interface ErrorResponse {
  status: string;
  error_code: number;
  message: string;
}

const FeedbackList: React.FC = () => {
  const userId = "사용자ID";
  const category = "직군";
  const apiUrl = `http://localhost/feedbacks/response/list?userid=${userId}&category=${category}`;

  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response: AxiosResponse<SuccessResponse | ErrorResponse>) => {
        const data: SuccessResponse | ErrorResponse = response.data;

        if (data.status === "success") {
          // 피드백 데이터로 상태 업데이트
          setFeedbacks((data as SuccessResponse).feedbacks);
        } else {
          // 에러 응답 처리
          console.error("에러 응답:", (data as ErrorResponse).message);
        }
      })
      .catch((error: ErrorResponse) => {
        // 에러 응답 처리
        console.error("에러 응답:", error.message);
      });
  }, [apiUrl]);

  return (
    <div className="flex flex-col overflow-hidden max-w-[24.56rem] mx-auto h-[53.25rem] px-5 py-8 gap-4">
      <div className="flex justify-between">
        <BackButton back page="/Linkmain" />
      </div>
      <div className="text-xl mt-4">{category}의 피드백</div>
      <ul>
        {feedbacks.map((feedback) => (
          <li
            key={feedback.feedback_id}
            className="h-32 w-full flex flex-col justify-start p-4 leading-1.25 text-sm bg-white rounded-xl border border-c-purple border-opacity-50 mt-2"
          >
            <div>
              <p className="text-xl text-black">
                응답자: {feedback.respondent_info.respondent_name} {category}
                님의 피드백
              </p>
              <p className="text-gray-600">
                태그: {feedback.tags_work.join(", ")}
              </p>
              <p className="text-gray-600">
                태그: {feedback.tags_attitude.join(", ")}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
