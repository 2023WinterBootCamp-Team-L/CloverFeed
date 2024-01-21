import { atom } from "recoil";

export type AnswerType = "tag" | "option" | "short";

export type Answer = {
  type: AnswerType;
  content: string;
};

export type Question = {
  id: number;
  text: string;
  answers: Answer[];
};

export const selectedAnswerState = atom<Answer | null>({
  key: "selectedAnswerState",
  default: null,
});
