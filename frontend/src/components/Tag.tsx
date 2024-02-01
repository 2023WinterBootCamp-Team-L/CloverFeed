import { useState } from "react";
import classNames from "classnames";

// TagProps를 정의합니다.
export interface TagProps {
  text: string;
  color: string | number | null;
  image: string;
  tagnumber: number;
  onClick?: () => void;
}

const tagColors = [
  "bg-[#E2E9FF]",
  "bg-[#F6EED4]",
  "bg-[#EDD0F5]",
  "bg-[#F9C7C7]",
  "bg-[#D5FBE5]",
];

const Tag: React.FC<TagProps> = ({ text, color, image, onClick }) => {
  const [currentColor, setCurrentColor] = useState("bg-white");

  const handleButtonClick = () => {
    if (onClick) {
      onClick();

      if (typeof color === "number") {
        // 현재 색상 인덱스를 계산
        const currentIndex = tagColors.findIndex((c) => c === currentColor);
        // 다음 인덱스의 배경색을 설정 (중복되면 처음 인덱스로)
        setCurrentColor(tagColors[(currentIndex + 1) % tagColors.length]);
      } else if (color === "bg-white") {
        setCurrentColor(color);
      }
    }
  };

  const tagClasses = classNames(
    currentColor, // 기본 배경색
    "py-2 px-5",
    "rounded-3xl",
    "text-xs",
    "flex",
    "items-center",
    "justify-center",
    "sm:py-1 sm:px-4", // 모바일 화면 이상에서 더 큰 크기로 조절
    "md:py-2 md:px-5", // 테블릿 화면 이상에서 더 큰 크기로 조절
    "lg:py-2 lg:px-5" // 데스크탑 화면 이상에서 더 큰 크기로 조절
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
