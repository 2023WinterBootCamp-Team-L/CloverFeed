// QueryAdd.tsx
import BackButton from "../components/BackButton";
import { useState } from "react";
import Toggle from "../components/Toggle";
import AddButton from "../components/AddButton";
import AnswerOptionList from "../components/AnswerOptionList";
import { useQuestionContext } from "../components/QuestionUpdate";
import { useNavigate } from "react-router-dom";
import PopupQuestion from "../components/PopupQuestion";
export interface QuestionProps {
  value: string;
  onTextChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onFocus?: () => void;
  onBlur?: () => void;
}
export const Question: React.FC<QuestionProps> = ({
  value,
  onTextChange,
  onFocus,
  onBlur,
}) => {
  const textColor =
    value === "질문하고 싶은 내용을 입력하세요" ? "gray" : "black";
  const textAreaStyle = {
    color: textColor,
  };
  return (
    <div>
      <textarea
        value={value}
        onChange={onTextChange}
        onFocus={onFocus}
        onBlur={onBlur}
        style={textAreaStyle}
        className="h-40 w-full border-c-green border-opacity-50 border-2 rounded-lg focus:outline-none leading-1.25 p-2 text-sm resize-none"
      />
    </div>
  );
};
function QueryAdd() {
  const [showAnswersAdd, setShowAnswersAdd] = useState(false);
  const [answerInputs, setAnswerInputs] = useState<string[]>([]);
  const [questionInputs, setQuestionInputs] =
    useState<string>("질문하고 싶은 내용을 입력하세요");
  const [answerComplete, setAnswerComplete] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate();
  const onFocus = () => {
    if (questionInputs === "질문하고 싶은 내용을 입력하세요") {
      setQuestionInputs("");
    }
  };
  const onBlur = () => {
    if (questionInputs === "") {
      setQuestionInputs("질문하고 싶은 내용을 입력하세요");
    }
  };
  const { questions, setQuestions } = useQuestionContext();
  const handleToggleChange = (choice: boolean) => {
    setShowAnswersAdd(choice);
    setAnswerComplete(choice);
  };
  const handleAnswerAddButtonClick = () => {
    setAnswerInputs([...answerInputs, ""]);
  };
  const handleAddButtonClick = () => {
    if (
      questionInputs !== "질문하고 싶은 내용을 입력하세요" &&
      answerComplete &&
      (showAnswersAdd || (!showAnswersAdd && answerInputs.length >= 2))
    ) {
      // 기존 질문 리스트에 새로운 질문 추가
      const newQuestionList = [
        ...questions,
        { value: questionInputs, onTextChange: handleQuestionChange },
      ];
      setQuestions(newQuestionList);
      // 입력된 질문 초기화
      setQuestionInputs("");
      navigate("/querylist");
    } else {
      setPopupVisible(true);
    }
  };
  const handleQuestionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestionInputs(e.target.value);
  };
  const handleAnswerCompleteChange = (complete: boolean) => {
    setAnswerComplete(complete);
  };
  const handlePopupClose = () => {
    setPopupVisible(false);
  };
  return (
    <div className="flex flex-col overflow-hidden max-w-[24.56rem] mx-auto h-[53.25rem] px-5 py-8 gap-4">
      <div className="flex justify-between">
        <BackButton back page="/querylist" />
        <BackButton back={false} onClick={handleAddButtonClick} />
      </div>
      <p className="text-2xl">질문 추가 작성</p>
      <Toggle onChange={handleToggleChange} />
      <div className="flex flex-col gap-2">
        <p className="text-xl">질문 내용</p>
        <Question
          value={questionInputs}
          onTextChange={handleQuestionChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
      {!showAnswersAdd && (
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-end gap-1">
            <p className="text-xl">답변 옵션</p>
            <p className="text-xs text-gray-600 p-1">(2개 이상 필수)</p>
          </div>
          <AddButton
            text="답변 옵션을 추가하세요"
            onClick={handleAnswerAddButtonClick}
          />
          <AnswerOptionList
            inputs={answerInputs}
            setInputs={setAnswerInputs}
            onCompleteChange={handleAnswerCompleteChange}
          />
        </div>
      )}
      {popupVisible && <PopupQuestion onClose={handlePopupClose} />}
    </div>
  );
}
export default QueryAdd;