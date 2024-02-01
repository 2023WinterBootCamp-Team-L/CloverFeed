import { atom } from "recoil";
import 효율적인 from "../assets/효율적인.png";
import 박학다식 from "../assets/박학다식.png";
import 문제분석 from "../assets/문제분석.png";
import 계획적인 from "../assets/계획적인.png";
import 기획력 from "../assets/기획력.png";
import 창의적인 from "../assets/창의적인.png";
import 규칙준수 from "../assets/규칙준수.png";
import 위기대처능력 from "../assets/위기대처능력.png";
import 리더쉽 from "../assets/리더쉽.png";
import 정보수집 from "../assets/정보수집.png";
import 의견다양성 from "../assets/의견다양성.png";
import 추진력 from "../assets/추진력.png";
import 전략적인 from "../assets/전략적인.png";
import 결단력 from "../assets/결단력.png";
import 협력적인 from "../assets/협력적인.png";
import 책임감 from "../assets/책임감.png";
import 공감능력 from "../assets/공감능력.png";
import 배려심 from "../assets/배려심.png";
import 성실함 from "../assets/성실함.png";
import 적극적인 from "../assets/적극적인.png";
import 꼼꼼함 from "../assets/꼼꼼함.png";
import 분위기메이커 from "../assets/분위기메이커.png";
import 주도적인 from "../assets/주도적인.png";
import 센스있는 from "../assets/센스있는.png";
import 긍정적인 from "../assets/긍정적인.png";
import 사교성이좋은 from "../assets/사교성이좋은.png";
import 관대한 from "../assets/관대한.png";
import 경청하는 from "../assets/경청하는.png";
import 도전적인 from "../assets/도전적인.png";
import 끈기 from "../assets/끈기.png";

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
      image: 효율적인,
      tagnumber: 1,
    },
    {
      text: "박학다식",
      image: 박학다식,
      tagnumber: 2,
    },
    {
      text: "문제분석",
      image: 문제분석,
      tagnumber: 3,
    },
    {
      text: "계획적인",
      image: 계획적인,
      tagnumber: 4,
    },
    {
      text: "기획력",
      image: 기획력,
      tagnumber: 5,
    },
    {
      text: "창의적인",
      image: 창의적인,
      tagnumber: 6,
    },
    {
      text: "규칙준수",
      image: 규칙준수,
      tagnumber: 7,
    },
    {
      text: "위기대처 능력",
      image: 위기대처능력,
      tagnumber: 8,
    },
    {
      text: "리더쉽",
      image: 리더쉽,
      tagnumber: 9,
    },
    {
      text: "정보수집",
      image: 정보수집,
      tagnumber: 10,
    },
    {
      text: "의견 다양성",
      image: 의견다양성,
      tagnumber: 11,
    },
    {
      text: "추진력",
      image: 추진력,
      tagnumber: 12,
    },
    {
      text: "전략적인",
      image: 전략적인,
      tagnumber: 13,
    },
    {
      text: "결단력",
      image: 결단력,
      tagnumber: 14,
    },
    {
      text: "협력적인",
      image: 협력적인,
      tagnumber: 15,
    },
  ],
});

export const tagsAttitudeDataState = atom<TagProps[]>({
  key: "tagsAttitudeDataState",
  default: [
    {
      text: "책임감",
      image: 책임감,
      tagnumber: 1,
    },
    {
      text: "공감능력",
      image: 공감능력,
      tagnumber: 2,
    },
    {
      text: "배려심",
      image: 배려심,
      tagnumber: 3,
    },
    {
      text: "성실함",
      image: 성실함,
      tagnumber: 4,
    },
    {
      text: "적극적인",
      image: 적극적인,
      tagnumber: 5,
    },
    {
      text: "꼼꼼함",
      image: 꼼꼼함,
      tagnumber: 6,
    },
    {
      text: "분위기 메이커",
      image: 분위기메이커,
      tagnumber: 7,
    },
    {
      text: "주도적인",
      image: 주도적인,
      tagnumber: 8,
    },
    {
      text: "센스있는",
      image: 센스있는,
      tagnumber: 9,
    },
    {
      text: "긍정적인",
      image: 긍정적인,
      tagnumber: 10,
    },
    {
      text: "사교성이 좋은",
      image: 사교성이좋은,
      tagnumber: 11,
    },
    {
      text: "관대한",
      image: 관대한,
      tagnumber: 12,
    },
    {
      text: "경청하는",
      image: 경청하는,
      tagnumber: 13,
    },
    {
      text: "도전적인",
      image: 도전적인,
      tagnumber: 14,
    },
    {
      text: "끈기",
      image: 끈기,
      tagnumber: 15,
    },
  ],
});
