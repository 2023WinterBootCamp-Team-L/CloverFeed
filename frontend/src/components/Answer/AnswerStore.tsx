import { atom, selector } from "recoil";

export type Category = string;
export type TagsWork = string;
export type TagsAttitude = string;
export type AnswerType = "객관식" | "주관식";

export type Answer = {
  content: string;
  type: AnswerType;
  answer: AnswerType extends "주관식" ? string : string[];
};

export type AnswerList = {
  category: Category;
  tags_work: TagsWork[];
  tags_attitude: TagsAttitude[];
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
    category: "",
    tags_work: [],
    tags_attitude: [],
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
