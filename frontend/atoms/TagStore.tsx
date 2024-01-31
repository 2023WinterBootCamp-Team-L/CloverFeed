import { atom } from "recoil";
// import { currentQuestionIndexState } from "../src/pages/LinkAnswer";

export type TagProps = {
  text: string;
  image: string;
  tagnumber: number;
};

export const tagsWorkDataState = atom<TagProps[]>({
  key: "tagsWorkDataState",
  default: [
    {
      text: "효율적인",
      image: "../src/assets/효율적인.png",
      tagnumber: 1,
    },
    {
      text: "박학다식",
      image: "../src/assets/박학다식.png",
      tagnumber: 2,
    },
    {
      text: "문제분석",
      image: "../src/assets/문제분석.png",
      tagnumber: 3,
    },
    {
      text: "계획적인",
      image: "../src/assets/계획적인.png",
      tagnumber: 4,
    },
    {
      text: "기획력",
      image: "../src/assets/기획력.png",
      tagnumber: 5,
    },
    {
      text: "창의적인",
      image: "../src/assets/창의적인.png",
      tagnumber: 6,
    },
    {
      text: "규칙준수",
      image: "../src/assets/규칙준수.png",
      tagnumber: 7,
    },
    {
      text: "위기대처 능력",
      image: "../src/assets/위기대처능력.png",
      tagnumber: 8,
    },
    {
      text: "리더쉽",
      image: "../src/assets/리더쉽.png",
      tagnumber: 9,
    },
    {
      text: "정보수집",
      image: "../src/assets/정보수집.png",
      tagnumber: 10,
    },
    {
      text: "의견 다양성",
      image: "../src/assets/의견다양성.png",
      tagnumber: 11,
    },
    {
      text: "추진력",
      image: "../src/assets/추진력.png",
      tagnumber: 12,
    },
    {
      text: "전략적인",
      image: "../src/assets/전략적인.png",
      tagnumber: 13,
    },
    {
      text: "결단력",
      image: "../src/assets/결단력.png",
      tagnumber: 14,
    },
    {
      text: "협력적인",
      image: "../src/assets/협력적인.png",
      tagnumber: 15,
    },
  ],
});

export const tagsAttitudeDataState = atom<TagProps[]>({
  key: "tagsAttitudeDataState",
  default: [
    {
      text: "책임감",
      image: "../src/assets/책임감.png",
      tagnumber: 1,
    },
    {
      text: "공감능력",
      image: "../src/assets/공감능력.png",
      tagnumber: 2,
    },
    {
      text: "배려심",
      image: "../src/assets/배려심.png",
      tagnumber: 3,
    },
    {
      text: "성실함",
      image: "../src/assets/성실함.png",
      tagnumber: 4,
    },
    {
      text: "적극적인",
      image: "../src/assets/적극적인.png",
      tagnumber: 5,
    },
    {
      text: "꼼꼼함",
      image: "../src/assets/꼼꼼함.png",
      tagnumber: 6,
    },
    {
      text: "분위기 메이커",
      image: "../src/assets/분위기메이커.png",
      tagnumber: 7,
    },
    {
      text: "주도적인",
      image: "../src/assets/주도적인.png",
      tagnumber: 8,
    },
    {
      text: "센스있는",
      image: "../src/assets/센스있는.png",
      tagnumber: 9,
    },
    {
      text: "긍정적인",
      image: "../src/assets/긍정적인.png",
      tagnumber: 10,
    },
    {
      text: "사교성이 좋은",
      image: "../src/assets/사교성이좋은.png",
      tagnumber: 11,
    },
    {
      text: "관대한",
      image: "../src/assets/관대한.png",
      tagnumber: 12,
    },
    {
      text: "경청하는",
      image: "../src/assets/경청하는.png",
      tagnumber: 13,
    },
    {
      text: "도전적인",
      image: "../src/assets/도전적인.png",
      tagnumber: 14,
    },
    {
      text: "끈기",
      image: "../src/assets/끈기.png",
      tagnumber: 15,
    },
  ],
});
