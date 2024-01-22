import { useState } from "react";
import ChoiceButton from "./ChoiceButton";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { selectedAnswerState, answerListState } from "./AnswerStore";

type Option = {
  option: string;
};

type Color = {
  color: string;
};

function ChoicePart() {
  const Options: Option[] = [
    { option: "1점" },
    { option: "2점" },
    { option: "3점" },
    { option: "4점" },
  ];

  const Colors: Color[] = [
    { color: "#E2E9FF" },
    { color: "#F6EED4" },
    { color: "#EDD0F5" },
    { color: "#F9C7C7" },
    { color: "#D5FBE5" },
  ];

  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [selectedAnswer, setSelectedAnswer] =
    useRecoilState(selectedAnswerState);
  const setAnswerListState = useSetRecoilState(answerListState);
  const answerList = useRecoilValue(answerListState);

  const handleButtonClick = (option: string) => {
    const isButtonClicked = selectedAnswer?.answer.includes(option);

    if (isButtonClicked) {
      // 버튼이 이미 클릭된 경우 클릭 상태 해제
      const optionsToRemove = [option];

      setSelectedAnswer((prevSelectedAnswer) => ({
        content: "",
        type: "객관식",
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
      // 버튼 클릭 시 텍스트 추가
      setSelectedAnswer((prevSelectedAnswer) => ({
        content: "",
        type: "객관식",
        answer: [...(prevSelectedAnswer?.answer || []), option],
      }));

      // 텍스트를 answerList에 추가
      setAnswerListState((prevAnswerList) => ({
        ...prevAnswerList,
        answers: [
          ...prevAnswerList.answers,
          { content: "", type: "객관식", answer: [option] },
        ],
      }));
    }

    // 클릭 상태 업데이트
    setIsButtonClicked(!isButtonClicked);
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
