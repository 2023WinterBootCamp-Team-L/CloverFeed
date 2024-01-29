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

interface TagPartProps {
  questionIndex: number;
}

const TagPart: React.FC<TagPartProps> = ({ questionIndex }) => {
  const tagsData =
    questionIndex === 1 ? tagsWorkDataState : tagsAttitudeDataState;
  const currentQuestionTags = useRecoilValue(tagsData);
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [showExceedPopup, setShowExceedPopup] = useState(false);
  const [tagTexts, setTagTexts] = useState<string[]>([]);
  const [questionList] = useRecoilState(feedbackQuestionListState);

  // Add useRecoilState for answerList
  const [answerList, setAnswerList] = useRecoilState(answerListState);

  const handleTagClick = (tagnumber: number) => {
    setSelectedTags((prevSelectedTags) => {
      const isSelected = prevSelectedTags.includes(tagnumber);

      // 선택을 토글
      let updatedSelectedTags = isSelected
        ? prevSelectedTags.filter((selectedTag) => selectedTag !== tagnumber)
        : [...prevSelectedTags, tagnumber];

      // 선택된 태그 수가 제한을 초과하는지 확인
      if (updatedSelectedTags.length > 5) {
        setShowExceedPopup(true);
        // selectedTags가 5개를 초과하면 마지막으로 추가된 태그를 제거
        updatedSelectedTags = updatedSelectedTags.slice(0, -1);
      } else {
        setShowExceedPopup(false);
      }

      // Update tagTexts state
      setTagTexts(
        updatedSelectedTags.map((tagNumber) => {
          return (
            currentQuestionTags.find((tag) => tag.tagnumber === tagNumber)
              ?.text || ""
          );
        })
      );

      return updatedSelectedTags;
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
          {/* 15개의 태그 렌더링 */}
          {currentQuestionTags.map((tag, index) => (
            <Tag
              key={index}
              text={tag.text}
              tagnumber={tag.tagnumber}
              color={
                selectedTags.length < 5 ||
                (selectedTags.length === 5 &&
                  selectedTags.includes(tag.tagnumber))
                  ? selectedTags.includes(tag.tagnumber)
                    ? "bg-white"
                    : tag.tagnumber
                  : null
              }
              image={tag.image}
              onClick={() => handleTagClick(tag.tagnumber)}
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
