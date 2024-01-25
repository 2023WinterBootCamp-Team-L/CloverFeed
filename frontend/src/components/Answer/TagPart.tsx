import { useState } from "react";
// import BackButton from "../BackButton";
import Tag from "../Tag";
import ExceedPopup from "../ExceedPopup";
import { useRecoilValue } from "recoil";
import { tagsDataState } from "../../../atoms/TagStore";
// import { useRecoilState, useSetRecoilState } from "recoil";

interface TagPartProps {
  questionIndex: number;
}

const TagPart: React.FC<TagPartProps> = () => {
  const tagsData = useRecoilValue(tagsDataState);
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [showExceedPopup, setShowExceedPopup] = useState(false);

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

      return updatedSelectedTags;
    });
  };

  const closeExceedPopup = () => {
    setShowExceedPopup(false);
  };

  // 태그에 사용될 데이터 배열

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div
        className="flex flex-col justify-center overflow-hidden relative bg-c-emerald bg-opacity-35 px-5 py-8 gap-10 min-h-screen w-full sm:w-[393px] lg:w-[393px]"
        // style={{ width: '393px', height: '852px' }}
      >
        {/* <div className="flex justify-between w-full">
          <BackButton back page="/LinkPosition" />
          <BackButton back={false} page="/LinkTag2" />
        </div> */}
        <div className="flex-full">
          {/* <p className="font-pre text-[22px] font-bold text-center">
            당신이 생각하는 XXX 님의
          </p>
          <p className="font-pre text-[22px] font-bold text-center">
            업무 능력 강점은 무엇인가요?
          </p>
          <p className="font-pre text-[14px] text-gray-400 text-center">
            키워드를 최대 5개까지 선택해주세요.
          </p> */}
        </div>
        <div className="flex-1 text-center">
          {/* 15개의 태그 렌더링 */}
          {tagsData.map((tag, index) => (
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
