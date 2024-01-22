// TagAnswer.tsx

import React from "react";

export interface TagAnswerProps {
  text: string;
  image: string;
}

const TagAnswer: React.FC<TagAnswerProps> = ({ text, image }) => {
  const tagColors = [
    { bg: "#E2E9FF", icon: "#9EACD0" },
    { bg: "#F6EED4", icon: "#F5D781" },
    { bg: "#EDD0F5", icon: "#EBBCF7" },
    { bg: "#F9C7C7", icon: "#FE8C8C" },
    { bg: "#D5FBE5", icon: "#94fbbf" },
    { bg: "#EEEFF0", icon: "#EEEFF0" },
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
    color: "black",
  };

  const imgStyle: React.CSSProperties = {
    color: randomColor.icon,
  };

  return (
    <label className="inline-flex relative mr-2">
      <button
        style={tagStyle}
        className="flex items-center justify-center rounded-2xl text-xs mt-4 py-1 px-3"
      >
        <img
          src={image}
          alt="Tag Icon"
          style={imgStyle}
          className="mr-2 max-h-4 object-contain"
        />
        {text}
      </button>
    </label>
  );
};

export default TagAnswer;
