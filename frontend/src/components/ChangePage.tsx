import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ChangePageProps {
  nextpage: string;
}

function ChangePage({ nextpage }: ChangePageProps) {
  const [page, setPage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // 5초 후에 페이지를 변경
      setPage(true);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    // 페이지가 변경될 때 실제 URL 또는 경로를 문자열로 전달
    if (page) {
      navigate(nextpage);
    }
  }, [page, navigate, nextpage]);

  // JSX를 반환합니다.
  return <></>;
}

export default ChangePage;
