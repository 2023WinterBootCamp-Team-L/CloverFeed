import { useNavigate } from 'react-router-dom';

interface PurplefeedButtonProps {
  text: string;
  purplefeedpage: string;
}

const PurplefeedButton = ({ text, purplefeedpage }: PurplefeedButtonProps) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(purplefeedpage);
  };

  return (
    <button
      className="bg-white-400 text-black border-purple-200 border-2 w-full px-3 py-6  rounded-xl mb-2 text-xs font-medium text-left"
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

export default PurplefeedButton;
