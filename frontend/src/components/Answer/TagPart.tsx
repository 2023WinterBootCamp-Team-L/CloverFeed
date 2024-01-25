import { useState } from "react";
import BackButton from "../BackButton";
import Tag from "../Tag";
import ExceedPopup from "../ExceedPopup";

interface TagProps {
  text: string;
  image: string;
  tagnumber: number;
}

const TagPart: React.FC = () => {
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
  const tagsData: TagProps[] = [
    {
      text: "효율적인",
      image: "../src/assets/효율적인.png",
      tagnumber: 1,
    },
    {
      text: "박학다식",
      image: "../src/assets/박학다식.png",
      tagnumber: 2,
    },
    {
      text: "문제분석",
      image: "../src/assets/문제분석.png",
      tagnumber: 3,
    },
    {
      text: "계획적인",
      image: "../src/assets/계획적인.png",
      tagnumber: 4,
    },
    {
      text: "기획력",
      image: "../src/assets/기획력.png",
      tagnumber: 5,
    },
    {
      text: "눈치빠른",
      image: "../src/assets/눈치빠른.png",
      tagnumber: 6,
    },
    {
      text: "규칙준수",
      image: "../src/assets/규칙준수.png",
      tagnumber: 7,
    },
    {
      text: "위기대처 능력",
      image: "../src/assets/위기대처능력.png",
      tagnumber: 8,
    },
    {
      text: "리더쉽",
      image: "../src/assets/리더쉽.png",
      tagnumber: 9,
    },
    {
      text: "정보수집",
      image: "../src/assets/정보수집.png",
      tagnumber: 10,
    },
    {
      text: "의견 다양성",
      image: "../src/assets/의견다양성.png",
      tagnumber: 11,
    },
    {
      text: "추진력",
      image: "../src/assets/추진력.png",
      tagnumber: 12,
    },
    {
      text: "전략적인",
      image: "../src/assets/전략적인.png",
      tagnumber: 13,
    },
    {
      text: "결단력",
      image: "../src/assets/결단력.png",
      tagnumber: 14,
    },
    {
      text: "협력적인",
      image: "../src/assets/협력적인.png",
      tagnumber: 15,
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div
        className="flex flex-col justify-center overflow-hidden relative bg-c-emerald bg-opacity-35 px-5 py-8 gap-10 min-h-screen w-full sm:w-[393px] lg:w-[393px]"
        // style={{ width: '393px', height: '852px' }}
      >
        <div className="flex justify-between w-full">
          <BackButton back page="/LinkPosition" />
          <BackButton back={false} page="/LinkTag2" />
        </div>
        <div className="flex-full">
          <p className="font-pre text-[22px] font-bold text-center">
            당신이 생각하는 XXX 님의
          </p>
          <p className="font-pre text-[22px] font-bold text-center">
            업무 능력 강점은 무엇인가요?
          </p>
          <p className="font-pre text-[14px] text-gray-400 text-center">
            키워드를 최대 5개까지 선택해주세요.
          </p>
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
