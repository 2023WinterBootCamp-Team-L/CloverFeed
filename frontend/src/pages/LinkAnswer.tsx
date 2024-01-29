import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChoicePart from "../components/Answer/ChoicePart";
import ShortPart from "../components/Answer/ShortPart";
import CategoryPart from "../components/Answer/CategoryPart";
import BackButton from "../components/BackButton";
import { feedbackQuestionListState } from "../../atoms/QuestionStore";
import { useRecoilState } from "recoil";
import { answerListState } from "../../atoms/AnswerStore";
import TagPart from "../components/Answer/TagPart";
import { atom } from "recoil";
// import { selectedTagsState } from "../../atoms/AnswerStore";

export const currentQuestionIndexState = atom<number>({
  key: "currentQuestionIndexState",
  default: 0,
});

function LinkAnswer() {
  // const [selectedTags, setSelectedTags] = useRecoilState(selectedTagsState);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions] = useRecoilState(feedbackQuestionListState);
  const answerList = useRecoilState(answerListState);
  const backNavigate = useNavigate();
  const nextNavigate = useNavigate();

  const handleBackButtonClick = () => {
    if (currentQuestionIndex > 0) {
      // 이전 질문으로 이동
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    } else {
      // 처음 질문이면 "/check" 페이지로 이동
      backNavigate("/LinkStart");
    }
  };

  const handleNextButtonClick = () => {
    if (currentQuestionIndex < questions.questions.length - 1) {
      // 다음 질문으로 이동
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      console.log(answerList);
    } else {
      // 마지막 질문이면 "/check" 페이지로 이동
      nextNavigate("/check");
    }
  };

  useEffect(() => {
    console.log("답변 목록");
    console.log(answerList);
  }, [answerList]);

  // console.log(currentQuestionIndex + "번 문제");

  const currentQuestion = questions.questions
    ? questions.questions[currentQuestionIndex]
    : undefined;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="flex flex-col overflow-hidden relative bg-c-emerald bg-opacity-35 px-5 py-8 gap-20 min-h-screen w-full sm:w-[393px] lg:w-[393px]"
        // style={{ width: '393px', height: '852px' }}
      >
        <div className="flex justify-between w-full">
          <BackButton back onClick={handleBackButtonClick} />
          <BackButton back={false} onClick={handleNextButtonClick} />
        </div>
        <div className="flex flex-col items-center gap-20">
          <div className="flex-full">
            <p className="font-pre text-[22px] font-bold text-center px-10">
              {currentQuestion?.context}
            </p>
            <p className="font-pre text-[14px] text-gray-400 text-center">
              키워드를 최대 5개까지 선택해주세요.
            </p>
          </div>
          <div className="flex flex-1 flex-col justify-center items-center">
            {currentQuestion &&
              currentQuestion.context === "당신의 포지션을 선택해주세요." && (
                <CategoryPart questionIndex={currentQuestionIndex} /> // 질문 목록 인덱스
              )}
            {currentQuestionIndex === 1 && (
              <>
                {currentQuestion?.type === "객관식" && (
                  <TagPart questionIndex={currentQuestionIndex} />
                )}
              </>
            )}
            {currentQuestionIndex === 2 && (
              <>
                {currentQuestion?.type === "객관식" && (
                  <TagPart questionIndex={currentQuestionIndex} />
                )}
              </>
            )}
            {currentQuestionIndex >= 3 && (
              <>
                {currentQuestion?.type === "객관식" && (
                  <ChoicePart questionIndex={currentQuestionIndex} />
                )}
                {currentQuestion?.type === "주관식" && (
                  <ShortPart questionIndex={currentQuestionIndex} />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkAnswer;
