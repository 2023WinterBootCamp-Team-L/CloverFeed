import { useState, useEffect } from "react";
import axios from "axios";
import logouticon from "../assets/logouticon.svg";
import researchicon from "../assets/researchicon.svg";
import charticon from "../assets/charticon.svg";
import shareicon from "../assets/shareicon.svg";
import GreenButton from "../components/GreenButton";
import LogoutButton from "../components/LogoutButton.tsx";
import ResearchButton from "../components/ResearchButton.tsx";
import ChartButton from "../components/ChartButton.tsx";
import ShareButton from "../components/ShareButton.tsx";
import FeedButton from "../components/FeedButton.tsx";
import SimpleWordcloud from "../components/wordcloud.tsx";

interface ApiResponse {
  status: "success" | "error";
  summary?: string;
}

function Mainpage() {
  const categories = ["개발자", "디자이너", "기획자", "PMPO", "기타직무"];

  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("user_name");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const [userid, setUserid] = useState("");
  const [summary, setSummary] = useState<string | undefined>(undefined);

  useEffect(() => {
    const storedUserid = localStorage.getItem("user_id");
    if (storedUserid) {
      setUserid(storedUserid);
    }
  }, []);

  const apiUrl = "http://localhost:8000/api/feedbacks/summary/";
  useEffect(() => {
    // API 데이터를 가져오는 비동기 함수 정의
    const fetchData = async () => {
      try {
        // axios를 사용해 POST 요청 보내기
        const response = await axios.post<ApiResponse>(apiUrl, {
          user_id: userid,
        });

        // API 응답이 성공인 경우 요약 정보를 상태 변수에 저장
        if (response.data.status === "success") {
          setSummary(response.data.summary);
        } else {
          // API 응답이 실패인 경우 에러 메시지 출력
          console.error("데이터 없음:", response.data.status);
        }
      } catch (error) {
        // 비동기 함수 실행 중 발생한 에러 처리
        console.error("API 요청 실패:", error);
      }
    };

    // fetchData 함수 호출
    fetchData();
  }, [userid, setSummary]);

  return (
    <div
      className=" flex flex-col mx-auto h-full gap-10 px-5 py-8"
      style={{ width: "393px" }}
    >
      <div>
        <p className="text-[24px] font-pre font-bold text-green-500">
          CloverFeed
          <span className="float-right">
            <LogoutButton iconSrc={logouticon} logoutpage="/Signup" />
          </span>
        </p>
        <p className="text-[14px] font-pre font-bold">
          {username}님의 네잎클로버
        </p>
      </div>

      <div>
        <SimpleWordcloud />
      </div>
      <div>
        <p className="text-[14px] text-center font-pre font-bold">
          {username}님은 {summary}
        </p>
      </div>

      <div className="flex justify-center">
        <GreenButton text="질문폼 새로 생성하기" nextpage="/QueryMain" />
      </div>
      <div className="flex flex-row justify-center gap-14 mt-1">
        <ResearchButton iconSrc={researchicon} researchpage="/Search" />
        <ChartButton iconSrc={charticon} chartpage="/Chart" />
        <ShareButton iconSrc={shareicon} sharepage="/QueryShare" />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col justify-start gap-4">
          <p className="font-pre text-[15px] font-bold">Feedback</p>

          <div className="flex flex-col justify-center">
            {categories.map((category, index) => (
              <FeedButton
                key={category}
                category={category}
                color={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Mainpage;
