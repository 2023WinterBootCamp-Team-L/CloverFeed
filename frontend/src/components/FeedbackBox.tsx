import React from "react";
import { TagProps } from "../components/Tag";
import { useNavigate } from "react-router-dom";

interface FeedbackBoxProps {
  respondent_name: string;
  category: string;
  tag_work: React.ReactElement<TagProps>[];
  tag_attitude: React.ReactElement<TagProps>[];
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
      <div className="flex flex-col items-start p-2 m-4">
        <button
          className="font-pre text-[14px] font-bold mb-2"
          onClick={() => {
            const cleanedName = respondent_name.replace("#", "");
            navigate(`/feedbackresult/search/${category}/${cleanedName}`);
          }}
        >
          {`${respondent_name} ${category}님의 피드백`}
        </button>
        <div className="flex flex-col items-start gap-2">
          <div className="flex flex-row gap-4">{tag_work}</div>
          <div className="flex flex-row gap-4">{tag_attitude}</div>
          {hasText && <p className="font-pre text-[14px]">{text}</p>}
        </div>
      </div>
    </div>
  );
};

export default FeedbackBox;
