import Question from "./Question";
import { useAtom } from "jotai";
import { questionListAtom } from "../atom/questionListAtom";

const QuestionList = () => {
  const [questionList, setQuestionList] = useAtom(questionListAtom);

  const onInputChange = (index: number) => (value: string) => {
    const newQuestionList = [...questionList];
    newQuestionList[index] = value;
    setQuestionList(newQuestionList);
  };

  return (
    <div className="space-y-1.5">
      {questionList.map((question, index) => (
        <Question
          key={index}
          value={question}
          onTextChange={(e) => onInputChange(index)(e.target.value)}
        />
      ))}
    </div>
  );
};

export default QuestionList;
