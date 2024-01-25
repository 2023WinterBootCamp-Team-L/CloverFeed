import { useNavigate } from 'react-router-dom';

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
    <label className="relative inline-flex justify-center">
      <button
        className="bg-c-green text-white p-3 rounded-lg text-[16px] font-pre min-w-[300px] sm:w-[320px] lg:w-[332px]"
        onClick={handleButtonClick}
      >
        {text}
      </button>
    </label>
  );
};

export default GreenButton;
