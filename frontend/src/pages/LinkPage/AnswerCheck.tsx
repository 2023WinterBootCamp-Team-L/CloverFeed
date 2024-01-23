import { useRecoilValue } from "recoil";
import { answerListState } from "../../components/Answer/AnswerStore";

function AnswerCheck() {
  // AnswerList을 가져오기
  const answerList = useRecoilValue(answerListState);

  return (
    <div>
      <h2>저장된 답변 목록</h2>
      <ul>
        {answerList.answers.map((answer, index) => (
          <li key={index}>
            <p>Type:{answer.type}</p>
            <p>Answer: {answer.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnswerCheck;
