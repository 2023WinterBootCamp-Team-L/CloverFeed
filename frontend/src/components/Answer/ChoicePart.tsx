import { useState, useEffect } from "react";
import ChoiceButton from "./ChoiceButton";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  Answer,
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

  const saveAnswerToList = (answer: Answer) => {
    setAnswerListState((prevAnswerList) => {
      const updatedAnswerList = [...prevAnswerList.answers];
      const answerIndex = updatedAnswerList.findIndex(
        (prevAnswer) => prevAnswer.context === answer.context
      );

      if (answerIndex !== -1) {
        // 이미 해당 질문에 대한 답변이 있는 경우 업데이트
        updatedAnswerList[answerIndex] = answer;
      } else {
        // 해당 질문에 대한 답변이 없는 경우 추가
        updatedAnswerList.push(answer);
      }

      return {
        ...prevAnswerList,
        answers: updatedAnswerList,
      };
    });
  };

  const handleButtonClick = (option: string) => {
    if (isButtonClicked) {
      // 이미 선택된 옵션인 경우 선택 해제
      const optionsToRemove = [option];

      setSelectedAnswer((prevSelectedAnswer) => ({
        context: currentQuestion.context,
        type: currentQuestion.type,
        answer: (prevSelectedAnswer?.answer || []).filter(
          (selectedOption) => !optionsToRemove.includes(selectedOption)
        ),
      }));

      // 해당 텍스트를 answerList에서 제거
      setAnswerListState((prevAnswerList) => ({
        ...prevAnswerList,
        answers: prevAnswerList.answers.filter(
          (answer) => !optionsToRemove.includes(answer.answer[0])
        ),
      }));

      setIsButtonClicked(false); // 클릭된 버튼 초기화
    } else {
      // 객관식인 경우 선택한 옵션 추가
      if (currentQuestion.type === "객관식" && currentQuestion.choices) {
        setSelectedAnswer({
          context: currentQuestion.context,
          type: currentQuestion.type,
          answer: [option],
        });

        // 선택한 옵션을 answerList에 추가
        saveAnswerToList({
          context: currentQuestion.context,
          type: currentQuestion.type,
          answer: [option],
        });

        // questionIndex에 따른 분기 처리
        switch (questionIndex) {
          case 0:
            setAnswerListState((prevAnswerList) => ({
              ...prevAnswerList,
              category: option,
            }));
            break;
          case 1:
            setAnswerListState((prevAnswerList) => ({
              ...prevAnswerList,
              tags_work: [option],
            }));
            break;
          case 2:
            setAnswerListState((prevAnswerList) => ({
              ...prevAnswerList,
              tags_attitude: [option],
            }));
            break;
          default:
            break;
        }
      }

      setIsButtonClicked(true); // 클릭된 버튼 상태 변경
    }
  };

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
