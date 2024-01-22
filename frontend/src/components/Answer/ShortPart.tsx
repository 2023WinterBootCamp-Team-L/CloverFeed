import React from "react";
import { useState, useEffect } from "react";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { selectedAnswerState, answerListState } from "./AnswerStore";
import axios from "axios";

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
      (answer) => answer.type === "short"
    );

    if (answerIndex !== -1) {
      // 기존의 짧은 답변 업데이트
      updatedAnswerList[answerIndex] = {
        type: "short",
        answer: [e.target.value],
      };
    } else {
      // 목록에 새로운 짧은 답변 추가
      updatedAnswerList.push({ type: "short", answer: [e.target.value] });
    }

    // 업데이트된 answerList 상태 설정
    setAnswerListState({ answers: updatedAnswerList });

    // 짧은 답변 state 업데이트
    setShortAnswerValue([e.target.value]);

    // 선택된 답변 설정
    setSelectedAnswer({ type: "short", answer: [e.target.value] });
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

  useEffect(() => {
    const apiUrl = "http://localhost:8000/api/answers";

    // POST 요청할 데이터
    const postData = {
      form_id: "타겟 폼 ID",
      category: "개발자",
      tags_work: ["박학다식", "기획력", "효율적인"],
      tags_attitude: ["개성이 뚜렷한", "경청하는", "센스있는"],
      answers: [
        {
          context: "이구름님에게 전하고 싶은 칭찬이 있나요?",
          type: "주관식",
          answer: "웃기고 귀여워.",
        },
        {
          context: "이구름님이 보완해 줬으면 하는 부분이 있나요?",
          type: "주관식",
          answer: "자꾸 지각한다.",
        },
      ],
    };

    // POST 요청 보내기
    axios
      .post(apiUrl, postData)
      .then((response) => {
        console.log("답변 제출");
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      });
  }, []);

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
