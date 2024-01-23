import { useRecoilState } from "recoil";
import { answerListState } from "../../../atoms/AnswerStore";

function AnswerCheck() {
  const [answerList] = useRecoilState(answerListState);

  return (
    <div>
      <div>
        <h2>저장된 답변 목록</h2>
        <ul>
          {answerList.answers.map((answer, index) => (
            <li key={index}>
              <p>Context: {answer.context}</p>
              <p>Type: {answer.type}</p>
              <p>Answer: {answer.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AnswerCheck;
