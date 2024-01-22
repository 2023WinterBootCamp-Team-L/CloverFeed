import React from "react";
import {TagProps} from "../components/Tag";
interface FeedBackResultTagProps {
  title: string;
  title2?: string;
  tags: React.ReactElement<TagProps>[]; // 여러 개의 Tag를 배열로 받도록 수정
}
const FeedBackResultTag: React.FC<FeedBackResultTagProps> = ({ title, tags }) => {
  return (
    <div className="h-auto w-full flex flex-col bg-white justify-start border-opacity-0 leading-1.25 p-2 text-sm">
      <div className="flex flex-col justify-center items-start p-1">
        <p className="text-xl">{title}</p>
        <div className="flex flex-col items-start gap-2">
          <div className="flex flex-row gap-2">{tags}</div>        
        </div>
        <br/>
        <p className="text-xl">{title}</p>
        <div className="flex flex-col items-start gap-2">
          <div className="flex flex-row gap-2">{tags}</div>        
        </div>
      </div>
      
    </div>

    

    
  );
};
export default FeedBackResultTag;