import React from "react";
import FeedCount from "../components/FeedCount.tsx";
import FeedbackList from "../pages/FeedBackList.tsx";

interface FeedButtonProps {
  category: string;
  color: boolean; // color가 true면 purple, false면 blue
}

// 카테고리에 따른 텍스트 반환 함수
const getCategoryText = (category: string): string => {
  switch (category) {
    case "developer":
      return "개발자";
    case "designer":
      return "디자이너";
    case "planner":
      return "기획자";
    case "pmpo":
      return "PM/PO";
    case "others":
      return "기타직무";
    default:
      return "";
  }
};

const FeedButton: React.FC<FeedButtonProps> = ({ category, color }) => {
  const handleButtonClick = () => {
    <FeedbackList />;
  };

  const buttonClassName = `bg-white-400 text-black ${
    color ? "border-purple-200" : "border-blue-200"
  } border-2 w-full px-3 py-6 rounded-xl mb-2 text-xs font-medium text-left`;

  return (
    <div>
      <button className={buttonClassName} onClick={handleButtonClick}>
        {getCategoryText(category)}의 피드백
        <FeedCount category={getCategoryText(category)} />
      </button>
    </div>
  );
};

export default FeedButton;
