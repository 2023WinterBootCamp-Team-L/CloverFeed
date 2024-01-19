import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import BackButton from "../components/BackButton";
import getCategoryText from "../components/getCategotyText";
import TagAnswer from "../components/TagAnswer";
import 디자이너 from "../assets/디자이너.svg";

interface RespondentInfo {
  respondent_name: string;
  category: string;
}
interface FeedbackResponse {
  status: string;
  feedback_id?: string;
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

  useEffect(() => {
    const feedbackId = 1;
    const userId = 1;

    axios
      .get(`/api/feedbacks/${feedbackId}?userid=${userId}`)
      .then((response: AxiosResponse<FeedbackResponse>) => {
        const data: FeedbackResponse = response.data;
        setFeedbackData(data);
      })
      .catch((error: ErrorResponse) => {
        setError(error.message);
      });
  }, []);

  //   const dummyData: FeedbackResponse = {
  //     status: "success",
  //     feedback_id: "2",
  //     respondent_info: {
  //       respondent_name: "#2356",
  //       category: "디자이너",
  //     },

  //     tags_work: ["효율적인", "박학다식", "리더십"],
  //     tags_attitude: ["책임감", "경청하는", "공감 능력"],
  //     summary:
  //       "홍길동님을 책임감과 리더십이 있고 팀원에게 잘 공감해주는 분이라고 피드백을 보내셨네요!",
  //     answers: [
  //       {
  //         question: "협업을 한적 있다면 홍길동님과 어떠하셨나요?",
  //         type: "주관식",
  //         answer:
  //           "매사에 책임을 가지며 맡은 업무를 끝까지 해내는 모습이 인상깊었어요. 업무에 관해 알고 있는 지식들도 많고 팀원들의 의견도 하나하나 잘 들어주었습니다.",
  //       },
  //       {
  //         question: "혹시 제가 더 성장해야 할 게 있다면 어떤 게 있을까요?",
  //         type: "주관식",
  //         answer:
  //           "리더십 있는 모습과 팀원을 배려하는 모습만으로도 충분히 좋은 팀원있지만, 아이디어 회의 때 다양한 아이디어를 제시해주는 모습까지 있다면 더 좋을 것 같습니다.",
  //       },
  //       {
  //         question: "저를 1점부터 4점으로 평가해주세요",
  //         type: "객관식",
  //         answer: "4점",
  //       },
  //     ],
  //   };

  //   setFeedbackData(dummyData);
  // }, []);

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
