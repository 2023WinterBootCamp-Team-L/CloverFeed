import { useState, useEffect } from "react";
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

function Mainpage() {
  const categories = ["개발자", "디자이너", "기획자", "PMPO", "기타직무"];

  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("user_name");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

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
          {username}님은 사용자 관점을 잘 배려하는
        </p>
        <p className="text-[14px] text-center font-pre font-bold">
          프론트엔드 엔지니어로 평가받고 있습니다.
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
