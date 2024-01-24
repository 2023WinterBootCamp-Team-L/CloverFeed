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
      image: "../assets/TagIcon/책임감.svg",
    },
    {
      text: "공감능력",
      color: "bg-white",
      image: "../assets/TagIcon/공감능력.svg",
    },
    {
      text: "배려심",
      color: "bg-white",
      image: "../assets/TagIcon/배려심.svg",
    },
    {
      text: "성실함",
      color: "bg-white",
      image: "../assets/TagIcon/성실함.svg",
    },
    {
      text: "적극적인",
      color: "bg-white",
      image: "../assets/TagIcon/적극적인.svg",
    },
    {
      text: "꼼꼼함",
      color: "bg-white",
      image: "../assets/TagIcon/꼼꼼함.svg",
    },
    {
      text: "분위기 메이커",
      color: "bg-white",
      image: "../assets/TagIcon/분위기메이커.svg",
    },
    {
      text: "주도적인",
      color: "bg-white",
      image: "../assets/TagIcon/주도적인.svg",
    },
    {
      text: "센스있는",
      color: "bg-white",
      image: "../assets/TagIcon/센스있는.svg",
    },
    {
      text: "긍정적인",
      color: "bg-white",
      image: "../assets/TagIcon/긍정적인.svg",
    },
    {
      text: "사교성이 좋은",
      color: "bg-white",
      image: "../assets/TagIcon/사교성이좋은.svg",
    },
    {
      text: "관대한",
      color: "bg-white",
      image: "../assets/TagIcon/관대한.svg",
    },
    {
      text: "경청하는",
      color: "bg-white",
      image: "../assets/TagIcon/경청하는.svg",
    },
    {
      text: "도전적인",
      color: "bg-white",
      image: "../assets/TagIcon/도전적인.svg",
    },
    {
      text: "끈기",
      color: "bg-white",
      image: "../assets/TagIcon/끈기.svg",
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
