import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Searchbutton from "../components/Searchbutton";
import FeedbackBox from "../components/FeedbackBox";
import pmpo from "../assets/PMPO.svg";
import TagAnswer from "../components/TagAnswer";

const Search: React.FC = () => {
  const sampleTags = [
    <TagAnswer key={1} text="책임감" image={pmpo} />,
    <TagAnswer key={2} text="기획력" image={pmpo} />,
    <TagAnswer key={3} text="관대한" image={pmpo} />,
  ];

  const [searchValue, setSearchValue] = useState("");

  const feedbacks = [
    {
      title: "#2356 디자이너님의 피드백",
      tags: sampleTags,
      text: "매사에 책임을 가지며 맡은 업무를 끝까지 해내는 모습이 인상깊었어요. 업무에 관해 알고 있는 지식들도 많고 팀원들의 의견도 하나하나 잘 들어주었습니다..",
    },
    {
      title: "#1238 개발자님의 피드백",
      tags: sampleTags,
      text: "리더십 있는 모습과 팀원을 배려하는 모습만으로도 충분히 좋은 팀원있지만, 아이디어 회의 때 다양한 아이디어를 제시해주는 모습까지 있다면 더 좋을 것 같습니다.",
    },
    {
      title: "#6583 기획자님의 피드백",
      tags: sampleTags,
      text: "항상 긍정적인 마인드로 팀 분위기를 활기차게 만들어주는 분위기 메이커입니다.",
    },
    {
      title: "#8467 개발자님의 피드백",
      tags: sampleTags,
      text: "팀원들과 적극적으로 교류하며 팀 프로젝트를 진행한 결과 함께 성장할 수 있어서 좋았습니다.",
    },
  ];

  const [filteredFeedbacks, setFilteredFeedbacks] = useState<JSX.Element[]>(
    feedbacks.map((feedback, index) => (
      <FeedbackBox
        key={index}
        title={feedback.title}
        tags={feedback.tags}
        index={index}
      />
    ))
  );

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching...");

    const filtered =
      searchValue.trim() !== ""
        ? feedbacks.filter((feedback) =>
            feedback.text?.toLowerCase().includes(searchValue.toLowerCase())
          )
        : feedbacks;

    setFilteredFeedbacks(
      filtered.map((feedback, index) => (
        <FeedbackBox
          key={index}
          title={feedback.title}
          tags={feedback.tags}
          text={searchValue.trim() !== "" ? feedback.text : undefined}
          index={index}
        />
      ))
    );
  };

  return (
    <div className="flex flex-col overflow-hidden max-w-[24.56rem] mx-auto h-[53.25rem] px-5 py-8 gap-4">
      <div className="flex justify-between">
        <BackButton back page="/mainpage" />
      </div>

      <div>
        <Searchbutton
          value={searchValue}
          onChange={handleInputChange}
          onEnter={handleSearch}
        ></Searchbutton>
      </div>
      <div className="flex flex-col gap-2">{filteredFeedbacks}</div>
    </div>
  );
};

export default Search;
