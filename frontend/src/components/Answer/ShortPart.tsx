import React from "react";
import { useState, useEffect } from "react";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import {
  selectedAnswerState,
  answerListState,
} from "../../../atoms/AnswerStore";
import { feedbackQuestionListState } from "../../../atoms/QuestionStore";

export interface ShortAnswerProps {
  value: string;
  onTextChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onFocus: () => void;
  onBlur: () => void;
}

export const ShortAnswer: React.FC<ShortAnswerProps> = ({
  value,
  onTextChange,
  onFocus,
  onBlur,
}) => {
  const textColor = value[0] === "답변을 입력하세요" ? "gray" : "black";
  const textAreaStyle = {
    color: textColor,
  };
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative">
      <textarea
        value={value}
        onChange={onTextChange}
        onFocus={() => {
          setIsFocused(true);
          if (onFocus) onFocus();
        }}
        onBlur={() => {
          setIsFocused(false);
          if (onBlur) onBlur();
        }}
        style={{
          ...textAreaStyle,
          borderColor: isFocused ? "#50DA8C" : "#D5FBE5",
        }}
        className="bg-white w-[340px] h-[380px] p-3 border-2  rounded-2xl focus:outline-none resize-none font-pre text-[14px]"
      />
    </div>
  );
};

function ShortPart({ questionIndex }: { questionIndex: number }) {
  const [shortAnswerValue, setShortAnswerValue] = useState("답변을 입력하세요");
  const [selectedAnswer, setSelectedAnswer] =
    useRecoilState(selectedAnswerState);
  const setAnswerListState = useSetRecoilState(answerListState);
  const answerList = useRecoilValue(answerListState);
  const [questionList] = useRecoilState(feedbackQuestionListState);
  const currentQuestion = questionList.questions[questionIndex];

  const handleTextChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    const updatedAnswerList = [...answerList.answers];
    const answerIndex = updatedAnswerList.findIndex(
      (answer) => answer.context === currentQuestion.context
    );

    if (answerIndex !== -1) {
      // 이미 해당 질문에 대한 답변이 있는 경우 업데이트
      updatedAnswerList[answerIndex] = {
        context: currentQuestion.context,
        type: currentQuestion.type,
        answer: e.target.value,
      };
    } else {
      // 해당 질문에 대한 답변이 없는 경우 추가
      updatedAnswerList.push({
        context: currentQuestion.context,
        type: currentQuestion.type,
        answer: e.target.value,
      });
    }

    // 업데이트된 answerList 상태 설정
    setAnswerListState((prevAnswerList) => ({
      ...prevAnswerList,
      answers: updatedAnswerList,
    }));

    // 짧은 답변 state 업데이트
    setShortAnswerValue(e.target.value);

    // 선택된 답변 설정
    setSelectedAnswer({
      context: currentQuestion.context,
      type: currentQuestion.type,
      answer: [e.target.value],
    });
  };

  const handleFocus = () => {
    if (shortAnswerValue === "답변을 입력하세요") {
      setShortAnswerValue("");
    }
  };

  const handleBlur = () => {
    if (shortAnswerValue === "") {
      setShortAnswerValue("답변을 입력하세요");
    }
  };

  useEffect(() => {
    setShortAnswerValue("답변을 입력하세요");
  }, [questionIndex]);

  return (
    <ShortAnswer
      value={shortAnswerValue}
      onTextChange={handleTextChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}

export default ShortPart;
