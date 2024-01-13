import BackButton from "../components/BackButton";
import { useState } from "react";
import Toggle from "../components/Toggle";
import AddButton from "../components/AddButton";
import AnswerOptionList from "../components/AnswerOptionList";
// import QuestionList from "../components/QuestionList";
import { useNavigate } from "react-router-dom";
import Question from "../components/Question";

function QueryAdd() {
  const [showAnswersAdd, setShowAnswersAdd] = useState(false);
  const [answerInputs, setAnswerInputs] = useState<string[]>([]);
  // const [questionInputs, setQuestionInputs] = useState<string[]>([]);
  const [questionInputs, setQuestionInputs] = useState("");
  const navigate = useNavigate();

  const handleToggleChange = (choice: boolean) => {
    setShowAnswersAdd(choice);
  };

  const handleAddButtonClick = () => {
    setAnswerInputs([...answerInputs, ""]);
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestionInputs(e.target.value);
  };

  const onComplete = () => {
    navigate("/querylist", { state: { updatedInputs: questionInputs } });
  };

  return (
    <div className=" ">
      <div className="bg-emerald-50 flex flex-col overflow-hidden max-w-[24.56rem] mx-auto h-screen px-5 py-8 gap-4">
        <div className="flex justify-between">
          <BackButton back page="/querylist" />
          <BackButton back={false} page="/querylist" onClick={onComplete} />
        </div>
        <p className="text-2xl">질문 추가 작성</p>
        <Toggle onChange={handleToggleChange} />
        <div className="flex flex-col gap-2">
          <p className="text-xl">질문 내용</p>
          <Question
            value={questionInputs}
            onTextChange={handleQuestionChange}
          />
        </div>

        {!showAnswersAdd && (
          <div className="flex flex-col gap-2">
            <p className="text-xl">답변 옵션</p>
            <AnswerOptionList
              inputs={answerInputs}
              setInputs={setAnswerInputs}
            />
            <AddButton
              text="답변 옵션을 추가하세요"
              onClick={handleAddButtonClick}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default QueryAdd;
