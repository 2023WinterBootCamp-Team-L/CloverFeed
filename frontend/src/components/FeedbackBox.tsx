import React from "react";
import { TagProps } from "../components/Tag";

interface FeedbackBoxProps {
  title: string;
  tags: React.ReactElement<TagProps>[];
  text?: string;
  index: number; // index 추가
}

const FeedbackBox: React.FC<FeedbackBoxProps> = ({
  title,
  tags,
  text,
  index,
}) => {
  const hasText = !!text;
  const isOddIndex = index % 2 === 0; // index가 홀수인지 짝수인지 확인

  return (
    <div
      className={`h-${
        hasText ? "50" : "32"
      } w-full flex flex-col bg-white justify-start ${
        isOddIndex ? "border-blue-200" : "border-c-purple border-opacity-50"
      } border-opacity-50 border-[3px] rounded-xl leading-1.25 text-sm`}
    >
      <div className="flex flex-col items-start p-4">
        <p className="text-xl">{title}</p>
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-row gap-4">{tags}</div>
          {hasText && <p className="text-md">{text}</p>}
        </div>
      </div>
    </div>
  );
};

export default FeedbackBox;
