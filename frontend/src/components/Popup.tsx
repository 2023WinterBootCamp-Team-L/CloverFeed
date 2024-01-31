import React, { useEffect } from "react";
import checkcircle from "../assets/checkcircle.svg";

interface PopupProps {
  text: string;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ text, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="bg-[#1E2C49] text-white w-[332px] h-[50px] flex rounded-3xl justify-center items-center fixed bottom-0 left-0 right-0 mx-auto my-4">
      <div className="flex flex-row justify-center items-center gap-2">
        <img
          src={checkcircle}
          alt="Check Circle Icon"
          className="w-5.5 h-5.5"
        />
        <span className="font-pre text-[14px]">{text}</span>
      </div>
    </div>
  );
};

export default Popup;
