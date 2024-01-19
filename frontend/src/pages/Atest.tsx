// QuestionList.tsx
import React from "react";
import { useRecoilState } from "recoil";
import {
  questionsState,
  Question,
  AnswerType,
} from "../components/AnswerStore";

const Atest: React.FC = () => {
  const [questions, setQuestions] = useRecoilState(questionsState);

  const addAnswer = (questionId: number, type: AnswerType, content: string) => {
    setQuestions((prevQuestions) => {
      const newQuestions = [...prevQuestions];
      const questionIndex = newQuestions.findIndex((q) => q.id === questionId);

      if (questionIndex !== -1) {
        newQuestions[questionIndex].answers.push({ type, content });
      }

      return newQuestions;
    });
  };

  return (
    <div className="flex flex-col bg-c-green">
      {questions.map((question) => (
        <div key={question.id}>
          <p>{question.text}</p>
          <button onClick={() => addAnswer(question.id, "tag", "tag1")}>
            Add Tag Answer
          </button>
          <button
            onClick={() => addAnswer(question.id, "multipleChoice", "Option A")}
          >
            Add Multiple Choice Answer
          </button>
          <button
            onClick={() =>
              addAnswer(question.id, "openEnded", "Open-ended Answer")
            }
          >
            Add Open-ended Answer
          </button>
        </div>
      ))}
    </div>
  );
};

export default Atest;
