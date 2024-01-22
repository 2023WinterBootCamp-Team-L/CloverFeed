import { atom, selector } from "recoil";

export type QuestionType = "객관식" | "주관식";

export type Question = {
  content: string;
  type: QuestionType;
  choice: QuestionType extends "주관식" ? null : string[] | null;
};

export type QuestionList = {
  questions: Question[];
};

// 개별 Quesiton을 저장하기 위한 Atom
export const selectedQuestionState = atom<Question | null>({
  key: "selectedQuestionState",
  default: null,
});

// QuestionList를 저장하기 위한 Atom
export const questionListState = atom<QuestionList>({
  key: "questionListState",
  default: {
    questions: [
      {
        content: "본인의 포지션을 선택해주세요.",
        type: "객관식",
        choice: ["개발자", "디자이너", "기획자", "PMPO", "기타직무"],
      },
      {
        content: "당신이 생각하는 ${username}님의 업무 능력 강점은 무엇인가요?",
        type: "객관식",
        choice: [
          "박학다식",
          "기획력",
          "문제 분석",
          "효율적인",
          "계획적인",
          "위기대처능력",
          "정보수집",
          "추진력",
          "규칙준수",
          "창의적인",
          "리더십",
          "전략적인",
          "의견다양성",
          "결단력",
          "협력적인",
        ],
      },
      {
        content: "당신이 생각하는 ${username}님의 성격 및 태도는 어떤가요?",
        type: "객관식",
        choice: [
          "책임감",
          "공감능력",
          "경청하는",
          "성실함",
          "배려심",
          "적극적인",
          "꼼꼼함",
          "끈기",
          "분위기메이커",
          "주도적인",
          "긍정적인",
          "사교성이 좋은",
          "관대한",
          "도전적인",
          "센스있는",
        ],
      },
      {
        content: "${username}에게 전하고 싶은 칭찬이 있나요?",
        type: "주관식",
        choice: null,
      },
      {
        content: "${username}이 보완해 줬으면 하는 부분이 있나요?",
        type: "주관식",
        choice: null,
      },
    ],
  },
});

// QuestionList를 얻기 위한 Selector
export const questionListSelector = selector<QuestionList>({
  key: "questionListSelector",
  get: ({ get }) => {
    return get(questionListState);
  },
});
