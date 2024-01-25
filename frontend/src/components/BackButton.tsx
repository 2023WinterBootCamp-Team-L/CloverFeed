import { useNavigate } from 'react-router-dom';
import nextarrow from '../assets/nextarrow.svg';
import backarrow from '../assets/backarrow.svg';

interface BackButtonProps {
  back?: boolean;
  page?: string;
  onClick?: () => void;
}

const BackButton = ({ page, back = true, onClick }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    }
    if (page) {
      navigate(page);
    }
  };

  return (
    <button
      className={`${
        back
          ? 'bg-white border-c-indigo border-[0.1rem]'
          : 'bg-c-indigo border-c-indigo border-[0.1rem]'
      } rounded-full h-9 w-9 min-w-7 min-h-7 flex items-center justify-center`}
      onClick={handleButtonClick}
    >
      <img
        src={back ? backarrow : nextarrow}
        className={`${back ? 'mr-1' : 'ml-1'} h-5 w-5`}
      />
    </button>
  );
};

export default BackButton;
