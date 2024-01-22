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
      className="flex flex-row items-center justify-center w-40 p-4 rounded-lg font-pre text-[14px] font-bold"
      style={{ backgroundColor }}
      onClick={handleButtonClick}
    >
      {icon}
      <span className="ml-5">{buttonText}</span>
    </button>
  );
};

export default LinkButton;
