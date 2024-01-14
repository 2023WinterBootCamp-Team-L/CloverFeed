import clover from "../assets/clover.svg";
import GreenButton from "../components/GreenButton";
// import LinkButton from "../components/LinkButton";

function LinkStart() {
  const nextpage = "/LinkPosition";

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="flex h-full flex-col justify-center items-center  relative  border-gray-300 bg-emerald-50"
        style={{ width: "393px", height: "852px" }}
      >
        <div className="w-full h-full flex flex-1 flex-col justify-center items-center ">
          <p className="text-xl leading-1.5 text-center font-Preahvihear">
            응답해 주셔서 감사합니다!
          </p>
        </div>
        <div className=" w-full h-full flex flex-1 flex-col justify-center items-center">
          <img
            src={clover}
            className="w-[202px] h-[202px]"
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
