import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface ApiResponse {
  status: string;
  feedbackform: string;
}

interface ShareButtonProps {
  iconSrc: string;
  sharepage: string;
}

const ShareButton2: React.FC = () => {
  const [apiData, setApiData] = useState<ApiResponse | null>(null);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const userId = '사용자ID';
      const response = await axios.get<ApiResponse>(`/forms?user_id=${userId}`);
      console.log('API 응답:', response.data);
      setApiData(response.data);
    } catch (error) {
      console.error('API 호출 에러:', error);
    }
  };

  useEffect(() => {
    // 컴포넌트가 로드될 때마다 API 호출
    fetchData();
  }, []);

  return (
    <div>
      {apiData && (
        <>
          <p>Status: {apiData.status}</p>
          <p>Feedback Form: {apiData.feedbackform}</p>
        </>
      )}
      <ShareButton iconSrc="your_icon_source_path" sharepage="/your_share_page_path" />
    </div>
  );
};

const ShareButton: React.FC<ShareButtonProps> = ({ iconSrc, sharepage }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(sharepage);
  };

  return (
    <button onClick={handleButtonClick}>
      <img src={iconSrc} alt="Share Icon" />
    </button>
  );
};

export default ShareButton;