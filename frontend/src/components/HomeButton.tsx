import { useNavigate } from 'react-router-dom';

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
      className="bg-c-indigo text-white p-3 rounded-lg text-[16px] font-pre min-w-[300px] sm:w-[320px] lg:w-[332px]"
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

export default HomeButton;
