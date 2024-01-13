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
      className="bg-green-400 text-white px-2 py-2 rounded-xl mt-4 text-lg"
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

export default GreenButton;
