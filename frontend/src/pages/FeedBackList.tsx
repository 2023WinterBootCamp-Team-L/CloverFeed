import axios from "axios";
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

const FeedbackList: React.FC = () => {
  const { category } = useParams<{ category?: string }>();

  const [apiUrl, setApiUrl] = useState("");

  useEffect(() => {
    const storedUserid = localStorage.getItem("user_id");
    if (storedUserid) {
      setApiUrl(
        `http://localhost:8000/api/feedbacks/response/list/?user_id=${storedUserid}&category=${category}`
      );
    }
  }, [category]);

  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const getFeedbacks = async () => {
      try {
        const response = await axios.get(apiUrl);

        if (response.data.status === "success") {
          setFeedbacks(response.data.feedbacks);
          console.log(response.data.feedbacks);
          console.log("피드백 리스트");
        } else {
          console.error("에러 응답:", response.data.message);
          // 사용자에게 에러 메시지를 보여줄 수 있는 처리 추가
        }
      } catch (error) {
        console.error("네트워크 오류:", error);
        // 사용자에게 네트워크 오류 메시지를 보여줄 수 있는 처리 추가
      }
    };

    getFeedbacks();
  }, [apiUrl]);

  const filteredFeedbacks = feedbacks
    .filter((feedback) => feedback.respondent_info) // respondent_info가 있는 경우만 필터링
    .filter((feedback) => feedback.respondent_info.category === category);

  const navigate = useNavigate();

  return (
    <div
      className="bg-white flex flex-col mx-auto h-screen gap-10 px-5 py-8"
      style={{ width: "393px" }}
    >
      <div>
        <BackButton back page="/mainpage" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="font-pre text-[22px] font-bold">
          {category}의 피드백
        </div>
        {filteredFeedbacks.length === 0 ? (
          <p className="font-pre text-[14px] text-gray-400">
            받은 피드백 목록이 없습니다.
          </p>
        ) : (
          <ul>
            {filteredFeedbacks.map((feedback, index) => (
              <li
                key={feedback.feedback_id}
                className={`h-50 w-full flex flex-col justify-start p-4 rounded-lg border-2 ${
                  index % 2 === 0
                    ? "bg-c-l-blue border-c-blue"
                    : "bg-c-l-purple border-c-sl-purple"
                } mb-4`}
              >
                <div>
                  <button
                    className="font-pre text-[14px] font-bold mb-2"
                    onClick={() =>
                      navigate(
                        `/feedbackresult/${feedback.respondent_info.respondent_name}`
                      )
                    }
                  >
                    {feedback.respondent_info.respondent_name} {category}님의
                    피드백
                  </button>
                  <div className="flex">
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
    </div>
  );
};

export default FeedbackList;
