import axios, { AxiosResponse } from "axios";
import BackButton from "../components/BackButton";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Tag from "../components/Tag";
import 디자이너 from "../assets/디자이너.svg";

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

  const apiUrl = `http://localhost:포트번호/feedbacks/response/list`;
  const queryParams = `userid=${userId}&category=${category}`;

  // // 더미 데이터
  // const dummyData: SuccessResponse = {
  //   status: "success",
  //   feedbacks: [
  //     {
  //       feedback_id: "2",
  //       respondent_info: {
  //         respondent_name: "#3566",
  //         category: "디자이너",
  //       },
  //       tags_work: ["개성이 뚜렷한", "경청하는", "위기대처 능력"],
  //       tags_attitude: ["개성이 뚜렷한", "경청하는", "위기대처 능력"],
  //     },
  //     {
  //       feedback_id: "5",
  //       respondent_info: {
  //         respondent_name: "#1238",
  //         category: "디자이너",
  //       },
  //       tags_work: ["개성이 뚜렷한", "경청하는", "위기대처 능력"],
  //       tags_attitude: ["개성이 뚜렷한", "경청하는", "위기대처 능력"],
  //     },
  //     {
  //       feedback_id: "11",
  //       respondent_info: {
  //         respondent_name: "#6583",
  //         category: "디자이너",
  //       },
  //       tags_work: ["개성이 뚜렷한", "경청하는", "위기대처 능력"],
  //       tags_attitude: ["개성이 뚜렷한", "경청하는", "위기대처 능력"],
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
        console.error("에러 응답:", error.message);
      });
    // const data: SuccessResponse | ErrorResponse = dummyData;

    // if (data.status === "success") {
    //   setFeedbacks((data as SuccessResponse).feedbacks);
    // } else {
    //   console.error("에러 응답:", (data as ErrorResponse).message);
    // }
  }, [apiUrl, queryParams]);

  return (
    <div className="flex flex-col overflow-hidden max-w-[24.56rem] mx-auto h-[53.25rem] px-5 py-8 gap-4">
      <div className="flex justify-between">
        <BackButton back page="/mainpage" />
      </div>
      <div className="text-xl mt-4">{getCategoryText(category)}의 피드백</div>
      {feedbacks.length === 0 ? (
        <div className="text-lg text-gray-500 mt-4">
          받은 피드백 목록이 없습니다.
        </div>
      ) : (
        <ul>
          {feedbacks.map((feedback, index) => (
            <li
              key={feedback.feedback_id}
              className={`h-50 w-full flex flex-col justify-start p-2 bg-white rounded-xl border-[3px] ${
                index % 2 === 0
                  ? "border-c-purple border-opacity-50"
                  : "border-c-blue"
              } mb-2`}
            >
              <div>
                <p className="text-lg text-black">
                  {feedback.respondent_info.respondent_name}{" "}
                  {getCategoryText(category)}님의 피드백
                </p>
                <div className="flex gap-1">
                  {feedback.tags_work.slice(0, 2).map((tag) => (
                    <Tag
                      key={tag}
                      text={tag}
                      color="bg-c-emerald"
                      image={디자이너}
                    />
                  ))}
                </div>
                <div className="flex gap-1">
                  {feedback.tags_attitude.slice(0, 2).map((tag) => (
                    <Tag
                      key={tag}
                      text={tag}
                      color="bg-c-emerald"
                      image={디자이너}
                    />
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
