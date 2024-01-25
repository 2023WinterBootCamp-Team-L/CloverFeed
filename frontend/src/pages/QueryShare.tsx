import queryshare from "../assets/queryshare.svg";
import ShortButton from "../components/ShortButton";
import XButton from "../components/XButton";

function QueryShare() {
  return (
    <div
      className="bg-gradient-to-t from-c-emerald flex flex-col mx-auto h-screen gap-10 px-5 py-10"
      style={{ width: "393px" }}
    >
      <div className="flex flex-row justify-end">
        <XButton nextpage="/MainPage" />
      </div>
      <div className="flex flex-col gap-20">
        <div>
          <p className="font-pre text-[22px] font-bold text-center">
            나의 질문 폼을
          </p>
          <p className="font-pre text-[22px] font-bold text-center">
            <span className="text-c-green">동료에게 공유</span>
            해보세요!
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={queryshare} alt="쿼리공유" />
        </div>
        <div className="flex flex-row justify-center space-x-10">
          <ShortButton type={false} text="QR코드" />
          <ShortButton text="링크" />
        </div>
      </div>
    </div>
  );
}

export default QueryShare;
