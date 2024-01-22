import { useState } from "react";
interface ChoiceButtonProps {
  text: string;
  onClick: () => void;
  borderColor: string;
  hoverBgColor: string;
  clickedColor: string;
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({
  text,
  onClick,
  borderColor,
  hoverBgColor,
  clickedColor,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const handleButtonClick = () => {
    onClick();
    setIsClicked(!isClicked);
  };
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div>
      <button
        className={`flex px-20 py-4 font-pre text-[14px] font-bold rounded-lg border-2 mb-10 transition-colors duration-300 ease-out
        ${isClicked ? clickedColor : "bg-white"}`}
        style={{
          borderColor: borderColor,
          backgroundColor: isClicked
            ? clickedColor
            : isHovered
              ? hoverBgColor
              : "white",
        }}
        onClick={handleButtonClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {text}
      </button>
    </div>
  );
};

export default ChoiceButton;
