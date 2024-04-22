import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface ChangePageProps {
  nextpage: string;
}

function ChangePage({ nextpage }: ChangePageProps) {
  const [page, setPage] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // 3초 후에 페이지를 변경
      setPage(true);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    // 페이지가 변경될 때 실제 URL 또는 경로를 문자열로 전달
    if (page) {
      router.push(nextpage);
    }
  }, [page, router, nextpage]);

  // JSX를 반환합니다.
  return <></>;
}

export default ChangePage;
