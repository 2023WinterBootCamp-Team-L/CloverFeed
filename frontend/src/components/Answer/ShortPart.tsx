import React from "react";
import { useState } from "react";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { selectedAnswerState, answerListState } from "./AnswerStore";

export interface ShortAnswerProps {
  value: string[];
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
  return (
    <div>
      <textarea
        value={value[0]}
        onChange={onTextChange}
        onFocus={onFocus}
        onBlur={onBlur}
        style={textAreaStyle}
        className="h-40 w-full border-c-gray border-2 rounded-lg focus:outline-none leading-1.25 p-2 text-sm resize-none"
      />
    </div>
  );
};

function ShortPart() {
  const [shortAnswerValue, setShortAnswerValue] = useState([
    "답변을 입력하세요",
  ]);
  const [selectedAnswer, setSelectedAnswer] =
    useRecoilState(selectedAnswerState);
  const setAnswerListState = useSetRecoilState(answerListState);
  const answerList = useRecoilValue(answerListState);

  const handleTextChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    const updatedAnswerList = [...answerList.answers];
    const answerIndex = updatedAnswerList.findIndex(
      (answer) => answer.type === "주관식"
    );

    if (answerIndex !== -1) {
      // 기존의 짧은 답변 업데이트
      updatedAnswerList[answerIndex] = {
        content: "",
        type: "주관식",
        answer: [e.target.value],
      };
    } else {
      // 목록에 새로운 짧은 답변 추가
      updatedAnswerList.push({
        content: "",
        type: "주관식",
        answer: [e.target.value],
      });
    }

    // 업데이트된 answerList 상태 설정
    setAnswerListState((prevAnswerList) => ({
      ...prevAnswerList,
      answers: updatedAnswerList,
    }));

    // 짧은 답변 state 업데이트
    setShortAnswerValue([e.target.value]);

    // 선택된 답변 설정
    setSelectedAnswer({
      content: "",
      type: "주관식",
      answer: [e.target.value],
    });
  };

  const handleFocus = () => {
    if (shortAnswerValue[0] === "답변을 입력하세요") {
      setShortAnswerValue([""]);
    }
  };

  const handleBlur = () => {
    if (shortAnswerValue[0] === "") {
      setShortAnswerValue(["답변을 입력하세요"]);
    }
  };

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
