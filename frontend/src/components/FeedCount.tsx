import React, { useEffect, useState } from "react";
import axios from "axios";

interface FeedbackCounts {
  category: string;
  number: number;
}

interface FeedCountProps {
  category: string;
}

const FeedCount: React.FC<FeedCountProps> = ({ category }) => {
  const [userid, setUserid] = useState("");
  useEffect(() => {
    const storedUserid = localStorage.getItem("user_id");
    if (storedUserid) {
      setUserid(storedUserid);
    }
  }, []);

  const apiUrl = `http://localhost:8000/api/feedbacks/response/count/?user_id=${userid}/`;

  const [feedbackCounts, setFeedbackCounts] = useState<FeedbackCounts[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        if (response.data.status === "success") {
          setFeedbackCounts(response.data.counts);
          console.log("피드백 개수");
        } else {
          setFeedbackCounts([]);
          console.error("에러 응답:", response.data.message);
        }
      } catch (err) {
        console.error("네트워크 오류:", err);
      }
    };

    fetchData();
  }, [apiUrl]);

  const selectedCategoryCount = feedbackCounts.find(
    (count) => count.category === category
  );

  return (
    <div>
      <p>{selectedCategoryCount?.number}</p>
    </div>
  );
};

export default FeedCount;
