import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ChoicePart from "../components/Answer/ChoicePart";
import ShortPart from "../components/Answer/ShortPart";
import BackButton from "../components/BackButton";
import {
  QuestionList,
  feedbackQuestionListState,
} from "../../atoms/QuestionStore";
import { useRecoilState } from "recoil";

interface ApiResponse {
  status: "success" | "error";
  questions?: QuestionList;
  error_code?: number;
  message?: string;
}

function LinkAnswer() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useRecoilState(feedbackQuestionListState);
  const backNavigate = useNavigate();
  const nextNavigate = useNavigate();
  const userId = 2;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          `http://localhost:8000/api/form/questions/?userid=${userId}`
        );

        if (response.data.status === "success") {
          console.log("피드백 질문");
          console.log(response); // 전체 응답 콘솔에 기록

          // 데이터 업데이트
          setQuestions((prevQuestions) => ({
            ...prevQuestions,
            questions: response.data.questions || [],
          }));
        } else {
          console.error(
            `폼 없음: ${response.data.error_code}, ${response.data.message}`
          );
        }
      } catch (error) {
        console.error("API 요청 중 에러:", error);
      }
    };

    // Recoil 상태를 초기화하는 대신, 데이터가 비어 있을 때만 API 요청
    if (!questions.questions || questions.questions.length === 0) {
      fetchData();
    }
  }, [userId, questions, setQuestions]);

  const handleBackButtonClick = () => {
    if (currentQuestionIndex > 0) {
      // 다음 질문으로 이동
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    } else {
      // 마지막 질문이면 "/check" 페이지로 이동
      backNavigate("/LinkTag2");
    }
  };

  const handleNextButtonClick = () => {
    if (currentQuestionIndex < questions.questions.length - 1) {
      // 다음 질문으로 이동
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      // 마지막 질문이면 "/check" 페이지로 이동
      nextNavigate("/check");
    }
  };

  const currentQuestion = questions.questions
    ? questions.questions[currentQuestionIndex]
    : undefined;

  return (
    <div
      className="bg-c-emerald bg-opacity-35 flex flex-col mx-auto h-screen gap-20 px-5 py-8"
      style={{ width: "393px" }}
    >
      <div className="flex justify-between">
        <BackButton back onClick={handleBackButtonClick} />
        <BackButton back={false} onClick={handleNextButtonClick} />
      </div>
      <div className="flex flex-col items-center gap-20">
        <p className="font-pre text-[22px] font-bold text-center overflow-hidden line-clamp-2">
          {currentQuestion?.context}
        </p>
        {currentQuestion?.type === "객관식" && (
          <ChoicePart questionIndex={currentQuestionIndex} />
        )}
        {currentQuestion?.type === "주관식" && (
          <ShortPart questionIndex={currentQuestionIndex} />
        )}
      </div>
    </div>
  );
}

export default LinkAnswer;
