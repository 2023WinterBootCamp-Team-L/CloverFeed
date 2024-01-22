import { useState, useEffect } from "react";
import ChoiceButton from "./ChoiceButton";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { selectedAnswerState, answerListState } from "./AnswerStore";
import axios from "axios";

function ChoicePart() {
  const Options = [
    { option: "1점" },
    { option: "2점" },
    { option: "3점" },
    { option: "4점" },
  ];

  const Colors = [
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
        type: "choice",
        answer:
          prevSelectedAnswer?.answer.filter(
            (selectedOption) => !optionsToRemove.includes(selectedOption)
          ) || [],
      }));

      // 해당 텍스트를 answerList에서 제거
      setAnswerListState((prevAnswerList) => ({
        answers: prevAnswerList.answers.filter(
          (answer) => !optionsToRemove.includes(answer.answer[0])
        ),
      }));
    } else {
      // 버튼 클릭 시 텍스트 추가
      setSelectedAnswer((prevSelectedAnswer) => ({
        type: "choice",
        answer: [...(prevSelectedAnswer?.answer || []), option],
      }));

      // 텍스트를 answerList에 추가
      setAnswerListState((prevAnswerList) => ({
        answers: [
          ...prevAnswerList.answers,
          { type: "choice", answer: [option] },
        ],
      }));
    }

    // 클릭 상태 업데이트
    setIsButtonClicked(!isButtonClicked);
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
          context: "당신의 직무는 무엇인가요?",
          type: "객관식",
          answer: "개발자",
        },
        {
          context: "이구름님의 업무 능력 강점은 무엇인가요?",
          type: "객관식",
          answer: "박학다식",
        },
        {
          context: "이구름님의 성격 및 태도는 어떤가요?",
          type: "객관식",
          answer: "책임감",
        },
        {
          context: "이구름님에게 전하고 싶은 칭찬이 있나요?",
          type: "주관식",
          answer: "웃기고 귀여워:)",
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
