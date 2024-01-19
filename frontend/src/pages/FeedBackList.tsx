import axios, { AxiosResponse } from "axios";
import BackButton from "../components/BackButton";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TagAnswer from "../components/TagAnswer";
import 디자이너 from "../assets/디자이너.svg";
import { useNavigate } from "react-router-dom";

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
  const userId = 1;
  const { category } = useParams<{ category?: string }>();

  const getCategoryText = (category?: string): string => {
    switch (category) {
      case "developer":
        return "개발자";
      case "designer":
        return "디자이너";
      case "planner":
        return "기획자";
      case "pmpo":
        return "PM/PO";
      case "others":
        return "기타직무";
      default:
        return "";
    }
  };

  const apiUrl = `/api/feedbacks/response/list`;
  const queryParams = `userid=${userId}&category=${category}`;

  // 더미 데이터
  // const dummyData: SuccessResponse = {
  //   status: "success",
  //   feedbacks: [
  //     {
  //       feedback_id: "2",
  //       respondent_info: {
  //         respondent_name: "#2356",
  //         category: "디자이너",
  //       },
  //       tags_work: ["효율적인", "박학다식", "리더십"],
  //       tags_attitude: ["책임감", "경청하는", "공감 능력"],
  //     },
  //     {
  //       feedback_id: "5",
  //       respondent_info: {
  //         respondent_name: "#1238",
  //         category: "디자이너",
  //       },
  //       tags_work: ["전략적인", "기획력", "문제 분석"],
  //       tags_attitude: ["성실함", "배려심", "적극적인"],
  //     },
  //     {
  //       feedback_id: "11",
  //       respondent_info: {
  //         respondent_name: "#6583",
  //         category: "디자이너",
  //       },
  //       tags_work: ["계획적인", "정보 수집", "결단력"],
  //       tags_attitude: ["꼼꼼함", "끈기", "분위기메이커"],
  //     },
  //   ],
  // };

  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}?${queryParams}`)
      .then((response: AxiosResponse<SuccessResponse | ErrorResponse>) => {
        const data: SuccessResponse | ErrorResponse = response.data;

        if (data.status === "success") {
          setFeedbacks((data as SuccessResponse).feedbacks);
        } else {
          console.error("에러 응답:", (data as ErrorResponse).message);
        }
      })
      .catch((error: ErrorResponse) => {
        console.error("기타 에러 응답:", error.message);
      });
  }, [apiUrl, queryParams]);

  //   const data: SuccessResponse | ErrorResponse = dummyData;

  //   if (data.status === "success") {
  //     setFeedbacks((data as SuccessResponse).feedbacks);
  //   } else {
  //     console.error("에러 응답:", (data as ErrorResponse).message);
  //   }
  // }, [apiUrl, queryParams]);

  const filteredFeedbacks = feedbacks.filter(
    (feedback) =>
      feedback.respondent_info.category === getCategoryText(category)
  );

  const navigate = useNavigate();

  return (
    <div className="flex flex-col overflow-hidden max-w-[24.56rem] mx-auto h-[53.25rem] px-5 py-8 gap-4">
      <div className="flex justify-between">
        <BackButton back page="/mainpage" />
      </div>
      <div className="text-xl mt-4">{getCategoryText(category)}의 피드백</div>
      {filteredFeedbacks.length === 0 ? (
        <div className="text-lg text-gray-500 mt-4">
          받은 피드백 목록이 없습니다.
        </div>
      ) : (
        <ul>
          {filteredFeedbacks.map((feedback, index) => (
            <li
              key={feedback.feedback_id}
              className={`h-50 w-full flex flex-col justify-start p-2 bg-white rounded-xl border-[3px] ${
                index % 2 === 0
                  ? "border-c-purple border-opacity-50"
                  : "border-c-blue"
              } mb-2`}
            >
              <div>
                <button
                  className="text-lg text-black"
                  onClick={() =>
                    navigate(`/feedbackresult/${feedback.feedback_id}`)
                  }
                >
                  {feedback.respondent_info.respondent_name}{" "}
                  {getCategoryText(category)}님의 피드백
                </button>
                <div className="flex gap-1">
                  {feedback.tags_work.slice(0, 3).map((tag) => (
                    <TagAnswer key={tag} text={tag} image={디자이너} />
                  ))}
                </div>
                <div className="flex gap-1">
                  {feedback.tags_attitude.slice(0, 3).map((tag) => (
                    <TagAnswer key={tag} text={tag} image={디자이너} />
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackList;
