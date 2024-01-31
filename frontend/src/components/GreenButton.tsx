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
        className="bg-c-green text-white h-12 rounded-lg text-[16px] font-pre min-w-[300px] sm:w-[320px] lg:w-[332px] transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-500 duration-300"
        onClick={handleButtonClick}
      >
        {text}
      </button>
    </label>
  );
};

export default GreenButton;
