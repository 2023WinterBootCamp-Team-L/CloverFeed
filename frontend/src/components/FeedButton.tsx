import React from "react";
import FeedCount from "../components/FeedCount.tsx";
import { useNavigate } from "react-router-dom";

interface FeedButtonProps {
  category: string;
  color: boolean; // color가 true면 purple, false면 blue
}

const FeedButton: React.FC<FeedButtonProps> = ({ category, color }) => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`/feedbacks/${category}`);
  };

  const buttonClassName = `bg-white-400 text-black ${
    color ? "border-purple-200" : "border-blue-200"
  } border-2 w-full px-3 py-6 rounded-xl mb-2 text-xs font-medium text-left`;

  return (
    <div>
      <button className={buttonClassName} onClick={handleButtonClick}>
        {category}의 피드백
        <FeedCount category={category} />
      </button>
    </div>
  );
};

export default FeedButton;
