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
      className="bg-[#1E2C49] text-white px-[70px] py-2 justify-center items-center rounded-xl text-lg"
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

export default HomeButton;
