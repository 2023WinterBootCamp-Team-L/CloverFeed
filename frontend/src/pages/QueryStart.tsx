import querystart from "../assets/querystart.svg";
import GreenButton from "../components/GreenButton";
import XButton from "../components/XButton";

function QueryStart() {
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
                나만의 질문을 생성해서
              </p>
              <p className="font-pre text-[22px] font-bold text-center">
                <span className="text-c-green font-bold">동료에게 피드백</span>
                을 받아봐요!
              </p>
            </div>
          </div>
          <div className=" w-full h-full flex flex-1 flex-col justify-center items-center">
            <img src={querystart} alt="쿼리시작" />
          </div>
          <div className=" w-full h-full flex flex-1 flex-col justify-center items-center">
            <GreenButton text="질문 폼 생성하기" nextpage="/QueryList" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QueryStart;
