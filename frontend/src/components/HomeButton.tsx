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
      className="bg-c-indigo text-white h-12 rounded-lg text-[16px] font-pre min-w-[300px] sm:w-[320px] lg:w-[332px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300"
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

export default HomeButton;
