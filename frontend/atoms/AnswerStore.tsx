import { atom, selector } from "recoil";

export type Category = string;
export type TagWork = string[];
export type TagAttitude = string[];
export type AnswerType = "객관식" | "주관식";

export type Answer = {
  context: string;
  type: AnswerType;
  answer: string[];
};

export type AnswerList = {
  form_id: number; // Add form_id property
  category: Category;
  tags_work: TagWork;
  tags_attitude: TagAttitude;
  answers: Answer[];
};

// export const selectedTagsState = atom<TagProps[]>({
//   key: "selectedTagsState",
//   default: [],
// });

// 개별 Answer를 저장하기 위한 Atom
export const selectedAnswerState = atom<Answer | null>({
  key: "selectedAnswerState",
  default: null,
});

// AnswerList를 저장하기 위한 Atom
export const answerListState = atom<AnswerList>({
  key: "answerListState",
  default: {
    form_id: 0, // Add default value for form_id
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
