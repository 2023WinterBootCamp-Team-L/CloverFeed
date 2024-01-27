import axios from "axios";
import BackButton from "../components/BackButton";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TagAnswer from "../components/TagAnswer";
import { useNavigate } from "react-router-dom";
import { TagAnswerProps } from "../components/TagAnswer";

interface Feedback {
  id: string;
  respondent_name: string;
  tag_work: string;
  tag_attitude: string;
  tags_work_parsed: string[];
  tags_attitude_parsed: string[];
}

const FeedbackList: React.FC = () => {
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

  const { category } = useParams<{ category?: string }>();
  const [apiUrl, setApiUrl] = useState("");

  useEffect(() => {
    const storedUserid = localStorage.getItem("user_id");
    if (storedUserid) {
      setApiUrl(
        `http://localhost:8000/api/feedbacks/response/list/?user_id=${storedUserid}&category=${category.replace("PMPO", "PM/PO")}`
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
                      {feedback.tags_work_parsed
                        .slice(0, 3)
                        .map((tag: string) => (
                          <TagAnswer key={tag} text={tag} image={디자이너} />
                        ))}
                      {feedback.tags_attitude_parsed
                        .slice(0, 3)
                        .map((tag: string) => (
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
    </div>
  );
};

export default FeedbackList;
