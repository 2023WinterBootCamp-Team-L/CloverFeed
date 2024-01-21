import React, { useEffect, useState } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";

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

function LinkAnswer1() {
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

  const [questions, setQuestions] = useState<Question[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "http://localhost:8000/api/form/questions/?",
          {
            params: {
              userid: 1,
            },
          }
        );
        // const response: ApiResponse = {
        //   status: "success",
        //   questions: dummyQuestions,
        // };

        if (response.data.status === "success") {
          console.log("피드백 폼 질문");
          setQuestions(response.data.questions);
        } else {
          console.error(
            `Error: ${response.data.error_code}, ${response.data.message}`
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen ">
      <div
        className="flex flex-col justify-center items-center overflow-hidden relative border-2 border-gray-300 bg-emerald-50 "
        style={{ width: "393px", height: "852px" }}
      >
        <div className="flex justify-between w-full px-4 pt-4">
          <BackButton back page="/LinkTag2" />
          <BackButton back={false} page="/LinkAnswer2" />
        </div>
        <div>
          {questions !== undefined ? (
            <ul>
              {questions.map((question, index) => (
                <li key={index}>
                  <p>{question.context}</p>
                  <p>질문내용</p>
                  {question.choices && <p>Choices: {question.choices}</p>}
                  <p>질문 답변</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LinkAnswer1;
