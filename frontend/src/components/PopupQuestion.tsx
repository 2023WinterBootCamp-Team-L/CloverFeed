import React, { useEffect } from "react";
import checkcircle from "../assets/checkcircle.svg";

interface PopupQuestionProps {
  onClose: () => void;
}

const PopupQuestion: React.FC<PopupQuestionProps> = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="bg-[#1E2C49] text-white w-[332px] h-[50px] flex rounded-[50px] text-[15px]  justify-center items-center fixed bottom-0 left-0 right-0 mx-auto mb-4">
      <img
        src={checkcircle}
        alt="Check Circle Icon"
        className="w-5.5 h-5.5 px-15 px-1"
      />
      <div className="flex flex-col justify-center">
        <span className="font-Preahvihear text-center text-[14px] px-1">
          답변 옵션 혹은 질문을 정확히 입력해주세요
        </span>
      </div>
    </div>
  );
};

export default PopupQuestion;
