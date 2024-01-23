import { useRecoilState } from "recoil";
import { answerListState } from "../../components/Answer/AnswerStore";
import { questionListState } from "../../components/Question/QuestionStore";

function AnswerCheck() {
  // AnswerList 가져오기
  const [answerList] = useRecoilState(answerListState);
  const [questionList] = useRecoilState(questionListState);

  return (
    <div>
      <div>
        <h2>저장된 답변 목록</h2>
        <ul>
          {answerList.answers.map((answer, index) => (
            <li key={index}>
              <p>Type: {answer.type}</p>
              <p>Answer: {answer.answer}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>저장된 질문 목록</h2>
        <ul>
          {questionList.questions.map((question, index) => (
            <li key={index}>
              <p>Content: {question.content}</p>
              <p>Type: {question.type}</p>
              <p>Choice: {question.choice}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AnswerCheck;
