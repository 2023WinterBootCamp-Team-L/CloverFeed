interface ChoiceButtonProps {
  text: string;
  onclick: () => void;
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({ text, onClick }) => {
  const handleButtonClick = () => {
    onClick();
  };
  return (
    <div>
      <button className="" onClick={handleButtonClick}>
        {text}
      </button>
    </div>
  );
};

export default ChoiceButton;
