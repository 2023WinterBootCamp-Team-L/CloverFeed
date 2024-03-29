import axios from "axios";
import BackButton from "../components/BackButton";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TagAnswer from "../components/TagAnswer";
import { useNavigate } from "react-router-dom";
import { workData, attitudeData } from "../components/TagAnswerList";

interface Feedback {
  id: string;
  respondent_name: string;
  tag_work: string;
  tag_attitude: string;
  tags_work_parsed: string[];
  tags_attitude_parsed: string[];
}

const FeedbackList: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [apiUrl, setApiUrl] = useState("");

  useEffect(() => {
    const storedUserid = localStorage.getItem("user_id");
    if (storedUserid) {
      setApiUrl(
        `https://cloverfeed.kr/api/feedbacks/response/list/?user_id=${storedUserid}&category=${category.replace("PMPO", "PM/PO")}`
      );
    }
  }, [category]);

  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

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

  const getFeedbacks = async () => {
    try {
      const response = await axios.get(apiUrl);

      if (response.data.status === "success") {
        const parsedFeedbacks = response.data.feedbacks.map(
          (feedback: Feedback) => ({
            ...feedback,
            tags_work_parsed: parseTags(feedback.tag_work),
            tags_attitude_parsed: parseTags(feedback.tag_attitude),
          })
        );

        setFeedbacks(parsedFeedbacks);
        // console.log(response.data);
      }
    } catch (error) {
      console.error("네트워크 오류:", error);
    }
  };

  useEffect(() => {
    getFeedbacks();
  }, [apiUrl]);

  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="bg-white flex flex-col mx-auto min-h-screen gap-10 px-5 py-8 overflow-hidden w-full sm:w-[393px] lg:w-[393px]"
        // style={{ width: '393px' }}
      >
        <div>
          <BackButton back page="/mainpage" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-pre text-[22px] font-bold">
            {category}의 피드백
          </div>
          {feedbacks.length === 0 ? (
            <p className="font-pre text-[14px] text-gray-400">
              받은 피드백 목록이 없습니다.
            </p>
          ) : (
            <ul>
              {feedbacks.map((feedback, index) => (
                <li
                  key={feedback.id}
                  className={`h-50 w-full flex flex-col justify-start p-4 rounded-lg border-2 ${
                    index % 2 === 0
                      ? "bg-c-l-blue border-c-blue"
                      : "bg-c-l-purple border-c-sl-purple"
                  } mb-4`}
                >
                  <div>
                    <button
                      className="font-pre text-[14px] font-bold mb-2"
                      onClick={() => {
                        if (feedback.id) {
                          const cleanedName = feedback.respondent_name.replace(
                            "#",
                            ""
                          );
                          navigate(
                            `/feedbackresult/categorylist/${category}/${cleanedName}`
                          );
                        }
                      }}
                    >
                      {feedback.respondent_name} {category}님의 피드백{" "}
                    </button>
                    <div className="flex flex-wrap">
                      {feedback.tags_work_parsed.map((tag: string) => (
                        <TagAnswer
                          key={index}
                          text={tag}
                          tagnumber={workData.findIndex(
                            (data) => data.text === tag
                          )}
                          color={workData.findIndex(
                            (data) => data.text === tag
                          )}
                          image={
                            workData.find((data) => data.text === tag)?.image ||
                            ""
                          }
                        />
                      ))}
                      {feedback.tags_attitude_parsed.map((tag: string) => (
                        <TagAnswer
                          key={index}
                          text={tag}
                          tagnumber={
                            attitudeData.findIndex(
                              (data) => data.text === tag
                            ) + 1
                          }
                          color={
                            attitudeData.findIndex(
                              (data) => data.text === tag
                            ) + 1
                          }
                          image={
                            attitudeData.find((data) => data.text === tag)
                              ?.image || ""
                          }
                        />
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackList;
