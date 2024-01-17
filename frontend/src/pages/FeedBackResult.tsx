import React, { useState, useEffect } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";
import BackButton from "../components/BackButton";

interface FeedbackDetail {
  status: string;
  feedback_id?: string;
  respondent_name?: string;
  tag?: string[];
  summary?: string;
  answers?: Answer[];
  error_code?: number;
  message?: string;
}

interface Answer {
  question: string;
  type: string;
  answer: string;
}

const FeedBackResult: React.FC = () => {
  const [feedbackDetail, setFeedbackDetail] = useState<FeedbackDetail | null>(
    null
  );
  const feedbackId = "피드백ID";
  const userId = "사용자ID";

  useEffect(() => {
    const virtualData: FeedbackDetail = {
      status: "success",
      feedback_id: "피드백ID",
      respondent_name: "#2356 디자이너",
      tag: ["개성이 뚜렷한", "경청하는", "센스있는"],
      summary:
        "홍길동님을 개성이 뚜렷하고 경청하는 팀 분위기 메이커라고 피드백을 보내셨네요!",
      answers: [
        {
          question: "협업을 한적 있다면 홍길동님과 어떠하셨나요?",
          type: "주관식",
          answer: "대충 답변 내용임...",
        },
        {
          question: "혹시 제가 더 성장해야 할 게 있다면 어떤 게 있을까요?",
          type: "주관식",
          answer: "대충 답변 내용임...",
        },
        {
          question: "저를 1점부터 4점으로 평가해주세요",
          type: "객관식",
          answer: "1점",
        },
      ],
    };

    // 가상의 데이터를 상태로 업데이트
    setFeedbackDetail(virtualData);
  }, [feedbackId, userId]);

  if (!feedbackDetail) {
    return <div>Loading...</div>;
  }

  if (feedbackDetail.status === "error") {
    return (
      <div>
        Error Code: {feedbackDetail.error_code} - {feedbackDetail.message}
      </div>
    );
  }

  return (
    <div className="flex flex-col overflow-hidden max-w-[24.56rem] mx-auto h-auto px-5 py-8 gap-4">
      <div className="flex justify-between">
        <BackButton back page="/Linkmain" />
      </div>
      <div className="text-xl">{feedbackDetail.respondent_name}</div>
      <div className="bg-[#e2e9ff80] h-auto w-full flex flex-col justify-center border-opacity-50 border-2 rounded-3xl leading-1.25 p-8 text-sm">
        <p className="text-lg">{feedbackDetail.summary}</p>
      </div>
      <ul>
        {feedbackDetail?.answers?.map((answer, index) => (
          <li
            key={index}
            className="h-auto w-full flex flex-col bg-white justify-start border-c-p border-opacity-50 border-2 rounded-xl p-2 text-sm"
          >
            <p className="text-md font-bold">{answer.question}</p>
            <p>{answer.type}</p>
            <p>{answer.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedBackResult;
