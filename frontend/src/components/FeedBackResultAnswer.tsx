import React from "react";

interface FeedBackResultAnswerProps {
  answertitle: string;
  text?: string;
}
const FeedBackResultAnswer: React.FC<FeedBackResultAnswerProps> = ({ answertitle, text }) => {
  return (
    <div className="h-auto w-full flex flex-col bg-white justify-start border-c-green border-opacity-50 border-2 rounded-3xl p-1 text-sm">
      <div className="flex flex-col items-start p-4">
        <p className="text-lg">{answertitle}</p>
        <div className="flex flex-col items-start gap-4">
          <p className="text-md">{text}</p>
        </div>
      </div>
    </div>

    

    
  );
};
export default FeedBackResultAnswer;