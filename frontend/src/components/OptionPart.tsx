import AddButton from "../components/AddButton";
import { useState } from "react";
import AnswerOptionList from "./AnswerOptionList";

function OptionPart() {
  const [inputs, setInputs] = useState<string[]>([]);

  const handleAddButtonClick = () => {
    setInputs([...inputs, ""]); // Add an empty string as a new input
  }; // 답변 옵션 리스트

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl">답변 옵션</p>
      <AnswerOptionList inputs={inputs} setInputs={setInputs} />
      <AddButton text="답변 옵션을 추가하세요" onClick={handleAddButtonClick} />
    </div>
  );
}

export default OptionPart;
