import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Searchbutton from "../components/Searchbutton";
import FeedbackBox from "../components/FeedbackBox";
import axios from "axios";

interface Feedback {
  feedback_id: number;
  respondent_name: string;
  category: string;
  tag_work: string;
  tag_attitude: string;
  result: string;
}

const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [filteredFeedbacks, setFilteredFeedbacks] = useState<JSX.Element[]>([]);
  // const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [userid, setUserid] = useState("");

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get(
        `https://cloverfeed.kr/api/feedbacks/response/?user_id=${userid}&keyword=${searchValue}`
      );

      if (response.data.status === "success") {
        const parseTags = (tagsString: string) => {
          try {
            return tagsString
              .replace(/^\[|\]$/g, "") // Remove square brackets
              .split(", ") // Split by comma and space
              .map((tag) => tag.replace(/^'|'$/g, "")); // Remove single quotes from the beginning and end
          } catch (error) {
            console.error("Error parsing tags:", error);
            return [];
          }
        };
        const feedbacksData = response.data.feedbacks;
        const filteredFeedbackElements = feedbacksData.map(
          (feedback: Feedback, index: number) => (
            <FeedbackBox
              key={`feedback-${feedback.feedback_id}`}
              tag_work={parseTags(feedback.tag_work)}
              tag_attitude={parseTags(feedback.tag_attitude)}
              respondent_name={feedback.respondent_name}
              category={feedback.category}
              text={
                searchValue.trim() !== ""
                  ? feedback.result.slice(0, 100)
                  : undefined
              }
              index={index}
            />
          )
        );

        const uniqueFeedbacks = Array.from(
          new Set(filteredFeedbackElements.map((element) => element.key))
        ).map((key) =>
          filteredFeedbackElements.find((element) => element.key === key)
        );

        setFilteredFeedbacks(uniqueFeedbacks);
        setError(null);
      }
    } catch (error) {
      setError("피드백을 가져오는 동안 오류가 발생했습니다.");
    }
  };

  console.log(filteredFeedbacks);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const storedUserid = localStorage.getItem("user_id");
    if (storedUserid) {
      setUserid(storedUserid);
    }
  }, []);

  useEffect(() => {
    // console.log("userid: " + userid);
    fetchFeedbacks();
  }, [userid, searchValue]);

  const handleSearch = () => {
    fetchFeedbacks();
  };

  return (
    <div
      className="flex flex-col mx-auto h-screen gap-10 px-5 py-8"
      style={{ width: "393px" }}
    >
      <div className="flex justify-between">
        <BackButton back page="/MainPage" />
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
        <div className="flex flex-col items-center gap-4">
          {filteredFeedbacks}
        </div>
      )}
    </div>
  );
};

export default Search;
