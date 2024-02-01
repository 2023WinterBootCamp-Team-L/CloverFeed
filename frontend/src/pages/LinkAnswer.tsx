import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ChoicePart from "../components/Answer/ChoicePart";
import ShortPart from "../components/Answer/ShortPart";
import CategoryPart from "../components/Answer/CategoryPart";
import BackButton from "../components/BackButton";
import { feedbackQuestionListState } from "../../atoms/QuestionStore";
import { useRecoilState } from "recoil";
import ProgressBar from "../components/ProgressBar";
import { answerListState } from "../../atoms/AnswerStore";
import TagPart from "../components/Answer/TagPart";
import { atom } from "recoil";
import axios from "axios";
import Modal from "../components/Modal";

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
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };

  const handleBackButtonClick = () => {
    if (currentQuestionIndex > 0) {
      // 이전 질문으로 이동
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    } else {
      // 처음 질문이면 "/check" 페이지로 이동
      backNavigate("/LinkStart");
    }
  };

  const handleNextButtonClick = async () => {
    if (currentQuestionIndex < questions.questions.length - 1) {
      // 다음 질문으로 이동
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      console.log(answerList);
    } else {
      // 마지막 질문의 경우
      // 로딩 모달 열기
      toggle();

      const feedApiUrl = "https://cloverfeed.kr/api/answers/";
      const gptApiUrl = "https://cloverfeed.kr/api/feedbacks/summary/";

      // POST 요청할 데이터
      const postData = {
        form_id: answerList[0].form_id,
        category: answerList[0].category,
        tags_work: answerList[0].tags_work,
        tags_attitude: answerList[0].tags_attitude,
        answers: answerList[0].answers,
      };

      // 답변이 있는지 확인
      if (answerList && answerList[0].answers.length > 0) {
        try {
          const response = await axios.post(feedApiUrl, postData);
          console.log("답변 제출");
          console.log(response.data);
        } catch (error) {
          // 필요한 경우 에러 처리
          console.error("폼 없음", error);
        }

        try {
          const storedUserid = localStorage.getItem("author_id");

          // axios를 사용해 POST 요청 보내기
          const response = await axios.post(gptApiUrl, {
            user_id: storedUserid,
          });

          // API 응답이 성공인 경우 요약 정보를 상태 변수에 저장
          if (response.data.status === "success") {
            console.log("요약 생성 요청 전송 성공");
          } else {
            // API 응답이 실패인 경우 에러 메시지 출력
            console.error("데이터 없음:", response.data.status);
          }
        } catch (error) {
          // 비동기 함수 실행 중 발생한 에러 처리
          console.error("API 요청 실패:", error);
        }
      }

      localStorage.setItem("author_id", "0");

      toggle();
      nextNavigate("/LinkFinish");
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

  const totalSteps = questions.questions.length;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="flex flex-col overflow-hidden relative bg-c-emerald bg-opacity-35 px-5 py-8 gap-20 min-h-screen w-full sm:w-[393px] lg:w-[393px]"
        // style={{ width: '393px', height: '852px' }}
      >
        <div className="flex flex-row items-center justify-between w-full">
          <BackButton back onClick={handleBackButtonClick} />
          <ProgressBar
            totalSteps={totalSteps}
            currentIndex={currentQuestionIndex + 1}
          />
          <BackButton back={false} onClick={handleNextButtonClick} />
        </div>
        <div className="flex flex-col items-center gap-20">
          <div className="flex-full">
            <p
              className="font-pre text-[22px] font-bold text-center px-10 "
              style={{ wordBreak: "keep-all" }}
            >
              {currentQuestion?.context}
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
      <Modal isOpen={isOpen} toggle={toggle}>
        <div className="flex flex-col items-center gap-3">
          <p className="font-pre text-[16px] font-bold">
            답변이 제출 중입니다.
          </p>
          <p className="font-pre text-[16px] font-bold">잠시만 기다려주세요.</p>
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] mt-2"
            role="status"
          ></div>
        </div>
      </Modal>
    </div>
  );
}

export default LinkAnswer;
