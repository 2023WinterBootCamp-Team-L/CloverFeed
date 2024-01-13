import React from "react";

interface QuestionListProps {
  questions: {
    value: string;
    onTextChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  }[];
}

export const QuestionList: React.FC<QuestionListProps> = ({ questions }) => {
  return (
    <div>
      {questions.map((question, index) => (
        <div
          key={index}
          className="bg-blue-200 text-black rounded-lg h-12 flex items-center px-4 text-sm leading-1.25 mb-1.5"
        >
          {question.value}
        </div>
      ))}
    </div>
  );
};
