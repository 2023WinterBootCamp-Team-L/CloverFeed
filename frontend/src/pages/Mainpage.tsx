import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import Modal from "../components/Modal.tsx";

function Mainpage() {
  const [username, setUsername] = useState("");
  const [categories, setCategories] = useState([]);
  const [counts, setCounts] = useState([]);

  const fetchCounts = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/feedbacks/response/count/?user_id=${localStorage.getItem("user_id")}`
    );
    const categoriesData = response.data.counts.map(
      (item: { category: string }) => item.category
    );
    const countsData = response.data.counts.map(
      (item: { count: number }) => item.count
    );

    setCategories(categoriesData);
    setCounts(countsData);
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("user_name");
    if (storedUsername) {
      setUsername(storedUsername);
    }
    fetchCounts();
  }, []);

  // 모달
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };
  const navigate = useNavigate();
  const handleMakeQuesttion = () => {
    navigate("/QueryMain");
  };

  return (
    <div className="bg-white">
      <div className=" flex flex-col mx-auto gap-10 px-5 py-8 min-h-screen w-full sm:max-w-[393px] lg:max-w-[393px]">
        <div>
          <p className="text-[24px] font-pre font-bold text-green-500">
            CloverFeed
            <span className="float-right">
              <LogoutButton iconSrc={logouticon} logoutpage="/" />
            </span>
          </p>
          <p className="text-[14px] font-pre font-bold">
            {username}님의 네잎클로버
          </p>
        </div>

        <div>
          <SimpleWordcloud />
        </div>

        <div className="flex justify-center">
          <GreenButton text="질문 폼 새로 생성하기" onClick={toggle} />
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
                <div key={category}>
                  <FeedButton
                    category={category}
                    count={counts[index]}
                    color={index % 2 === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} toggle={toggle}>
        <div className="flex flex-col items-center gap-3">
          <p className="font-pre text-[16px] font-bold">새 질문 폼을 만들면</p>
          <p className="font-pre text-[16px] font-bold text-center">
            기존 질문 폼은 더이상 사용할 수 없습니다.
          </p>
          <p className="font-pre text-[14px] font-bold text-gray-400">
            기존 폼에 대한 피드백은 확인이 가능합니다.
          </p>

          <button
            className="bg-c-indigo text-white w-full p-2 rounded-lg mt-4 font-pre text-[16px]"
            onClick={handleMakeQuesttion}
          >
            새 질문 폼 생성하러 가기
          </button>
        </div>
      </Modal>
    </div>
  );
}
export default Mainpage;
