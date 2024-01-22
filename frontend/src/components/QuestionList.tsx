import React from "react";
import { Question } from "../pages/QueryList";

interface QuestionListProps {
  questions?:
    | {
        questions?: Question[] | undefined;
        value: string;
        onTextChange: React.ChangeEventHandler<HTMLTextAreaElement>;
      }[]
    | undefined;
}

export const QuestionList: React.FC<QuestionListProps> = ({
  questions = [],
}) => {
  return (
    <div>
      {questions.map((question, index) => (
        <div
          key={index}
          className={`rounded-lg h-12 flex items-center px-4 text-sm leading-1.25 mb-1.5 ${
            index % 2 === 0 ? "bg-c-blue" : "bg-c-purple bg-opacity-50"
          }`}
        >
          {question.value}
        </div>
      ))}
    </div>
  );
};
