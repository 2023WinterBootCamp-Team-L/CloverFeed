import { useNavigate } from 'react-router-dom';

interface BluefeedButtonProps {
  text: string;
  bluefeedpage: string;
}

const BluefeedButton = ({ text, bluefeedpage }: BluefeedButtonProps) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(bluefeedpage);
  };

  return (
    <button
      className="bg-white-400 text-black border-indigo-100 border-2 w-full px-3 py-6 rounded-xl mb-2 text-xs font-medium text-left"
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

export default BluefeedButton;
