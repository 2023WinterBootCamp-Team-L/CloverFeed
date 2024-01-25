import { useState, useEffect } from "react";
import ChoiceButton from "./ChoiceButton";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  selectedAnswerState,
  answerListState,
} from "../../../atoms/AnswerStore";
import { feedbackQuestionListState } from "../../../atoms/QuestionStore";

type Option = {
  option: string;
};

type Color = {
  color: string;
};

function ChoicePart({ questionIndex }: { questionIndex: number }) {
  const Colors: Color[] = [
    { color: "#E2E9FF" },
    { color: "#F6EED4" },
    { color: "#EDD0F5" },
    { color: "#F9C7C7" },
    { color: "#D5FBE5" },
  ];

  const [selectedAnswer, setSelectedAnswer] =
    useRecoilState(selectedAnswerState);
  const setAnswerListState = useSetRecoilState(answerListState);
  const [questionList] = useRecoilState(feedbackQuestionListState);
  const currentQuestion = questionList.questions[questionIndex];
  const Options: Option[] = currentQuestion.choices
    ? currentQuestion.choices.map((choices) => ({ option: choices }))
    : [];

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleButtonClick = (option: string) => {
    setSelectedOptions((prevOptions) => {
      // 이미 선택된 옵션인 경우 제거
      const updatedOptions = prevOptions.includes(option)
        ? prevOptions.filter((selectedOption) => selectedOption !== option)
        : [...prevOptions, option]; // 선택되지 않은 옵션인 경우 추가

      return updatedOptions;
    });
  };

  const [reset, setReset] = useState(false);

  useEffect(() => {
    // questionIndex가 변경될 때마다 selectedOptions 초기화
    setSelectedOptions([]);
    setReset((prevReset) => !prevReset);
  }, [questionIndex]);

  useEffect(() => {
    // useEffect를 사용하여 비동기적으로 상태 업데이트
    setSelectedAnswer({
      context: currentQuestion.context,
      type: currentQuestion.type,
      answer: selectedOptions,
    });
  }, [selectedOptions, currentQuestion, setSelectedAnswer]);

  useEffect(() => {
    // questionIndex가 변경될 때마다 AnswerList에 현재 선택된 Answer를 저장하고, selectedAnswer 초기화
    if (currentQuestion && selectedAnswer && selectedAnswer.answer.length > 0) {
      setAnswerListState((prevAnswerList) => {
        const updatedAnswerList = [...prevAnswerList.answers];
        const answerIndex = updatedAnswerList.findIndex(
          (prevAnswer) => prevAnswer.context === currentQuestion.context
        );

        if (answerIndex !== -1) {
          // 이미 해당 질문에 대한 답변이 있는 경우 업데이트
          updatedAnswerList[answerIndex] = {
            context: currentQuestion.context,
            type: currentQuestion.type,
            answer: selectedOptions.join(","),
          };
        } else {
          // 해당 질문에 대한 답변이 없는 경우 추가
          updatedAnswerList.push({
            context: currentQuestion.context,
            type: currentQuestion.type,
            answer: selectedOptions.join(","),
          });
        }

        return {
          ...prevAnswerList,
          answers: updatedAnswerList,
        };
      });

      // 선택된 Answer 초기화
      setSelectedAnswer(null);
    }
  }, [
    questionIndex,
    currentQuestion,
    selectedAnswer,
    selectedOptions,
    setAnswerListState,
    setSelectedAnswer,
  ]);

  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      {Options.map((option, index) => (
        <ChoiceButton
          key={index}
          text={option.option}
          onClick={() => handleButtonClick(option.option)}
          borderColor={Colors[index % Colors.length].color}
          clickedColor={Colors[index % Colors.length].color}
          reset={reset}
        />
      ))}
    </div>
  );
}

export default ChoicePart;
