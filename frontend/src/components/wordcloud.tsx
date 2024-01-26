import React from "react";
import ReactWordcloud from "react-wordcloud";
import clovercloud from "../assets/clovercloud.svg";

interface Word {
  text: string;
  value: number;
}

const words: Word[] = [
  { text: "센스있는", value: 10 },
  { text: "도전적인", value: 7 },
  { text: "관대한", value: 15 },
  { text: "사교성이 좋은", value: 12 },
  { text: "긍정적인", value: 8 },
  { text: "주도적인", value: 8 },
  { text: "분위기 메이커", value: 5 },
  { text: "끈기", value: 6 },
  { text: "꼼꼼함", value: 9 },
  { text: "적극적인", value: 11 },
  { text: "배려심", value: 7 },
  { text: "성실함", value: 6 },
  { text: "경청하는", value: 10 },
  { text: "공감 능력", value: 13 },
  { text: "책임감", value: 8 },
  { text: "협력적인", value: 7 },
  { text: "결단력", value: 9 },
  { text: "의견 다양성", value: 6 },
  { text: "전략적인", value: 5 },
  { text: "리더십", value: 10 },
  { text: "창의적인", value: 7 },
  { text: "규칙 준수", value: 15 },
  { text: "추진력", value: 12 },
  { text: "정보 수집", value: 8 },
  { text: "위기대처 능력", value: 8 },
  { text: "계획적인", value: 5 },
  { text: "효율적인", value: 6 },
  { text: "문제 분석", value: 9 },
  { text: "기획력", value: 11 },
  { text: "박학다식", value: 7 },
  { text: "개발자", value: 6 },
  { text: "디자이너", value: 10 },
  { text: "기획자", value: 13 },
  { text: "PM/PO", value: 8 },
  { text: "협업", value: 7 },
  { text: "커뮤니케이션", value: 9 },
  { text: "성장", value: 6 },
  { text: "팀 문화", value: 5 },
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
        backgroundImage: `url(${clovercloud})`,
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain", // 이미지를 가득 채우도록 설정
        margin: "auto", // 가운데 정렬을 위한 추가
      }}
    >
      <ReactWordcloud words={words} options={options} />
    </div>
  );
};

export default SimpleWordcloud;
