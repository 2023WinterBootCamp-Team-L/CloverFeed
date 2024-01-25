import React from "react";
import { useNavigate } from "react-router-dom";

interface FeedButtonProps {
  category: string;
  count: number;
  color: boolean; // color가 true면 purple, false면 blue
}

const FeedButton: React.FC<FeedButtonProps> = ({ category, count, color }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`/feedbacks/${category}`);
  };

  const buttonClassName = `bg-white-400 text-black ${
    color ? "bg-c-l-blue border-c-blue" : "bg-c-l-purple border-c-sl-purple"
  }  w-[332px] pl-8 pr-10 py-5 rounded-lg mb-2 border-2 font-pre text-[14px] font-bold text-left`;

  return (
    <div>
      <button className={buttonClassName} onClick={handleButtonClick}>
        <div className="flex flex-row justify-between">
          <p>{category}의 피드백</p>
          <p>{count}</p>
        </div>
      </button>
    </div>
  );
};

export default FeedButton;
