import BackButton from "../components/BackButton";
import { useState } from "react";
import Toggle from "../components/Toggle";
import AddButton from "../components/AddButton";
import AnswerOptionList from "../components/AnswerOptionList";
import { useNavigate } from "react-router-dom";
import PopupQuestion from "../components/PopupQuestion";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  questionListState,
  currentQuestionState,
  currentQuestionTypeState,
  currentQuestionChoiceState,
} from "../../atoms/QuestionStore";

export interface QuestionTextProps {
  value: string;
  onTextChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onFocus?: () => void;
  onBlur?: () => void;
}
export const QuestionText: React.FC<QuestionTextProps> = ({
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
        className="h-40 w-full border-c-green border-opacity-50 border-2 rounded-lg focus:outline-none leading-1.25 p-3 resize-none
        font-pre text-[14px]"
      />
    </div>
  );
};

function QueryAdd() {
  const [hiddenAnswersAdd, setHiddenAnswersAdd] = useState(false);
  const [answerInputs, setAnswerInputs] = useState<string[]>([]);
  const [answerComplete, setAnswerComplete] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] =
    useRecoilState(currentQuestionState);
  const [currentQuestionType, setCurrentQuestionType] = useRecoilState(
    currentQuestionTypeState
  );
  const [currentQuestionChoice, setCurrentQuestionChoice] = useRecoilState(
    currentQuestionChoiceState
  );

  const setQuestions = useSetRecoilState(questionListState);

  const onFocus = () => {
    if (currentQuestion === "질문하고 싶은 내용을 입력하세요") {
      setCurrentQuestion("");
    }
  };
  const onBlur = () => {
    if (currentQuestion === "") {
      setCurrentQuestion("질문하고 싶은 내용을 입력하세요");
    }
  };

  const handleToggleChange = (choice: boolean) => {
    setHiddenAnswersAdd(choice);
    setAnswerComplete(choice);
    setCurrentQuestionType(choice ? "주관식" : "객관식");
  };

  const handleAnswerAddButtonClick = () => {
    setAnswerInputs([...answerInputs, ""]);
  };

  const handleAnswerOptionListUpdate = (updatedInputs: string[]) => {
    setCurrentQuestionChoice(updatedInputs);
  };

  const handleAddButtonClick = () => {
    if (
      currentQuestion != "질문하고 싶은 내용을 입력하세요" &&
      answerComplete &&
      (hiddenAnswersAdd || (!hiddenAnswersAdd && answerInputs.length >= 2))
    ) {
      // Recoil state update
      setQuestions((prev) => ({
        ...prev,
        questions: [
          ...prev.questions,
          {
            context: currentQuestion,
            type: currentQuestionType,
            choices: hiddenAnswersAdd ? null : currentQuestionChoice,
          },
        ],
      }));

      // Reset current question Recoil states
      setCurrentQuestion("질문하고 싶은 내용을 입력하세요");
      setCurrentQuestionType("객관식");
      setAnswerComplete(false);
      setAnswerInputs([]);
      navigate("/querylist");
    } else {
      setPopupVisible(true);
    }
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentQuestion(e.target.value);
  };

  const handleAnswerCompleteChange = (complete: boolean) => {
    setAnswerComplete(complete);
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
  };

  return (
    <div
      className=" flex flex-col mx-auto h-full gap-10 px-5 py-8"
      style={{ width: "393px" }}
    >
      <div className="flex justify-between">
        <BackButton back page="/querylist" />
        <BackButton back={false} onClick={handleAddButtonClick} />
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-pre text-[22px] font-bold">질문 추가 작성</p>
        <Toggle onChange={handleToggleChange} />
        <div className="flex flex-col gap-2">
          <p className="font-pre text-[14px] font-bold">질문 내용</p>
          <QuestionText
            value={currentQuestion}
            onTextChange={handleQuestionChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </div>
        {!hiddenAnswersAdd && (
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-end gap-1">
              <p className="font-pre text-[14px] font-bold">답변 옵션</p>
              <p className="font-pre text-[14px] text-gray-600">
                (2개 이상 필수)
              </p>
            </div>
            <AddButton
              text="답변 옵션을 추가하세요"
              onClick={handleAnswerAddButtonClick}
            />
            <AnswerOptionList
              inputs={answerInputs}
              setInputs={setAnswerInputs}
              onCompleteChange={handleAnswerCompleteChange}
              onUpdateInputs={handleAnswerOptionListUpdate}
            />
          </div>
        )}
        {popupVisible && <PopupQuestion onClose={handlePopupClose} />}
      </div>
    </div>
  );
}
export default QueryAdd;
