import { useState, useEffect } from "react";
import axios from "axios";
import ChoicePart from "../../components/Answer/ChoicePart";
import ShortPart from "../../components/Answer/ShortPart";
import BackButton from "../../components/BackButton";

interface Question {
  context: string;
  type: "option" | "short";
  choices?: string;
}

interface ApiResponse {
  status: "success" | "error";
  questions?: Question[];
  error_code?: number;
  message?: string;
}

// const dummyQuestions: Question[] = [
//   {
//     context: "당신의 직무는 무엇인가요?",
//     type: "option",
//     choices: "개발자",
//   },
//   {
//     context: "님의 업무 능력 강점은 무엇인가요?",
//     type: "option",
//     choices: "박학다식",
//   },
//   {
//     context: "님의 성격 및 태도는 어떤가요?",
//     type: "option",
//     choices: "책임감",
//   },
//   {
//     context: "님에게 전하고 싶은 칭찬이 있나요?",
//     type: "short",
//   },
//   {
//     context: "님이 보완해 줬으면 하는 부분이 있나요?",
//     type: "short",
//   },
// ];

function LinkAnswer() {
  const data = {
    answerType: "주관식",
  };

  const [questions, setQuestions] = useState<Question[] | undefined>(undefined);

  const userId = 2;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          `http://localhost:8000/api/form/questions/?userid=${userId}`
        );

        // const response: ApiResponse = {
        //   status: "success",
        //   questions: dummyQuestions,
        // };

        if (response.data.status === "success") {
          console.log("피드백 질문");
          setQuestions(response.data.questions);
        } else {
          console.error(
            `폼 없음: ${response.data.error_code}, ${response.data.message}`
          );
        }
      } catch (error) {
        console.error("API 요청 중 에러:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="flex flex-col justify-center items-center overflow-hidden relative border-2 border-gray-300 bg-emerald-50 "
        style={{ width: "393px", height: "852px" }}
      >
        <div className="flex justify-between w-full px-4 pt-4">
          <BackButton back page="/LinkOpti" />
          <BackButton back={false} page="/check" />
        </div>
        <div className="flex-col flex-full justify-between pt-12 pb-12">
          <p className="text-left font-Preahvihear text-24 text-xl font-normal font-weight-400 ">
            XXX님에게 전하고 싶은 칭찬이 있나요? {/*Question*/}
          </p>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center">
          {data.answerType === "객관식" && <ChoicePart />}
          {data.answerType === "주관식" && <ShortPart />}
        </div>
      </div>
    </div>
  );
}

export default LinkAnswer;
