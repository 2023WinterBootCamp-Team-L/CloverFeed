import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import BackButton from "../components/BackButton";
import TagAnswer from "../components/TagAnswer";
import 디자이너 from "../assets/디자이너.svg";
import { useParams } from "react-router-dom";

interface FeedbackResponse {
  status: string;
  feedback_id?: number;
  respondent_name: string;
  category: string;
  tag_work: string;
  tag_attitude: string;
  tag_work_parsed: string[];
  tag_attitude_parsed: string[];
  summary?: string;
  answers?: {
    question: string;
    type: string;
    context: string;
  }[];
}

interface ErrorResponse {
  status: string;
  error_code: number;
  message: string;
}

const FeedBackResult: React.FC = () => {
  const { respondentName } = useParams<{ respondentName: string }>();
  const [feedbackData, setFeedbackData] = useState<FeedbackResponse | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  const parseTags = (tagsString: string) => {
    try {
      return tagsString
        .replace(/^\[|\]$/g, "") // Remove square brackets
        .split(", ") // Split by comma and space
        .map((tag) => tag.replace(/^'|'$/g, "")); // Remove single quotes from the beginning and end
    } catch (error) {
      console.error("Error parsing tags:", error);
      return [];
    }
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/feedbacks/?respondent_name=%23${respondentName}`
      )
      .then((response: AxiosResponse<FeedbackResponse>) => {
        const data: FeedbackResponse = response.data;
        console.log(response.data);

        if (data.tag_work) {
          data.tag_work_parsed = parseTags(data.tag_work);
        }
        if (data.tag_attitude) {
          data.tag_attitude_parsed = parseTags(data.tag_attitude);
        }

        setFeedbackData(data);
        console.log("피드백 상세");
        console.log(data);
      })
      .catch((error: ErrorResponse) => {
        console.error("피드백을 찾을 수 없습니다.");
        setError(error.message);
      });
  }, [respondentName]);

  if (error) {
    return <div>에러 응답: {error}</div>;
  }

  if (!feedbackData) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="bg-white flex flex-col mx-auto h-screen gap-10 px-5 py-8"
      style={{ width: "393px" }}
    >
      <div>
        <BackButton back page={`/feedbacks/${feedbackData.category}`} />
      </div>
      <div className="flex flex-col gap-8">
        <p className="font-pre text-[22px] font-bold">
          {feedbackData.respondent_name} {feedbackData.category} 피드백
        </p>
        {feedbackData.status === "success" && (
          <div className="flex flex-col gap-6">
            <div className="h-auto w-full flex flex-col justify-center rounded-lg mb-2">
              <p className="font-pre text-[18px] font-bold leading-8">
                {feedbackData.summary}
              </p>
            </div>
            <div className="h-auto w-full flex flex-col">
              <p className="font-pre text-[14px] font-bold">업무능력강점</p>
              <p>
                {feedbackData.tag_work_parsed?.map((tag) => (
                  <TagAnswer key={tag} text={tag} image={디자이너} />
                ))}
              </p>
            </div>
            <div className="h-auto w-full flex flex-col">
              <p className="font-pre text-[14px] font-bold">성격 및 태도</p>
              <p>
                {feedbackData.tag_attitude_parsed?.map((tag) => (
                  <TagAnswer key={tag} text={tag} image={디자이너} />
                ))}
              </p>
            </div>

            <ul>
              {feedbackData.answers?.map((answer, index) => (
                <li
                  key={index}
                  className={`h-auto w-full flex flex-col justify-start ${
                    index % 2 === 0 ? "bg-c-l-purple" : "bg-c-l-blue"
                  } rounded-lg p-4 mb-4 shadow-md`}
                >
                  <div className="flex flex-col gap-6">
                    <p className="font-pre text-[14px] font-bold leading-6">
                      {answer.question}
                    </p>
                    {answer.type === "주관식" ? (
                      <p className="font-pre text-[14px] leading-6">
                        {answer.context}
                      </p>
                    ) : (
                      <span className="flex max-w-fit bg-c-indigo rounded-lg py-1 px-6 mt-1 font-pre text-[12px] text-white">
                        {answer.context}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedBackResult;
