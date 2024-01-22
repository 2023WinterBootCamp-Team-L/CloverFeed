import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
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

  const handleButtonClick = async () => {
    const userId = 1;

    try {
      // 사용자 ID를 하드코딩하거나, 동적으로 설정할 수 있습니다.
      const response = await axios.get<ApiResponse>(
        `http://localhost:8000/api/form/?user_id=${userId}`
      );

      if (response.data.status === "success") {
        if (response.data.feedbackform === "true") {
          // feedbackform이 true이면 sharepage로 이동
          navigate("/sharepage");
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

  useEffect(() => {
    // 페이지 로드 시 자동으로 fetchUserData 호출
    handleButtonClick();
  }, []); // 빈 배열은 컴포넌트가 마운트될 때만 호출

  return (
    <button onClick={handleButtonClick}>
      <div className="flex flex-col justify-center gap-2">
        <img src={iconSrc} alt="Share Icon" className="h-[40px]" />
        <p className="font-pre text-[14px] font-bold">질문폼 공유</p>
      </div>
    </button>
  );
};

export default ShareButton;
