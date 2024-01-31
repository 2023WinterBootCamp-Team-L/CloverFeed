import { useState, useEffect } from "react";

interface ChoiceButtonProps {
  icon?: React.ReactElement;
  text: string;
  onClick: () => void;
  borderColor: string;
  clickedColor: string;
  reset: boolean; // reset prop 추가
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({
  icon,
  text,
  onClick,
  borderColor,
  clickedColor,
  reset, // reset prop 추가
}) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // reset이 변경될 때마다 초기화
    setIsClicked(false);
  }, [reset]);

  const handleButtonClick = () => {
    onClick();
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <button
        className={`flex px-10 py-4 w-[200px] h-[57px] items-center font-pre text-[16px] font-bold rounded-lg border-2 mb-10 transition-colors duration-300 ease-out
          ${isClicked ? clickedColor : "bg-white"}`}
        style={{
          borderColor: borderColor,
          backgroundColor: isClicked ? clickedColor : "white",
        }}
        onClick={handleButtonClick}
      >
        {icon && <div className="ml-4">{icon}</div>}
        <div className="text-center flex-1">{text}</div>
      </button>
    </div>
  );
};

export default ChoiceButton;
