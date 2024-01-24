import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Searchbutton from "../components/Searchbutton";
import FeedbackBox from "../components/FeedbackBox";
import axios from "axios";

interface Feedback {
  title: string;
  tags: JSX.Element[];
  text: string;
}

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredFeedbacks, setFilteredFeedbacks] = useState<JSX.Element[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [userId, setUserId] = useState("");

  useEffect(() => {
    const storedUserId = localStorage.getItem("user_id");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/feedbacks/response/?user_id=${userId}&keyword=${searchValue}`
      );

      if (response.data.status === "success") {
        const feedbacks = response.data.feedbacks;
        const filteredFeedbackElements = feedbacks.map(
          (feedback: Feedback, index: number) => (
            <FeedbackBox
              key={index}
              title={feedback.title}
              tags={feedback.tags}
              index={index}
            />
          )
        );
        setFilteredFeedbacks(filteredFeedbackElements);
        setError(null);
      } else {
        setError(`에러 ${response.data.error_code}: ${response.data.message}`);
      }
    } catch (error) {
      setError("피드백을 가져오는 동안 오류가 발생했습니다.");
    }
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    console.log("검색 중...");
    fetchFeedbacks();
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

      {error ? (
        <p>에러: {error}</p>
      ) : (
        <div className="flex flex-col gap-2">{filteredFeedbacks}</div>
      )}
    </div>
  );
};

export default Search;
