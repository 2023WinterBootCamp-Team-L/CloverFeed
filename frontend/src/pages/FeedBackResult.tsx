import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import BackButton from "../components/BackButton";
import TagAnswer from "../components/TagAnswer";
import { useParams } from "react-router-dom";
import { workData, attitudeData } from "../components/TagAnswerList";

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
  const { origin } = useParams<{ origin: string }>();
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
        `https://cloverfeed.kr/api/feedbacks/?respondent_name=%23${respondentName}`
      )
      .then((response: AxiosResponse<FeedbackResponse>) => {
        const data: FeedbackResponse = response.data;

        if (data.tag_work) {
          data.tag_work_parsed = parseTags(data.tag_work);
        }
        if (data.tag_attitude) {
          data.tag_attitude_parsed = parseTags(data.tag_attitude);
        }

        setFeedbackData(data);
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

  const shadowStyle: React.CSSProperties = {
    boxShadow: "4px 4px 3px rgba(200,200,200,0.3)",
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="bg-white flex flex-col mx-auto min-h-screen gap-10 px-5 py-8 overflow-hidden w-full sm:w-[393px] lg:w-[393px]"
        style={{ width: "393px" }}
      >
        <div>
          {origin === "categorylist" ? (
            <BackButton back page={`/feedbacks/${feedbackData.category}`} />
          ) : origin === "search" ? (
            <BackButton back page={`/search/`} />
          ) : null}
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
                  {feedbackData.tag_work_parsed.map((tag: string, index) => (
                    <TagAnswer
                      key={index}
                      text={tag}
                      tagnumber={workData.findIndex(
                        (data) => data.text === tag
                      )}
                      color={workData.findIndex((data) => data.text === tag)}
                      image={
                        workData.find((data) => data.text === tag)?.image || ""
                      }
                    />
                  ))}
                </p>
              </div>
              <div className="h-auto w-full flex flex-col">
                <p className="font-pre text-[14px] font-bold">성격 및 태도</p>
                <p>
                  {feedbackData.tag_attitude_parsed.map(
                    (tag: string, index) => (
                      <TagAnswer
                        key={index}
                        text={tag}
                        tagnumber={
                          attitudeData.findIndex((data) => data.text === tag) +
                          1
                        }
                        color={
                          attitudeData.findIndex((data) => data.text === tag) +
                          1
                        }
                        image={
                          attitudeData.find((data) => data.text === tag)
                            ?.image || ""
                        }
                      />
                    )
                  )}
                </p>
              </div>

              <ul>
                {feedbackData.answers?.map((answer, index) => (
                  <li
                    key={index}
                    className={`h-auto w-full flex flex-col justify-start ${
                      index % 2 === 0 ? "bg-c-l-purple" : "bg-c-l-blue"
                    } rounded-lg p-4 mb-4 shadow-md`}
                    style={shadowStyle}
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
                        <div className="flex flex-wrap gap-2">
                          {answer.context
                            .split(",")
                            .map((value, valueIndex) => (
                              <span
                                key={valueIndex}
                                className="flex max-w-fit bg-c-indigo rounded-lg py-1 px-6 mt-1 font-pre text-[12px] text-white"
                              >
                                {value.trim()}
                              </span>
                            ))}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedBackResult;
