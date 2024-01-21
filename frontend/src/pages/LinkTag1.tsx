import { useState } from "react";
import BackButton from "../components/BackButton";
// import ExceedPopup from "../components/ExceedPopup";
import Tag from "../components/Tag";

interface TagProps {
  text: string;
  color: string;
  image: string;
}

function LinkTag1() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagClick = (tag: string) => {
    const isSelected = selectedTags.includes(tag);

    setSelectedTags((prevSelectedTags) =>
      isSelected
        ? prevSelectedTags.filter((selectedTag) => selectedTag !== tag)
        : [...prevSelectedTags, tag]
    );
  };

  // 태그에 사용될 데이터 배열
  const tagsData: TagProps[] = [
    {
      text: "효율적인",
      color: "bg-[#EEEFF0]",
      image: "../assets/TagIcon/효율적인.svg",
    },
    {
      text: "박학다식",
      color: "bg-[#EEEFF0]",
      image: "../assets/TagIcon/박학다식.svg",
    },
    {
      text: "문제분석",
      color: "bg-[#EEEFF0]",
      image: "../assets/TagIcon/문제분석.svg",
    },
    {
      text: "계획적인",
      color: "bg-[#EEEFF0]",
      image: "../assets/TagIcon/계획적인.svg",
    },
    {
      text: "기획력",
      color: "bg-[#EEEFF0]",
      image: "../assets/TagIcon/기획력.svg",
    },
    {
      text: "눈치빠른",
      color: "bg-[#EEEFF0]",
      image: "../assets/TagIcon/눈치빠른.svg",
    },
    {
      text: "규칙준수",
      color: "bg-[#EEEFF0]",
      image: "../assets/TagIcon/규칙준수.svg",
    },
    {
      text: "위기대처 능력",
      color: "bg-[#EEEFF0]",
      image: "../assets/TagIcon/위기대처능력.svg",
    },
    {
      text: "리더쉽",
      color: "bg-[#EEEFF0]",
      image: "../assets/TagIcon/리더쉽.svg",
    },
    {
      text: "정보수집",
      color: "bg-[#EEEFF0]",
      image: "../assets/TagIcon/정보수집.svg",
    },
    {
      text: "의견 다양성",
      color: "bg-[#EEEFF0]",
      image: "../assets/TagIcon/의견다양성.svg",
    },
    {
      text: "추진력",
      color: "bg-[#EEEFF0]",
      image: "../assets/TagIcon/추진력.svg",
    },
    {
      text: "전략적인",
      color: "bg-[#EEEFF0]",
      image: "../assets/TagIcon/전략적인.svg",
    },
    {
      text: "결단력",
      color: "bg-[#EEEFF0]",
      image: "../assets/TagIcon/결단력.svg",
    },
    {
      text: "협력적인",
      color: "bg-[#EEEFF0]",
      image: "../assets/TagIcon/협력적인.svg",
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen ">
      <div
        className="flex flex-col justify-center overflow-hidden relative border-2 bg-c-emerald bg-opacity-40 px-5 py-8 gap-10"
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
              color={tag.color}
              image={tag.image}
              onClick={() => handleTagClick(tag.text)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LinkTag1;
