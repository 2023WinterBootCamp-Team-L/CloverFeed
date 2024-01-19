import { atomFamily } from "recoil";

// QuestionInputState를 위한 atomFamily
export const questionInputState = atomFamily<string, number>({
  key: "questionInputState",
  default: (questionId) => `질문하고 싶은 내용을 입력하세요 ${questionId}`,
});

// AnswerInputState를 위한 atomFamily
export const answerInputState = atomFamily<string[], number>({
  key: "answerInputState",
  default: (questionId) => [],
});
