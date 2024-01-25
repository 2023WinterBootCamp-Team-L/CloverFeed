import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import BackButton from "../components/BackButton";
import TagAnswer from "../components/TagAnswer";
import 디자이너 from "../assets/디자이너.svg";
import { useParams } from "react-router-dom";

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
  const { feedbackId } = useParams<{ feedbackId: string }>();

  const [userid, setUserid] = useState("");

  useEffect(() => {
<<<<<<< HEAD
    const feedbackId = 1;
    const userId = 1;

    const apiUrl = `http://localhost:8000/api/feedbacks/${feedbackId}?userid=${userId}`;

    axios
      .get(apiUrl)
      .then((response: AxiosResponse<FeedbackResponse>) => {
        const data: FeedbackResponse = response.data;
        setFeedbackData(data);
      })
      .catch((error: ErrorResponse) => {
        setError(error.message);
      });
=======
    const storedUserid = localStorage.getItem("user_id");
    if (storedUserid) {
      setUserid(storedUserid);
    }
>>>>>>> dcedd4f919b98ac64a4f09782e6c88366d5d3feb
  }, []);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/api/feedbacks/${feedbackId}/?userid=${userid}`
      )
      .then((response: AxiosResponse<FeedbackResponse>) => {
        const data: FeedbackResponse = response.data;
        setFeedbackData(data);
        console.log("피드백 상세");
      })
      .catch((error: ErrorResponse) => {
        console.error("피드백을 찾을 수 없습니다.");
        setError(error.message);
      });
  }, [feedbackId]);

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
        <BackButton
          back
          page={`/feedbacks/${feedbackData.respondent_info.category}`}
        />
      </div>
      <div className="flex flex-col gap-8">
        <p className="font-pre text-[22px] font-bold">
          {feedbackData.respondent_info.respondent_name}{" "}
          {feedbackData.respondent_info.category} 피드백
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
                {feedbackData.tags_work?.map((tag) => (
                  <TagAnswer key={tag} text={tag} image={디자이너} />
                ))}
              </p>
            </div>
            <div className="h-auto w-full flex flex-col">
              <p className="font-pre text-[14px] font-bold">성격 및 태도</p>
              <p>
                {feedbackData.tags_attitude?.map((tag) => (
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
                        {answer.answer}
                      </p>
                    ) : (
                      <span className="flex max-w-fit bg-c-indigo rounded-lg py-1 px-6 mt-1 font-pre text-[12px] text-white">
                        {answer.answer}
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
