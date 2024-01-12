import BackButton from "../components/BackButton";
import QuestBlank from "../components/QuestBlank";
import { useState } from "react";
import Toggle from "../components/Toggle";

function QueryAdd() {
  const [questInput, setQuestInput] = useState(""); // 질문 입력
  const [showAnswersAdd, setShowAnswersAdd] = useState(false); // 답변 옵션 보기 유무

  const handleQuestInputChange = (value: string) => {
    setQuestInput(value);
  }; // 질문 입력

  const handleToggleChange = (choice: boolean) => {
    setShowAnswersAdd(choice);
  }; // 답변 옵션 보기 유무

  return (
    <div className=" ">
      <div className="bg-emerald-50 flex flex-col justify-center overflow-hidden max-w-[24.56rem] mx-auto h-screen px-5 gap-4">
        <div className="flex justify-between">
          <BackButton back page="/querylist" />
          <BackButton back={false} page="/querylist" />
        </div>
        <p className="text-2xl">질문 추가 작성</p>
        <Toggle onChange={handleToggleChange} />
        <div className="flex flex-col gap-2">
          <p className="text-xl">질문 내용</p>
          <QuestBlank onChange={handleQuestInputChange} />
        </div>

        {!showAnswersAdd && null}
      </div>
    </div>
  );
}

export default QueryAdd;
