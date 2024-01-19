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
  const userId = 1;
  const apiUrl = `http://localhost:8000/api/feedbacks/response/count?userid=${userId}`;

  const [feedbackCounts, setFeedbackCounts] = useState<FeedbackCounts[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        if (response.data.status === "success") {
          setFeedbackCounts(response.data.count);
        } else {
          console.error("에러 응답:", response.data.message);
        }
      } catch (err) {
        console.error("네트워크 오류:", err);
      }
    };

    fetchData();
  }, [apiUrl]);
  // // API에서 받아온 데이터를 기반으로한 더미 값 설정
  // setFeedbackCounts([
  //   { category: "개발자", number: 4    },
  //   { category: "디자이너", number: 3 },
  //   { category: "기획자", number: 1 },
  //   { category: "PM/PO", number: 2 },
  //   { category: "기타직무", number: 2 },
  // ]);

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
