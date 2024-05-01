import React from "react";
import { useRouter } from "next/navigation";
import TagAnswer from "../components/TagAnswer";
import { workData, attitudeData } from "../components/TagAnswerList";

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
  const router = useRouter();

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
            router.push(
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
