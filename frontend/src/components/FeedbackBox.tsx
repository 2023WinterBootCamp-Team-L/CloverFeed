import React from "react";
import {TagProps} from "../components/Tag";
interface FeedbackBoxProps {
  title: string;
  tags: React.ReactElement<TagProps>[]; // 여러 개의 Tag를 배열로 받도록 수정
  text?: string;
}
const FeedbackBox: React.FC<FeedbackBoxProps> = ({ title, tags, text }) => {
  return (
    <div className="h-40 w-full flex flex-col bg-white justify-start border-c-green border-opacity-50 border-2 rounded-lg leading-1.25 p-2 text-sm">
      <div className="flex flex-col items-start p-4">
        <p className="text-xl">{title}</p>
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-row gap-4">{tags}</div>
          <p className="text-md">{text}</p>
        </div>
      </div>
    </div>

    

    
  );
};
export default FeedbackBox;