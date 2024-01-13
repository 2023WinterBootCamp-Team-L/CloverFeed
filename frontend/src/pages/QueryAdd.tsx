import BackButton from "../components/BackButton";
import { useState } from "react";
import Toggle from "../components/Toggle";
import AddButton from "../components/AddButton";
import AnswerOptionList from "../components/AnswerOptionList";
import { useQuestionContext } from "../components/QuestionUpdate";

export interface QuestionProps {
  value: string;
  onTextChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export const Question: React.FC<QuestionProps> = ({ value, onTextChange }) => {
  return (
    <div>
      <textarea
        value={value}
        onChange={onTextChange}
        className="h-40 w-full border-emerald-200 border-2 rounded-lg focus:outline-none leading-1.25 p-2 text-sm resize-none"
      />
    </div>
  );
};

function QueryAdd() {
  const [showAnswersAdd, setShowAnswersAdd] = useState(false);
  const [answerInputs, setAnswerInputs] = useState<string[]>([]);
  const [questionInputs, setQuestionInputs] = useState<string>("");

  const { questions, setQuestions } = useQuestionContext();

  const handleToggleChange = (choice: boolean) => {
    setShowAnswersAdd(choice);
  };

  const handleAnswerAddButtonClick = () => {
    setAnswerInputs([...answerInputs, ""]);
  };

  const handleAddButtonClick = () => {
    // 기존 질문 리스트에 새로운 질문 추가
    const newQuestionList = [
      ...questions,
      { value: questionInputs, onTextChange: handleQuestionChange },
    ];
    setQuestions(newQuestionList);

    // 입력된 질문 초기화
    setQuestionInputs("");
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestionInputs(e.target.value);
  };

  return (
    <div className="bg-emerald-50 flex flex-col overflow-hidden max-w-[24.56rem] mx-auto h-[53.25rem] px-5 py-8 gap-4">
      <div className="flex justify-between">
        <BackButton back page="/querylist" />
        <BackButton
          back={false}
          page="/querylist"
          onClick={handleAddButtonClick}
        />
      </div>
      <p className="text-2xl">질문 추가 작성</p>
      <Toggle onChange={handleToggleChange} />
      <div className="flex flex-col gap-2">
        <p className="text-xl">질문 내용</p>
        <Question value={questionInputs} onTextChange={handleQuestionChange} />
      </div>
      {!showAnswersAdd && (
        <div className="flex flex-col gap-2">
          <p className="text-xl">답변 옵션</p>
          <AnswerOptionList inputs={answerInputs} setInputs={setAnswerInputs} />
          <AddButton
            text="답변 옵션을 추가하세요"
            onClick={handleAnswerAddButtonClick}
          />
        </div>
      )}
    </div>
  );
}

export default QueryAdd;
