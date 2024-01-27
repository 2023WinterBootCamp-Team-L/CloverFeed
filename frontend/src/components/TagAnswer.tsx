// TagAnswer.tsx

import React from "react";

export interface TagAnswerProps {
  text: string;
  image: string;
}

const TagAnswer: React.FC<TagAnswerProps> = ({ text, image }) => {
  const tagColors = [
    { bg: "#E2E9FF", border: "#9EACD0" },
    { bg: "#F6EED4", border: "#F5D781" },
    { bg: "#EDD0F5", border: "#EBBCF7" },
    { bg: "#F9C7C7", border: "#FE8C8C" },
    { bg: "#D5FBE5", border: "#94fbbf" },
  ];

  // 배열 섞기
  const shuffledColors = [...tagColors].sort(() => Math.random() - 0.5);

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * shuffledColors.length);
    return shuffledColors[randomIndex];
  };

  const randomColor = getRandomColor();

  const tagStyle: React.CSSProperties = {
    backgroundColor: randomColor.bg,
    borderColor: randomColor.border,
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
          alt="Tag Icon"
          className="mr-2 max-w-fit max-h-3 object-contain"
        />
        {text}
      </div>
    </label>
  );
};

export default TagAnswer;
