import React from "react";
import { useNavigate } from "react-router-dom";
import Home from "../assets/Home.svg";

interface HomeButtonProps {
  icon: React.ReactNode; // 아이콘을 받을 수 있도록 수정
  nextpage: string;
}

const HomeButton: React.FC<HomeButtonProps> = ({ icon, nextpage }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(nextpage);
  };

  return (
    <button
      className="bg-green-400 text-white px-[35px] py-[30px] rounded-[5px] text-lg flex items-center"
      onClick={handleButtonClick}
    >
      {icon}
    </button>
  );
};

export default HomeButton;
