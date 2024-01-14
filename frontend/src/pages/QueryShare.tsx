import queryshare from "../assets/queryshare.svg";
import ShortButton from "../components/ShortButton";
import XButton from "../components/XButton";

function QueryShare() {
  const nextpage = "/";

  return (
    <div className="bg-gradient-to-t from-c-emerald flex flex-col items-center overflow-hidden w-[24.56rem] mx-auto h-[53.25rem]">
      <div className="flex flex-col justify-center h-full items-end">
        <div>
          <XButton nextpage={nextpage} />
        </div>
        <div className="flex flex-col gap-[6.13rem]">
          <div>
            <p className="text-2xl leading-1.25 text-center">나의 질문 폼을</p>
            <p className="text-2xl leading-1.25 text-center">
              <span className="text-c-green font-bold">동료에게 공유</span>
              해보세요!
            </p>
          </div>
          <img src={queryshare} alt="쿼리공유" />
          <div className="flex flex-row justify-center space-x-7">
            <ShortButton type={false} text="QR코드" />
            <ShortButton text="링크" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QueryShare;
