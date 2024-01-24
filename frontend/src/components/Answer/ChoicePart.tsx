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

  const [isButtonClicked, setIsButtonClicked] = useState(true);

  const handleButtonClick = (option: string) => {
    if (isButtonClicked) {
      // 이미 선택된 옵션인 경우 선택 해제
      const optionsToRemove = [option];

      setSelectedAnswer((prevSelectedAnswer) => ({
        context: currentQuestion.context,
        type: currentQuestion.type,
        answer:
          prevSelectedAnswer?.answer.filter(
            (selectedOption) => !optionsToRemove.includes(selectedOption)
          ) || [],
      }));

      // 해당 텍스트를 answerList에서 제거
      setAnswerListState((prevAnswerList) => ({
        ...prevAnswerList,
        answers: prevAnswerList.answers.filter(
          (answer) => !optionsToRemove.includes(answer.answer[0])
        ),
      }));
    } else {
      // 객관식인 경우 선택한 옵션 추가
      if (currentQuestion.type === "객관식" && currentQuestion.choices) {
        setSelectedAnswer((prevSelectedAnswer) => ({
          context: currentQuestion.context,
          type: currentQuestion.type,
          answer: [...(prevSelectedAnswer?.answer || []), option],
        }));

        // 선택한 옵션을 answerList에 추가
        setAnswerListState((prevAnswerList) => ({
          ...prevAnswerList,
          answers: [
            ...prevAnswerList.answers,
            {
              context: currentQuestion.context,
              type: currentQuestion.type,
              answer: [option],
            },
          ],
        }));
      }
      setIsButtonClicked(!isButtonClicked);
    }
  };

  useEffect(() => {
    // currentQuestionIndex가 변경될 때 answer 값 초기화
    setSelectedAnswer({
      context: currentQuestion.context,
      type: currentQuestion.type,
      answer: [],
    });
    setIsButtonClicked(false); // 클릭된 버튼 초기화
  }, [
    questionIndex,
    currentQuestion.context,
    currentQuestion.type,
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
          hoverBgColor={
            isButtonClicked ? Colors[index % Colors.length].color : "white"
          }
          clickedColor={Colors[index % Colors.length].color}
        />
      ))}
    </div>
  );
}

export default ChoicePart;
