import { useState } from "react";
import ChoiceButton from "./ChoiceButton";

function ChoicePart() {
  const Options = [
    { option: "1점" },
    { option: "2점" },
    { option: "3점" },
    { option: "4점" },
  ];

  const Colors = [
    { color: "#E2E9FF" },
    { color: "#F6EED4" },
    { color: "#EDD0F5" },
    { color: "#F9C7C7" },
    { color: "#D5FBE5" },
  ];

  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };

  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      {Options.map((option, index) => (
        <ChoiceButton
          key={index}
          text={option.option}
          onClick={handleButtonClick}
          borderColor={Colors[index % Colors.length].color}
          hoverBgColor={
            isButtonClicked ? Colors[index % Colors.length].color : "white"
          }
        />
      ))}
    </div>
  );
}

export default ChoicePart;
