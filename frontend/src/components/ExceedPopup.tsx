// ExceedPopup.tsx

import React, { useEffect } from "react";
import checkcircle from "../assets/checkcircle.svg";

interface ExceedPopupProps {
  onClose: () => void;
}

const ExceedPopup: React.FC<ExceedPopupProps> = ({ onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="bg-[#1E2C49] text-white w-[287px] h-[50px]  flex rounded-[50px] text-[15px] justify-center items-center fixed bottom-0 left-0 right-0 mx-auto mb-4">
      <img
        src={checkcircle}
        alt="Check Circle Icon"
        className="w-5.5 h-5.5 px-15 px-1"
      />
      <span className="font-Preahvihear text-[14px] px-1">
        키워드는 5개 까지 선택할 수 있어요
      </span>
    </div>
  );
};

export default ExceedPopup;
