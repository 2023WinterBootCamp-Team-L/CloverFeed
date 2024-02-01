import ChangePage from "../components/ChangePage";
import clover from "../assets/loginclover.svg";

function QueryMain() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        //sm은 화면 너비 640px이상(모바일), md는 768px이상(테블릿), lg는 1024px이상(데스크탑)
        className="flex px-5 py-10 flex-col  items-center relative bg-c-emerald bg-opacity-35 overflow-hidden min-h-screen w-full sm:w-[393px] lg:w-[393px]"
        //style={{ width: '393px', height: '852px' }}
      >
        <ChangePage nextpage="/QueryStart" />
        <div className="w-full h-full flex flex-1 flex-col justify-center items-center"><div>
          <p className="font-pre text-[22px] font-bold text-center">
            질문리스트는 <span className="text-c-green">기본질문</span>과
          </p>
          <p className="font-pre text-[22px] font-bold text-center">
            당신이 직접 만드는
          </p>
          <p className="font-pre text-[22px] font-bold text-center">
            <span className="text-c-green">추가질문</span>으로 구성되어있어요.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={clover} />
        </div>
      </div>
      </div>
    </div>
  );
}

export default QueryMain;
