import { useNavigate } from "react-router-dom";

interface GreenButtonProps {
  text: string;
  nextpage: string;
}

const GreenButton = ({ text, nextpage }: GreenButtonProps) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(nextpage);
  };

  return (
    <button
      className="bg-green-400 text-white px-[70px] py-2 rounded-xl text-lg"
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

export default GreenButton;
