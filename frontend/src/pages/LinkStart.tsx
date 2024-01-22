import clover from "../assets/clover.svg";
import GreenButton from "../components/GreenButton";
// import LinkButton from "../components/LinkButton";

function LinkStart() {
  const nextpage = "/LinkPosition";

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="flex h-full flex-col justify-center items-center relative bg-c-emerald bg-opacity-35"
        style={{ width: "393px", height: "852px" }}
      >
        <div className="w-full h-full flex flex-1 flex-col justify-center items-center">
          <p className="font-pre text-[22px] font-bold">XXX님의 본격적인</p>
          <p className="font-pre text-[22px] font-bold">
            평가를 시작하겠습니다!
          </p>
          <p className="font-pre text-[22px] font-bold">익명으로 전달되니</p>
          <p className="font-pre text-[22px] font-bold">걱정하지 마세요.</p>
        </div>
        <div className=" w-full h-full flex flex-1 flex-col justify-center items-center">
          <img
            src={clover}
            className="w-[250px] h-[250px]"
            alt="클로버 이미지"
          />
        </div>
        <div className="w-full h-full flex flex-1 flex-col justify-center items-center">
          <GreenButton text="피드백 시작하기" nextpage={nextpage} />
        </div>
      </div>
    </div>
  );
}

export default LinkStart;
