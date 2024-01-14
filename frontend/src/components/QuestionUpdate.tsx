import { QuestionProps } from "../pages/QueryAdd";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface QuestionContextType {
  questions: QuestionProps[];
  setQuestions: React.Dispatch<React.SetStateAction<QuestionProps[]>>;
}

interface QuestionProviderProps {
  children: ReactNode;
}

const QuestionContext = createContext<QuestionContextType | undefined>(
  undefined
);

export const useQuestionContext = () => {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error(
      "useQuestionContext must be used within a QuestionProvider"
    );
  }
  return context;
};

export const QuestionProvider: React.FC<QuestionProviderProps> = ({
  children,
}) => {
  const [questions, setQuestions] = useState<QuestionProps[]>([]);

  return (
    <QuestionContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuestionContext.Provider>
  );
};
