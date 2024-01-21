interface ChoiceButtonProps {
  text: string;
  onClick: () => void;
  borderColor: string;
  hoverBgColor: string;
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({
  text,
  onClick,
  borderColor,
  hoverBgColor,
}) => {
  const handleButtonClick = () => {
    onClick();
  };

  return (
    <div>
      <button
        className={`flex px-20 py-4 font-pre text-[14px] font-bold rounded-lg border-2 mb-10 bg-white
        border-${borderColor} hover:bg-${hoverBgColor}`}
        onClick={handleButtonClick}
      >
        {text}
      </button>
    </div>
  );
};

export default ChoiceButton;
