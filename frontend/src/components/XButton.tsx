import { useNavigate } from 'react-router-dom';
import XMark from '../assets/XMark.svg';

interface XButtonProps {
  nextpage: string;
}

const XButton = ({ nextpage }: XButtonProps) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(nextpage);
  };

  return (
    <button onClick={handleButtonClick}>
      <img
        src={XMark}
        className="transition ease-in-out delay-100 hover:scale-125 duration-300"
      />
    </button>
  );
};

export default XButton;
