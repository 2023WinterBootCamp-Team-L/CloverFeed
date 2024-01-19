import { atom } from 'recoil';

export type AnswerType = 'tag' | 'multipleChoice' | 'openEnded';

export type Answer = {
  type: AnswerType;
  content: string;
};

export type Question = {
  id: number;
  text: string;
  answers: Answer[];
};

export const questionsState = atom<Question[]>({
  key: 'questionsState',
  default: [],
});
