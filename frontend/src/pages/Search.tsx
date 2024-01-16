import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Searchbutton from "../components/Searchbutton";
import FeedbackBox from "../components/FeedbackBox";
import 돋보기 from "../assets/돋보기.svg";
import Tag from "../components/Tag";

const Search: React.FC = () => {
  const sampleTags = [
    <Tag key={1} text="개성이 뚜렷한" image={돋보기} color="bg-c-yellow" />,
    // ... 다른 TagProps를 원하는 만큼 추가
  ];

  const [searchValue, setSearchValue] = useState("");

  const feedbacks = [
    {
      title: "Feedback Title",
      tags: sampleTags,
      text: "This is all feedback text.",
    },
    {
      title: "Feedback Title",
      tags: sampleTags,
      text: "This is some feedback text.",
    },
    {
      title: "Feedback Title",
      tags: sampleTags,
      text: "This is few feedback text.",
    },
    {
      title: "Feedback Title",
      tags: sampleTags,
      text: "This is none feedback text.",
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
        ? feedbacks.filter(
            (feedback) =>
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
        <BackButton back page="/Linkmain" />
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
