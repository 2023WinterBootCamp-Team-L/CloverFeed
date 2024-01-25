import React, { useEffect, useState } from "react";
import axios from "axios";

interface FeedCountProps {
  category: string;
  count: number;
}

const FeedCount: React.FC<FeedCountProps> = ({ category }) => {
  const [feedbackCount, setFeedbackCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [userid, setUserid] = useState("");

  useEffect(() => {
    const storedUserid = localStorage.getItem("user_id");
    if (storedUserid) {
      setUserid(storedUserid);
    }
  }, []);

  const apiUrl = `http://localhost:8000/api/feedbacks/response/count/?user_id=${userid}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        if (response.data.status === "success") {
          const feedbackCounts = response.data.counts;

          const categoryCount = feedbackCounts.find(
            (count: any) => count.category === category
          );

          if (categoryCount) {
            setFeedbackCount(categoryCount.count);
          } else {
            setFeedbackCount(0);
          }
          setError(null);
        } else {
          setError(
            `에러 ${response.data.error_code}: ${response.data.message}`
          );
        }
      } catch (err) {
        console.error("에러 발생:", err);
        setError("피드백 카운트를 가져오는 동안 오류가 발생했습니다.");
      }
    };

    fetchData();
  }, [apiUrl, category]);

  return (
    <div>
      {error ? (
        <p>에러: {error}</p>
      ) : (
        <p>{feedbackCount !== null && `${feedbackCount}`}</p>
      )}
    </div>
  );
};

export default FeedCount;
