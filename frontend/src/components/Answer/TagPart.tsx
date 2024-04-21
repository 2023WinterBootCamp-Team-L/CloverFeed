import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  tagsWorkDataState,
  tagsAttitudeDataState,
} from "../../../atoms/TagStore";
import Tag from "../Tag";
import ExceedPopup from "../ExceedPopup";
import { answerListState } from "../../../atoms/AnswerStore";
import { feedbackQuestionListState } from "../../../atoms/QuestionStore";
import { tagColors } from "../Tag";

interface TagPartProps {
  questionIndex: number;
}

const TagPart: React.FC<TagPartProps> = ({ questionIndex }) => {
  const tagsData =
    questionIndex === 1 ? tagsWorkDataState : tagsAttitudeDataState;
  const currentQuestionTags = useRecoilValue(tagsData);
  const [selectedTagIndexes, setSelectedTagIndexes] = useState<number[]>([]);
  const [showExceedPopup, setShowExceedPopup] = useState(false);
  const [tagTexts, setTagTexts] = useState<string[]>([]);
  const [questionList] = useRecoilState(feedbackQuestionListState);

  // Add useRecoilState for answerList
  const [answerList, setAnswerList] = useRecoilState(answerListState);

  const handleTagClick = (tagIndex: number) => {
    setSelectedTagIndexes((prevSelectedIndexes) => {
      const isSelected = prevSelectedIndexes.includes(tagIndex);
      let updatedSelectedIndexes: number[];

      if (!isSelected && prevSelectedIndexes.length < 5) {
        // 선택된 태그의 수가 5개 미만이면 해당 인덱스를 추가
        updatedSelectedIndexes = [...prevSelectedIndexes, tagIndex];
      } else if (isSelected) {
        // 선택된 태그가 해제되면 해당 인덱스를 제거
        updatedSelectedIndexes = prevSelectedIndexes.filter(
          (index) => index !== tagIndex
        );
      } else {
        // 선택된 태그의 수가 5개 이상이거나 이미 선택된 태그가 클릭되었을 때는 이전 상태 그대로 유지
        updatedSelectedIndexes = prevSelectedIndexes;
      }

      // 선택된 태그 수가 제한을 초과하는지 확인
      if (updatedSelectedIndexes.length > 5) {
        setShowExceedPopup(true);
        // 선택된 태그가 5개를 초과하면 마지막으로 추가된 태그를 제거
        updatedSelectedIndexes = updatedSelectedIndexes.slice(0, -1);
      } else {
        setShowExceedPopup(false);
      }

      // Update tagTexts state
      setTagTexts(
        updatedSelectedIndexes.map((index) => {
          const tag = currentQuestionTags.find(
            (tag) => tag.tagnumber === index
          );
          return tag ? tag.text : "";
        })
      );

      return updatedSelectedIndexes;
    });
  };

  useEffect(() => {
    if (questionIndex === 1) {
      setAnswerList((oldState) => ({
        ...oldState,
        tags_work: tagTexts,
      }));
    } else if (questionIndex === 2) {
      setAnswerList((oldState) => ({
        ...oldState,
        tags_attitude: tagTexts,
      }));
    }
  }, [tagTexts]);

  const closeExceedPopup = () => {
    setShowExceedPopup(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div
        className="flex flex-col justify-center overflow-hidden relative bg-opacity-35 px-5 min-h-screen w-full sm:w-[393px] lg:w-[393px]"
        // style={{ width: '393px', height: '852px' }}
      >
        <div className="flex-1 text-center">
          {/* 선택된 태그들만 렌더링 */}
          {currentQuestionTags.map((tag, index) => (
            <Tag
              key={tag.tagnumber}
              text={tag.text}
              color={
                selectedTagIndexes.includes(index)
                  ? tagColors[index % tagColors.length]
                  : "bg-white"
              }
              image={tag.image}
              onClick={() => handleTagClick(index)}
            />
          ))}
        </div>
        {/* 초과 팝업 렌더링 */}
        {showExceedPopup && <ExceedPopup onClose={closeExceedPopup} />}
      </div>
    </div>
  );
};

export default TagPart;
