import React, { useState } from 'react';
import BackButton from "../components/BackButton";
import Searchbutton from "../components/Searchbutton";
import FeedList from "../components/FeedList";


const Search: React.FC = () => {
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
     
      <FeedList value="asdsdfffffffffffffffffffffffffffasf" />q
      <FeedList value="asdsdfffffffffffffffffffffffffffasf" />
      <FeedList value="asdsdfffffffffffffffffffffffffffasf" />
      <FeedList value="asdsdfffffffffffffffffffffffffffasf" />
      <FeedList value="asdsdfffffffffffffffffffffffffffasf" />
      </div>
    </div>
  );
};

export default Search;