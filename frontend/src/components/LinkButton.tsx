// LinkButton.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

interface LinkButtonProps {
  icon: React.ReactElement;
  backgroundColor: string;
  buttonText: string;
  nextpage: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({
  icon,
  backgroundColor,
  buttonText,
  nextpage,
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(nextpage);
  };

  return (
    <button
      className={`flex items-center justify-between text-xl text-center text-black font-Preahvihear rounded-[20px] px-7 py-[-24px] w-[187px] h-[78px] mb-38`}
      style={{ backgroundColor }}
      onClick={handleButtonClick}
    >
      {icon}
      <span>{buttonText}</span>
    </button>
  );
};

export default LinkButton;
