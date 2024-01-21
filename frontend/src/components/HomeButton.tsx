import { useNavigate } from "react-router-dom";

interface HomeButtonProps {
  text: string;
  nextpage: string;
}

const HomeButton = ({ text, nextpage }: HomeButtonProps) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(nextpage);
  };

  return (
    <button
      className="bg-c-indigo text-white p-3 rounded-lg w-[332px] text-[14px] font-pre"
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

export default HomeButton;
