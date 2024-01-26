// TagAnswer.tsx

import React from "react";

export interface TagAnswerProps {
  text: string;
  color?: string | number | null;
  image: string;
  tagnumber: number;
}

const TagAnswer: React.FC<TagAnswerProps> = ({ text, color, image }) => {
  const bgColors = ["#E2E9FF", "#F6EED4", "#EDD0F5", "#F9C7C7", "#D5FBE5"];

  const borderColors = ["#9EACD0", "#F5D781", "#EBBCF7", "#FE8C8C", "#94fbbf"];

  const tagBgColor =
    typeof color === "number" ? bgColors[color % bgColors.length] : "";

  const tagBorderColor =
    typeof color === "number" ? borderColors[color % borderColors.length] : "";

  const tagStyle: React.CSSProperties = {
    backgroundColor: tagBgColor,
    borderColor: tagBorderColor,
    boxShadow: "4px 4px 3px rgba(200,200,200,0.3)",
  };

  return (
    <label className="inline-flex relative mt-2 mr-2">
      <div
        style={tagStyle}
        className="flex flex-row items-center border-2 rounded-3xl py-1 px-4 font-pre text-[12px] font-bold"
      >
        <img
          src={image}
          alt="태그 아이콘"
          className="mr-2 max-w-fit max-h-3 object-contain"
        />
        {text}
      </div>
    </label>
  );
};

export default TagAnswer;
