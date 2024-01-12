import AddButton from "../components/AddButton";
import AnswerOption from "../components/AnswerOption";
import { useState } from "react";

function OptionPart() {
  const [answerInput, setAnswerInput] = useState(""); // 답변 옵션 입력
  const [answerOptions, setAnswerOptions] = useState<React.ReactNode[]>([]); // 답변 옵션 리스트

  const handleAnswerInputChange = (value: string) => {
    setAnswerInput(value);
  }; // 답변 옵션 입력

  const handleAddButtonClick = () => {
    setAnswerOptions((prevOptions) => [
      ...prevOptions,
      <AnswerOption
        key={prevOptions.length}
        onChange={handleAnswerInputChange}
      />,
    ]);
  }; // 답변 옵션 리스트

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl">답변 옵션</p>
      {answerOptions}
      <AddButton text="답변 옵션을 추가하세요" onClick={handleAddButtonClick} />
    </div>
  );
}

export default OptionPart;
