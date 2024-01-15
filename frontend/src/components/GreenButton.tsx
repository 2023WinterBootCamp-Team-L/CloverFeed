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
    <label className="realtive inline-flex">
      <button
        className="bg-c-green text-white px-2 py-2 rounded-xl mt-4 text-lg w-[332px]"
        onClick={handleButtonClick}
      >
        {text}
      </button>
    </label>
  );
};

export default GreenButton;
