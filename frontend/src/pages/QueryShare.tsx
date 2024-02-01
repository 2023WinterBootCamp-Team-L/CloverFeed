import queryshare from "../assets/queryshare.svg";
import ShortButton from "../components/ShortButton";
import XButton from "../components/XButton";

function QueryShare() {
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
          <div className="flex flex-row justify-center space-x-10 items-center">
            <ShortButton type={false} text="QR코드" />
            <ShortButton text="링크" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QueryShare;
