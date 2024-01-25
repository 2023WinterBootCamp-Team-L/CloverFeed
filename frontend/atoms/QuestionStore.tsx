import { atom, selector } from "recoil";

export type QuestionType = "객관식" | "주관식";

export type Question = {
  context: string;
  type: QuestionType;
  choices: string[] | null;
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
  default: (() => {
    const username = localStorage.getItem("user_name") || "user";
    return {
      questions: [
        {
          context: "당신의 포지션을 선택해주세요.",
          type: "객관식",
          choices: ["개발자", "디자이너", "기획자", "PMPO", "기타직무"],
        },
        {
          context: `당신이 생각하는 ${username}님의 업무 능력 강점은 무엇인가요?`,
          type: "객관식",
          choices: [
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
          context: `당신이 생각하는 ${username}님의 성격 및 태도는 어떤가요?`,
          type: "객관식",
          choices: [
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
          context: `${username}님에게 전하고 싶은 칭찬이 있나요?`,
          type: "주관식",
          choices: null,
        },
        {
          context: `${username}님이 보완해 줬으면 하는 부분이 있나요?`,
          type: "주관식",
          choices: null,
        },
      ],
    };
  })(),
});

// QuestionList를 얻기 위한 Selector
export const questionListSelector = selector<QuestionList>({
  key: "questionListSelector",
  get: ({ get }) => {
    return get(questionListState);
  },
});

// 입력된 질문을 저장하기 위한 Atom
export const currentQuestionState = atom<string>({
  key: "currentQuestionState",
  default: "질문하고 싶은 내용을 입력하세요",
});

// 현재 질문의 타입을 저장하기 위한 Atom
export const currentQuestionTypeState = atom<QuestionType>({
  key: "currentQuestionTypeState",
  default: "객관식",
});

// 현재 질문의 선지를 저장하기 위한 Atom
export const currentQuestionChoiceState = atom<string[]>({
  key: "currentQuestionChoiceState",
  default: [],
});

// 피드백 답변 페이지의 QuestionList를 저장하기 위한 Atom
export const feedbackQuestionListState = atom<QuestionList>({
  key: "feedbackQuestionListState",
  default: {
    questions: [],
  },
});
