import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import BackButton from "../components/BackButton";
import TagAnswer from "../components/TagAnswer";
import 디자이너 from "../assets/디자이너.svg";

interface RespondentInfo {
  respondent_name: string;
  category: string;
}
interface FeedbackResponse {
  status: string;
  feedback_id?: number;
  respondent_info: RespondentInfo;
  tags_work?: string[];
  tags_attitude?: string[];
  summary?: string;
  answers?: {
    question: string;
    type: string;
    answer: string;
  }[];
}

interface ErrorResponse {
  status: string;
  error_code: number;
  message: string;
}

const FeedBackResult: React.FC = () => {
  const [feedbackData, setFeedbackData] = useState<FeedbackResponse | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  const getCategoryText = (category?: string): string => {
    switch (category) {
      case "개발자":
        return "developer";
      case "디자이너":
        return "designer";
      case "기획자":
        return "planner";
      case "PM/PO":
        return "pmpo";
      case "기타직무":
        return "others";
      default:
        return "";
    }
  };

  useEffect(() => {
    const feedbackId = 1;
    const userId = 1;

    const apiUrl = `/api/feedbacks/${feedbackId}?userid=${userId}`;

    axios
      .get(apiUrl)
      .then((response: AxiosResponse<FeedbackResponse>) => {
        const data: FeedbackResponse = response.data;
        setFeedbackData(data);
      })
      .catch((error: ErrorResponse) => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!feedbackData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col overflow-hidden max-w-[24.56rem] mx-auto h-auto px-5 py-8 gap-4">
      <div className="flex justify-between">
        <BackButton
          back
          page={`/feedbacks/${getCategoryText(feedbackData.respondent_info.category)}`}
        />
      </div>
      <p className="text-xl">
        {feedbackData.respondent_info.respondent_name}{" "}
        {feedbackData.respondent_info.category} 피드백
      </p>
      {feedbackData.status === "success" && (
        <div className="flex flex-col gap-2">
          <div className="bg-c-blue bg-opacity-50 h-auto w-full flex flex-col justify-center border-opacity-50 rounded-3xl leading-1.25 p-8 text-sm">
            <p className="text-lg">{feedbackData.summary}</p>
          </div>
          <div>
            <div className="h-auto w-full flex flex-col p-2">
              <p className="text-md font-bold">업무능력강점</p>
              <p>
                {feedbackData.tags_work?.map((tag) => (
                  <TagAnswer key={tag} text={tag} image={디자이너} />
                ))}
              </p>
            </div>
            <div className="h-auto w-full flex flex-col p-2">
              <p className="text-md font-bold">성격 및 태도</p>
              <p>
                {feedbackData.tags_attitude?.map((tag) => (
                  <TagAnswer key={tag} text={tag} image={디자이너} />
                ))}
              </p>
            </div>
          </div>
          <div className="">
            <ul>
              {feedbackData.answers?.map((answer, index) => (
                <li
                  key={index}
                  className={`h-auto w-full flex flex-col bg-white justify-start ${
                    index % 2 === 0
                      ? "border-c-purple border-opacity-50"
                      : "border-c-blue"
                  } border-2 rounded-xl p-2 text-sm mb-2 gap-1`}
                >
                  <p className="text-md font-bold">{answer.question}</p>
                  {answer.type === "주관식" ? (
                    <p>{answer.answer}</p>
                  ) : (
                    <span className="flex bg-c-indigo text-white rounded-lg px-5 max-w-fit">
                      {answer.answer}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedBackResult;
