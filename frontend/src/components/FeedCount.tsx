import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

interface FeedbackCounts {
  category: string;
  number: number;
}

interface SuccessResponse {
  status: string;
  counts: FeedbackCounts[];
}

interface ErrorResponse {
  status: string;
  error_code: number;
  message: string;
}

interface FeedCountProps {
  category: string;
}

const FeedCount: React.FC<FeedCountProps> = ({ category }) => {
  const userId = 1;
  const apiUrl = `/api/feedbacks/response/count?userid=${userId}`;

  const [feedbackCounts, setFeedbackCounts] = useState<FeedbackCounts[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response: AxiosResponse<SuccessResponse>) => {
        const data: SuccessResponse = response.data;

        if (data.status === "success") {
          setFeedbackCounts(data.counts);
        } else {
          console.error("API 요청 실패", data.status);
        }
      })
      .catch((error: ErrorResponse) => {
        setError(error.message);
      });

    // // API에서 받아온 데이터를 기반으로한 더미 값 설정
    // setFeedbackCounts([
    //   { category: "개발자", number: 4    },
    //   { category: "디자이너", number: 3 },
    //   { category: "기획자", number: 1 },
    //   { category: "PM/PO", number: 2 },
    //   { category: "기타직무", number: 2 },
    // ]);
  }, [apiUrl]);

  if (error) {
    return <div>Error: {error}</div>;
  }

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
