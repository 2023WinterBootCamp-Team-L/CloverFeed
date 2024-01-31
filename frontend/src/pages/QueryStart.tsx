import querystart from "../assets/querystart.svg";
import GreenButton from "../components/GreenButton";
import XButton from "../components/XButton";

function QueryStart() {
  return (
    <div className="bg-c-emerald bg-opacity-35">
      <div className="w-full sm:max-w-[393px] lg:max-w-[393px] flex flex-col justify-center mx-auto min-h-screen gap-10 px-5 py-8">
        <div className="flex flex-row justify-end">
          <XButton nextpage="/MainPage" />
        </div>
        <div className="flex flex-col gap-14">
          <div>
            <p className="font-pre text-[22px] font-bold text-center">
              나만의 질문을 생성해서
            </p>
            <p className="font-pre text-[22px] font-bold text-center">
              <span className="text-c-green font-bold">동료에게 피드백</span>을
              받아봐요!
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={querystart} alt="쿼리시작" />
          </div>
          <div className="flex justify-center items-center">
            <GreenButton text="질문 폼 생성하기" nextpage="/QueryList" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QueryStart;
