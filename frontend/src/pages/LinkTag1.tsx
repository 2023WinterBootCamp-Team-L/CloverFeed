import { useState } from "react";
import BackButton from "../components/BackButton";
import Tag from "../components/Tag";
import { tagColors } from "../components/Tag";
import ExceedPopup from "../components/ExceedPopup";

interface TagProps {
  text: string;
  image: string;
  currentIndex?: number;
}

// function LinkTag1() {
//   const [selectedTags, setSelectedTags] = useState<string[]>([]);

//   const handleTagClick = (tag: string) => {
//     const isSelected = selectedTags.includes(tag);

//     setSelectedTags((prevSelectedTags) =>
//       isSelected
//         ? prevSelectedTags.filter((selectedTag) => selectedTag !== tag)
//         : [...prevSelectedTags, tag]
//     );
//   };

const LinkTag1: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showExceedPopup, setShowExceedPopup] = useState(false);

  const handleTagClick = (index: number) => {
    if (selectedTags.length < 5 || selectedTags.includes(index.toString())) {
      // 5개 미만이거나 이미 선택된 태그라면 선택 허용
      const isSelected = selectedTags.includes(index.toString());

      setSelectedTags((prevSelectedTags) =>
        isSelected
          ? prevSelectedTags.filter(
              (selectedTag) => selectedTag !== index.toString()
            )
          : [...prevSelectedTags, index.toString()]
      );
      // 태그 선택 개수 체크
      if (selectedTags.length >= 5 && !isSelected) {
        setShowExceedPopup(true);
      }
    } else {
      // 5개 이상이면 초과 팝업 띄우기
      setShowExceedPopup(true);
    }
  };

  const closeExceedPopup = () => {
    setShowExceedPopup(false);
  };

  // 태그에 사용될 데이터 배열
  const tagsData: TagProps[] = [
    {
      text: "효율적인",
      image: "../src/assets/효율적인.png",
    },
    {
      text: "박학다식",
      image: "../src/assets/박학다식.png",
    },
    {
      text: "문제분석",
      image: "../src/assets/문제분석.png",
    },
    {
      text: "계획적인",
      image: "../src/assets/계획적인.png",
    },
    {
      text: "기획력",
      image: "../src/assets/기획력.png",
    },
    {
      text: "눈치빠른",
      image: "../src/assets/눈치빠른.png",
    },
    {
      text: "규칙준수",
      image: "../src/assets/규칙준수.png",
    },
    {
      text: "위기대처 능력",
      image: "../src/assets/위기대처능력.png",
    },
    {
      text: "리더쉽",
      image: "../src/assets/리더쉽.png",
    },
    {
      text: "정보수집",
      image: "../src/assets/정보수집.png",
    },
    {
      text: "의견 다양성",
      image: "../src/assets/의견다양성.png",
    },
    {
      text: "추진력",
      image: "../src/assets/추진력.png",
    },
    {
      text: "전략적인",
      image: "../src/assets/전략적인.png",
    },
    {
      text: "결단력",
      image: "../src/assets/결단력.png",
    },
    {
      text: "협력적인",
      image: "../src/assets/협력적인.png",
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen ">
      <div
        className="flex flex-col justify-center overflow-hidden relative bg-c-emerald bg-opacity-35 px-5 py-8 gap-10"
        style={{ width: "393px", height: "852px" }}
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
              color={
                selectedTags.includes(tag.text)
                  ? tagColors[selectedTags.indexOf(tag.text)].bg
                  : "bg-white"
              }
              image={tag.image}
              currentIndex={index}
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

export default LinkTag1;
