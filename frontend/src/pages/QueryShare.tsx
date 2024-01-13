import queryshare from "../assets/queryshare.svg";
import GreenButton from "../components/GreenButton";
import XButton from "../components/XButton";

function QueryShare() {
  const nextpage = "/";

  return (
    <div className="bg-emerald-50 flex flex-col items-center overflow-hidden w-[24.56rem] mx-auto h-[53.25rem]">
      <div className="flex flex-col justify-center h-full items-end">
        <XButton nextpage={nextpage} />
        <div className="flex flex-col gap-[6.13rem]">
          <div>
            <p className="text-2xl leading-1.25 text-center">나의 질문 폼을</p>
            <p className="text-2xl leading-1.25 text-center">
              <span className="text-green-400 font-bold">동료에게 공유</span>
              해보세요!
            </p>
          </div>
          <img src={queryshare} alt="쿼리공유" />
          <GreenButton text="질문 생성하기" nextpage={nextpage} />
        </div>
      </div>
    </div>
  );
}

export default QueryShare;
