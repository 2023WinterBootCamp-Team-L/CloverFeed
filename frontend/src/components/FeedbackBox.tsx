import React from "react";
import { useNavigate } from "react-router-dom";
import TagAnswer, { TagAnswerProps } from "../components/TagAnswer";

interface FeedbackBoxProps {
  respondent_name: string;
  category: string;
  tag_work: string[];
  tag_attitude: string[];
  text?: string;
  index: number; // index 추가
}

const FeedbackBox: React.FC<FeedbackBoxProps> = ({
  respondent_name,
  category,
  tag_work,
  tag_attitude,
  text,
  index,
}) => {
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

  const navigate = useNavigate();

  const hasText = !!text;
  const isOddIndex = index % 2 === 0; // index가 홀수인지 짝수인지 확인

  return (
    <div
      className={`h-${
        hasText ? "50" : "32"
      } w-full flex flex-col justify-start ${
        isOddIndex
          ? "border-c-blue bg-c-l-blue"
          : "border-c-sl-purple bg-c-l-purple"
      } border-2 rounded-lg`}
    >
      <div className="flex flex-col items-start p-2 m-2">
        <button
          className="font-pre text-[14px] font-bold mb-2"
          onClick={() => {
            const cleanedName = respondent_name.replace("#", "");
            const modifiedCategory = category === "PM/PO" ? "PMPO" : category;
            navigate(
              `/feedbackresult/search/${modifiedCategory}/${cleanedName}`
            );
          }}
        >
          {`${respondent_name} ${category}님의 피드백`}
        </button>
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-wrap">
            {tag_work.map((tag: string) => (
              <TagAnswer
                key={index}
                text={tag}
                tagnumber={workData.findIndex((data) => data.text === tag)}
                color={workData.findIndex((data) => data.text === tag)}
                image={workData.find((data) => data.text === tag)?.image || ""}
              />
            ))}
            {tag_attitude.map((tag: string) => (
              <TagAnswer
                key={index}
                text={tag}
                tagnumber={
                  attitudeData.findIndex((data) => data.text === tag) + 1
                }
                color={attitudeData.findIndex((data) => data.text === tag) + 1}
                image={
                  attitudeData.find((data) => data.text === tag)?.image || ""
                }
              />
            ))}
          </div>
          {hasText && <p className="font-pre text-[14px]">{text}</p>}
        </div>
      </div>
    </div>
  );
};

export default FeedbackBox;
