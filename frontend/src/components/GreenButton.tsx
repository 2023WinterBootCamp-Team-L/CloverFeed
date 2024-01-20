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
    <label className="relative inline-flex">
      <button
        className="bg-c-green text-white p-3 rounded-lg w-[332px] text-[14px] font-pre"
        onClick={handleButtonClick}
      >
        {text}
      </button>
    </label>
  );
};

export default GreenButton;
