import { useState } from "react";
import classNames from "classnames";

// TagProps를 정의합니다.
export interface TagProps {
  text: string;
  color: string;
  image: string;
  onClick?: () => void;
  currentIndex: number;
  // setCurrentColorIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const tagColors = [
  { bg: "bg-[#E2E9FF]" },
  { bg: "bg-[#F6EED4]" },
  { bg: "bg-[#EDD0F5]" },
  { bg: "bg-[#F9C7C7]" },
  { bg: "bg-[#D5FBE5]" },
];

const Tag: React.FC<TagProps> = ({
  text,
  color,
  image,
  onClick,
  currentIndex,
}) => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    }

    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % tagColors.length);
  };

  const selectedColorIndex =
    currentIndex !== -1 ? currentIndex : currentColorIndex;
  const selectedColor = tagColors[selectedColorIndex];

  // Tag 컴포넌트를 정의합니다.
  // const Tag: React.FC<TagProps> = ({
  //   text,
  //   color,
  //   image,
  //   onClick,
  //   currentIndex,
  // }) => {
  //   const [isSelected, setIsSelected] = useState(currentIndex !== -1);
  //   const [currentColorIndex, setCurrentColorIndex] = useState(0);

  //   const handleButtonClick = () => {
  //     if (onClick) {
  //       onClick();
  //     }

  //     setIsSelected(!isSelected);
  //     // 클릭할 때마다 다음 색상으로 변경
  //     setCurrentColorIndex((prevIndex) => (prevIndex + 1) % tagColors.length);

  //     console.log("isSelected:", !isSelected);
  //     console.log(
  //       "currentColorIndex:",
  //       (currentColorIndex + 1) % tagColors.length
  //     );
  //   };

  //   const selectedColorIndex =
  //     currentIndex !== -1 ? currentIndex : currentColorIndex;
  //   const selectedColor = tagColors[selectedColorIndex];

  const tagClasses = classNames(
    color, //기본 배경색
    "py-2 px-5",
    "rounded-3xl",
    "text-xs",
    "flex",
    "items-center",
    "justify-center",
    // selectedColor?.border,
    currentIndex !== -1 && selectedColor?.bg // 선택된 경우 배경색 추가
  );

  const iconClasses = classNames("mr-2", "max-h-4", "object-contain");

  return (
    <label className="inline-flex relative m-4">
      <button className={tagClasses} onClick={handleButtonClick}>
        <img src={image} alt="Tag Icon" className={iconClasses} />
        {text}
      </button>
    </label>
  );
};

export default Tag;
