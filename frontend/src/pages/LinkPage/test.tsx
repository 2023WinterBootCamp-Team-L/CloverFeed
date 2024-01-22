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
</div>;
