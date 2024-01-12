import React, { useState } from "react";
import trashcan from "../assets/trashcan.svg";

interface AnswerOptionProps {
  onChange: (value: string) => void;
}

const AnswerOption: React.FC<AnswerOptionProps> = ({ onChange }) => {
  const [input, setInput] = useState("");
  const [isTrashcanVisible, setTrashcanVisible] = useState(true);

  const handleChange = (value: string) => {
    setInput(value);
    onChange(value);
  }; // 입력값

  const handleFocus = () => {
    setTrashcanVisible(false);
  };

  const handleBlur = () => {
    setTrashcanVisible(true);
  };

  return (
    <div className="relative">
      <input
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="bg-blue-200 text-black w-full h-10 rounded-lg focus:outline-none leading-1.25 p-2 text-sm"
      />
      {isTrashcanVisible && (
        <img
          src={trashcan}
          alt="휴지통"
          className="absolute right-0 top-0 h-full w-9 pr-5"
        />
      )}
    </div>
  );
};

export default AnswerOption;
