import React from "react";
import ReactWordcloud from "react-wordcloud";
import clovercloud from "../assets/clovercloud.svg";

interface Word {
  text: string;
  value: number;
}

const words: Word[] = [
  { text: "React", value: 10 },
  { text: "Wordcloud", value: 7 },
  { text: "JavaScript", value: 15 },
  { text: "TypeScript", value: 12 },
  { text: "HTML", value: 8 },
  { text: "CSS", value: 8 },
  { text: "Library", value: 5 },
  { text: "Component", value: 6 },
  { text: "Framework", value: 9 },
  { text: "Frontend", value: 11 },
  { text: "Backend", value: 7 },
  { text: "API", value: 6 },
  { text: "Node.js", value: 10 },
  { text: "Web Development", value: 13 },
  { text: "Responsive", value: 8 },
  { text: "Mobile", value: 7 },
  { text: "Design", value: 9 },
  { text: "UI/UX", value: 6 },
  { text: "Open Source", value: 5 },
  { text: "리액트", value: 10 },
  { text: "워드클라우드", value: 7 },
  { text: "자바스크립트", value: 15 },
  { text: "타입스크립트", value: 12 },
  { text: "HTML", value: 8 },
  { text: "CSS", value: 8 },
  { text: "라이브러리", value: 5 },
  { text: "컴포넌트", value: 6 },
  { text: "프레임워크", value: 9 },
  { text: "프론트엔드", value: 11 },
  { text: "백엔드", value: 7 },
  { text: "API", value: 6 },
  { text: "노드.js", value: 10 },
  { text: "웹 개발", value: 13 },
  { text: "반응형", value: 8 },
  { text: "모바일", value: 7 },
  { text: "디자인", value: 9 },
  { text: "UI/UX", value: 6 },
  { text: "오픈 소스", value: 5 },
  // ... other words
];

const options = {
  colors: [
    "hsl(0, 100%, 75%)",
    "hsl(35, 100%, 60%)",
    "hsl(224, 100%, 75%)",
    "hsl(285, 100%, 75%)",
  ],
  enableTooltip: false,
  deterministic: false,
  fontFamily: "impact",
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 3,
  transitionDuration: 1000,
};

const SimpleWordcloud: React.FC = () => {
  return (
    <div
      style={{
        width: "334px",
        height: "335px",
        backgroundImage: `url(${clovercloud})`,
        backgroundPosition: "center top",
      }}
    >
      <ReactWordcloud words={words} options={options} />
    </div>
  );
};

export default SimpleWordcloud;
