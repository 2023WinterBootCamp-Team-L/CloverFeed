import BackButton from "../components/BackButton";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { Answer, selectedAnswerState } from "../components/Answer/AnswerStore";

function LinkOpti() {
  const [selectedAnswer, setSelectedAnswer] =
    useRecoilState(selectedAnswerState);
  const [selectedButton, setSelectedButton] = useState("");

  const handleButtonClick = (buttonText: string) => {
    setSelectedButton(buttonText);
    const newAnswer: Answer = {
      type: "option",
      content: buttonText,
    };
    setSelectedAnswer(newAnswer);
  };

  useEffect(() => {
    // Recoil 상태 변경 후 추가적인 작업이 필요하면 이곳에 작성
  }, [selectedAnswer]);

  return (
    <div className="flex justify-center items-center h-screen ">
      <div
        className="flex flex-col justify-center items-center overflow-hidden relative border-2 rounded-lg bg-emerald-50 "
        style={{ width: "393px", height: "852px" }}
      >
        <div className="flex justify-between w-full px-4 pt-4">
          <BackButton back page="/LinkAnswer2" />
          <BackButton back={false} page="/LinkFinish" />
        </div>
        <div className="flex-col flex-full justify-between pt-12 pb-12">
          <p className="text-left font-Preahvihear text-24 text-xl font-normal font-weight-400 ">
            나의 성과에 대해
          </p>
          <p className="text-left font-Preahvihear text-24 text-xl font-normal font-weight-400 ">
            평가해주세요
          </p>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center">
          <button
            className={`w-80 h-[70px] font-Preahvihear text-24 text-xl font-normal rounded-xl border-2 mb-12 ${
              selectedButton === "1점"
                ? "border-[#E2E9FF] bg-[#E2E9FF]"
                : "border-[#E2E9FF] bg-white hover:border-[#E2E9FF] hover:bg-[#E2E9FF]"
            }`}
            onClick={() => handleButtonClick("1점")}
          >
            1점
          </button>
          <button
            className={`w-80 h-[70px] font-Preahvihear text-24 text-xl font-normal rounded-xl border-2 mb-12 ${
              selectedButton === "2점"
                ? "border-[#E2E9FF] bg-[#E2E9FF]"
                : "border-[#E2E9FF] bg-white hover:border-[#E2E9FF] hover:bg-[#E2E9FF]"
            }`}
            onClick={() => handleButtonClick("2점")}
          >
            2점
          </button>
          <button
            className={`w-80 h-[70px] font-Preahvihear text-24 text-xl font-normal rounded-xl border-2 mb-12 ${
              selectedButton === "3점"
                ? "border-[#E2E9FF] bg-[#E2E9FF]"
                : "border-[#E2E9FF] bg-white hover:border-[#E2E9FF] hover:bg-[#E2E9FF]"
            }`}
            onClick={() => handleButtonClick("3점")}
          >
            3점
          </button>
          <button
            className={`w-80 h-[70px] font-Preahvihear text-24 text-xl font-normal rounded-xl border-2 mb-12 ${
              selectedButton === "4점"
                ? "border-[#E2E9FF] bg-[#E2E9FF]"
                : "border-[#E2E9FF] bg-white hover:border-[#E2E9FF] hover:bg-[#E2E9FF]"
            }`}
            onClick={() => handleButtonClick("4점")}
          >
            4점
          </button>
        </div>
      </div>
    </div>
  );
}

export default LinkOpti;
