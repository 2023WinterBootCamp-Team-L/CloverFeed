import React, { useState } from 'react';
import BackButton from "../components/BackButton";
import Searchbutton from "../components/Searchbutton";
import FeedbackBox from "../components/FeedbackBox";
import 돋보기 from "../assets/돋보기.svg";
import Tag from "../components/Tag";

const Search: React.FC = () => {
  const sampleTags = [
    <Tag key={1} text="개성이 뚜렷한" image={돋보기} color="bg-pink-200" />
    // ... 다른 TagProps를 원하는 만큼 추가
  ];



  const [searchValue, setSearchValue] = useState("");

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    // 검색 로직 구현
    console.log("Searching...");
  };

  return (
    <div className="flex flex-col overflow-hidden max-w-[24.56rem] mx-auto h-[53.25rem] px-5 py-8 gap-4">
      <div className="flex justify-between">
        <BackButton back page="/Linkmain" />
      </div>

      <div>
        <Searchbutton value={searchValue} onChange={handleInputChange} search={handleSearch}>
        </Searchbutton>
      </div>

      <div className="flex flex-col gap-2">
      <FeedbackBox
        title="Feedback Title"
        tags={sampleTags}
        text="This is some feedback text."
      />

        <FeedbackBox
        title="Feedback Title"
        tags={sampleTags}
        text="This is some feedback text."
      />

        <FeedbackBox
        title="Feedback Title"
        tags={sampleTags}
        text="This is some feedback text."   
      />

      <FeedbackBox
        title="Feedback Title"
        tags={sampleTags}
        text="This is some feedback text."   
      />



      </div>
      
    </div>
  );
};

export default Search;