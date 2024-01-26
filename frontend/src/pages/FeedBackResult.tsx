import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import BackButton from "../components/BackButton";
import TagAnswer, { TagAnswerProps } from "../components/TagAnswer";
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
  const workData: TagAnswerProps[] = [
    {
      text: "효율적인",
      image: "../src/assets/효율적인.png",
      tagnumber: 1,
    },
    {
      text: "박학다식",
      image: "../src/assets/박학다식.png",
      tagnumber: 2,
    },
    {
      text: "문제분석",
      image: "../src/assets/문제분석.png",
      tagnumber: 3,
    },
    {
      text: "계획적인",
      image: "../src/assets/계획적인.png",
      tagnumber: 4,
    },
    {
      text: "기획력",
      image: "../src/assets/기획력.png",
      tagnumber: 5,
    },
    {
      text: "창의적인",
      image: "../src/assets/창의적인.png",
      tagnumber: 6,
    },
    {
      text: "규칙준수",
      image: "../src/assets/규칙준수.png",
      tagnumber: 7,
    },
    {
      text: "위기대처 능력",
      image: "../src/assets/위기대처능력.png",
      tagnumber: 8,
    },
    {
      text: "리더쉽",
      image: "../src/assets/리더쉽.png",
      tagnumber: 9,
    },
    {
      text: "정보수집",
      image: "../src/assets/정보수집.png",
      tagnumber: 10,
    },
    {
      text: "의견 다양성",
      image: "../src/assets/의견다양성.png",
      tagnumber: 11,
    },
    {
      text: "추진력",
      image: "../src/assets/추진력.png",
      tagnumber: 12,
    },
    {
      text: "전략적인",
      image: "../src/assets/전략적인.png",
      tagnumber: 13,
    },
    {
      text: "결단력",
      image: "../src/assets/결단력.png",
      tagnumber: 14,
    },
    {
      text: "협력적인",
      image: "../src/assets/협력적인.png",
      tagnumber: 15,
    },
  ];

  const attitudeData: TagAnswerProps[] = [
    {
      text: "책임감",
      image: "../src/assets/책임감.png",
      tagnumber: 1,
    },
    {
      text: "공감능력",
      image: "../src/assets/공감능력.png",
      tagnumber: 2,
    },
    {
      text: "배려심",
      image: "../src/assets/배려심.png",
      tagnumber: 3,
    },
    {
      text: "성실함",
      image: "../src/assets/성실함.png",
      tagnumber: 4,
    },
    {
      text: "적극적인",
      image: "../src/assets/적극적인.png",
      tagnumber: 5,
    },
    {
      text: "꼼꼼함",
      image: "../src/assets/꼼꼼함.png",
      tagnumber: 6,
    },
    {
      text: "분위기 메이커",
      image: "../src/assets/분위기메이커.png",
      tagnumber: 7,
    },
    {
      text: "주도적인",
      image: "../src/assets/주도적인.png",
      tagnumber: 8,
    },
    {
      text: "센스있는",
      image: "../src/assets/센스있는.png",
      tagnumber: 9,
    },
    {
      text: "긍정적인",
      image: "../src/assets/긍정적인.png",
      tagnumber: 10,
    },
    {
      text: "사교성이 좋은",
      image: "../src/assets/사교성이좋은.png",
      tagnumber: 11,
    },
    {
      text: "관대한",
      image: "../src/assets/관대한.png",
      tagnumber: 12,
    },
    {
      text: "경청하는",
      image: "../src/assets/경청하는.png",
      tagnumber: 13,
    },
    {
      text: "도전적인",
      image: "../src/assets/도전적인.png",
      tagnumber: 14,
    },
    {
      text: "끈기",
      image: "../src/assets/끈기.png",
      tagnumber: 15,
    },
  ];

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
        `http://localhost:8000/api/feedbacks/?respondent_name=%23${respondentName}`
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
    <div
      className="bg-white flex flex-col mx-auto h-screen gap-10 px-5 py-8"
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
                    tagnumber={workData.findIndex((data) => data.text === tag)}
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
                {feedbackData.tag_attitude_parsed.map((tag: string, index) => (
                  <TagAnswer
                    key={index}
                    text={tag}
                    tagnumber={
                      attitudeData.findIndex((data) => data.text === tag) + 1
                    }
                    color={
                      attitudeData.findIndex((data) => data.text === tag) + 1
                    }
                    image={
                      attitudeData.find((data) => data.text === tag)?.image ||
                      ""
                    }
                  />
                ))}
              </p>
            </div>

            <ul>
              {feedbackData.answers?.map((answer, index) => (
                <li
                  key={index}
                  className={`h-auto w-full flex flex-col justify-start ${
                    index % 2 === 0 ? "bg-c-l-purple" : "bg-c-l-blue"
                  } rounded-lg p-4 mb-4`}
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
