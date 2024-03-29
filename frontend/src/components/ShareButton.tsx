import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

interface ApiResponse {
  status: string;
  feedbackform: string;
  error_code?: string;
  message?: string;
}

interface ShareButtonProps {
  iconSrc: string; // 이미지 소스는 문자열로 표현
  sharepage: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ iconSrc }) => {
  const navigate = useNavigate();

  const [userid, setUserid] = useState("");

  useEffect(() => {
    const storedUserid = localStorage.getItem("user_id");
    if (storedUserid) {
      setUserid(storedUserid);
    }
  }, []);

  const handleButtonClick = async () => {
    try {
      // 사용자 ID를 하드코딩하거나, 동적으로 설정할 수 있습니다.
      const response = await axios.get<ApiResponse>(
        `https://cloverfeed.kr/api/form/?user_id=${userid}`
      );

      if (response.data.status === "success") {
        if (response.data.feedbackform === "true") {
          // feedbackform이 true이면 sharepage로 이동
          navigate("/QueryShare");
        } else {
          // feedbackform이 false이면 QueryMain 페이지로 이동
          navigate("/QueryMain");
        }
      } else {
        // API 응답이 success가 아닌 경우에 대한 처리
        console.log("API 응답:", response.data);
      }
    } catch (error) {
      console.error("API 호출 에러:", error);
    }
  };

  return (
    <button onClick={handleButtonClick}>
      <div className="flex flex-col justify-center gap-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <img src={iconSrc} alt="Share Icon" className="h-[40px]" />
        <p className="font-pre text-[14px] font-bold">질문폼 공유</p>
      </div>
    </button>
  );
};

export default ShareButton;
