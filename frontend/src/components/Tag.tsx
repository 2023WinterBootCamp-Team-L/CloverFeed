// Tag.tsx

import { useState } from "react";
import classNames from "classnames";

// TagProps를 정의합니다.
interface TagProps {
  text: string;
  color: string;
  image: string;
  onClick?: () => void;
}

// Tag 컴포넌트를 정의합니다.
const Tag: React.FC<TagProps> = ({ text, color, image, onClick }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    }
    setIsSelected((prev) => !prev);
  };

  const tagColors = [
    { bg: "bg-[#E2E9FF]", icon: "fill-[#9EACD0]" },
    { bg: "bg-[#F6EED4]", icon: "fill-[#F5D781]" },
    { bg: "bg-[#EDD0F5]", icon: "fill-[#EBBCF7]" },
    { bg: "bg-[#F9C7C7]", icon: "fill-[#FE8C8C]" },
    { bg: "bg-[#D5FBE5]", icon: "fill-[#9CECBE]" },
  ];

  const selectedColorIndex = isSelected ? tagColors.length - 1 : undefined;
  const selectedColor =
    selectedColorIndex !== undefined
      ? tagColors[selectedColorIndex]
      : undefined;

  const tagClasses = classNames(
    color,
    "py-1 px-3",
    "rounded-2xl",
    "mt-4",
    "text-xs",
    "flex",
    "items-center",
    "justify-center",
    selectedColor?.bg
  );

  const iconClasses = classNames(
    "mr-2",
    "max-h-4",
    "object-contain",
    selectedColor?.icon
  );

  return (
    <label className="inline-flex relative">
      <button className={tagClasses} onClick={handleButtonClick}>
        <img src={image} alt="Tag Icon" className={iconClasses} />
        {text}
      </button>
    </label>
  );
};

export default Tag;
