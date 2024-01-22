import { atom, selector } from "recoil";

export type Category = string;
export type TagsWork = string;
export type TagsAttitude = string;
export type AnswerType = "choice" | "short";

export type Answer = {
  type: AnswerType;
  answer: string[];
};

export type AnswerList = {
  answers: Answer[];
};

// 개별 Answer를 저장하기 위한 Atom
export const selectedAnswerState = atom<Answer | null>({
  key: "selectedAnswerState",
  default: null,
});

// AnswerList를 저장하기 위한 Atom
export const answerListState = atom<AnswerList>({
  key: "answerListState",
  default: {
    answers: [],
  },
});

// AnswerList를 얻기 위한 Selector
export const answerListSelector = selector<AnswerList>({
  key: "answerListSelector",
  get: ({ get }) => {
    return get(answerListState);
  },
});
