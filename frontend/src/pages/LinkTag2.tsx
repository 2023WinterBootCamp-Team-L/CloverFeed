import { useState } from "react";
import BackButton from "../components/BackButton";
// import ExceedPopup from "../components/ExceedPopup";
import Tag from "../components/Tag";

interface TagProps {
  text: string;
  color: string;
  image: string;
}

function LinkTag2() {
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
      text: "책임감",
      color: "bg-white",
      image: "../src/assets/책임감.png",
    },
    {
      text: "공감능력",
      color: "bg-white",
      image: "../src/assets/공감능력.png",
    },
    {
      text: "배려심",
      color: "bg-white",
      image: "../src/assets/배려심.png",
    },
    {
      text: "성실함",
      color: "bg-white",
      image: "../src/assets/성실함.png",
    },
    {
      text: "적극적인",
      color: "bg-white",
      image: "../src/assets/적극적인.png",
    },
    {
      text: "꼼꼼함",
      color: "bg-white",
      image: "../src/assets/꼼꼼함.png",
    },
    {
      text: "분위기 메이커",
      color: "bg-white",
      image: "../src/assets/분위기메이커.png",
    },
    {
      text: "주도적인",
      color: "bg-white",
      image: "../src/assets/주도적인.png",
    },
    {
      text: "센스있는",
      color: "bg-white",
      image: "../src/assets/센스있는.png",
    },
    {
      text: "긍정적인",
      color: "bg-white",
      image: "../src/assets/긍정적인.png",
    },
    {
      text: "사교성이 좋은",
      color: "bg-white",
      image: "../src/assets/사교성이좋은.png",
    },
    {
      text: "관대한",
      color: "bg-white",
      image: "../src/assets/관대한.png",
    },
    {
      text: "경청하는",
      color: "bg-white",
      image: "../src/assets/경청하는.png",
    },
    {
      text: "도전적인",
      color: "bg-white",
      image: "../src/assets/도전적인.png",
    },
    {
      text: "끈기",
      color: "bg-white",
      image: "../src/assets/끈기.png",
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="flex flex-col justify-center overflow-hidden relative bg-c-emerald bg-opacity-35 px-5 py-8 gap-10"
        style={{ width: "393px", height: "852px" }}
      >
        <div className="flex justify-between w-full">
          <BackButton back page="/LinkTag1" />
          <BackButton back={false} page="/LinkAnswer" />
        </div>
        <div className="flex-full">
          <p className="font-pre text-[22px] font-bold text-center">
            당신이 생각하는 XXX 님의
          </p>
          <p className="font-pre text-[22px] font-bold text-center">
            성격 및 태도는 어떤가요?
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

export default LinkTag2;
