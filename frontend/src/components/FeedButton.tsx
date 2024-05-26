import React from "react";
import { useRouter } from "next/router";

interface FeedButtonProps {
  category: string;
  count: number;
  color: boolean; // color가 true면 purple, false면 blue
}

const FeedButton: React.FC<FeedButtonProps> = ({ category, count, color }) => {
  const router = useRouter();
  const handleButtonClick = () => {
    if (category === "PM/PO") {
      router.push("/feedbacks/PMPO");
    } else {
      router.push(`/feedbacks/${category}`);
    }
  };

  const buttonClassName = `bg-white-400 text-black ${
    color
      ? "bg-c-l-blue border-c-blue transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-indigo-500 duration-300"
      : "bg-c-l-purple border-c-sl-purple transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:border-purple-500 duration-300"
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
