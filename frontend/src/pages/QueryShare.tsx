import { useState } from "react";
import queryshare from "../assets/queryshare.svg";
import Modal from "../components/Modal";
import ShortButton from "../components/ShortButton";
import XButton from "../components/XButton";
import CopyToClipboard from "react-copy-to-clipboard";

function QueryShare() {
  // 모달
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };

  const handleCopyClick = () => {
    alert("클립보드에 복사되었습니다.");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        //sm은 화면 너비 640px이상(모바일), md는 768px이상(테블릿), lg는 1024px이상(데스크탑)
        className="flex px-5 py-10 flex-col  items-center relative bg-c-emerald bg-opacity-35 overflow-hidden min-h-screen w-full sm:w-[393px] lg:w-[393px]"
        //style={{ width: '393px', height: '852px' }}
      >
        <div className=" w-full h-full flex flex-1 flex-col justify-center items-center">
          <div className="w-full h-full  flex flex-1  flex-start justify-end">
            <XButton nextpage="/MainPage" />
          </div>
          <div>
            <div>
              <p className="font-pre text-[22px] font-bold text-center">
                나의 질문 폼을
              </p>
              <p className="font-pre text-[22px] font-bold text-center">
                <span className="text-c-green">동료에게 공유</span>
                해보세요!
              </p>
            </div>
          </div>
          <div className="w-full h-full flex flex-1 flex-col justify-center items-center">
            <img src={queryshare} alt="쿼리공유" />
          </div>
          <div className="flex flex-1 flex-row justify-center space-x-10 items-center ">
            <ShortButton text="링크" onClick={toggle} />
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <div className="flex flex-col items-center gap-3">
          <p className="font-pre text-[16px] font-bold">
            링크를 누르면 클립보드에 복사됩니다.
          </p>
          <p className="font-pre text-[16px] font-bold text-center">
            아래의 링크를 원하는 사람에게 공유해 보세요!
          </p>
          {/* <p className="font-pre text-[14px] font-bold text-gray-400"></p> */}
          <CopyToClipboard
            text={`https://cloverfeed.kr/LinkMain?user_id=${localStorage.getItem("user_id")}`}
          >
            <p
              className="font-pre text-[14px] font-bold text-blue-400 underline hover:cursor-pointer"
              onClick={handleCopyClick}
            >
              {`https://cloverfeed.kr/LinkMain?user_id=${localStorage.getItem("user_id")}`}
            </p>
          </CopyToClipboard>
          <button
            className="bg-c-indigo text-white w-full p-2 rounded-lg mt-4 font-pre text-[16px]  transition ease-in-out delay-150 hover:-translate-y-1  hover:bg-indigo-900 duration-300"
            onClick={toggle}
          >
            확인
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default QueryShare;
