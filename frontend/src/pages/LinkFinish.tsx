import clover from "../assets/clover.svg";
import HomeButton from "../components/HomeButton";
// import LinkButton from "../components/LinkButton";

function LinkFinish() {
  const nextpage = "/";

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="flex h-full flex-col justify-center items-center relative bg-c-emerald bg-opacity-40"
        style={{ width: "393px", height: "852px" }}
      >
        <div className="w-full h-full flex flex-1 flex-col justify-center items-center">
          <p className="font-pre text-[22px] font-bold">
            응답해 주셔서 감사합니다
          </p>
        </div>
        <div className=" w-full h-full flex flex-1 flex-col justify-center items-center mb-10">
          <img
            src={clover}
            className="w-[250px] h-[250px]"
            alt="클로버 이미지"
          />
        </div>
        <div className="w-full h-full flex flex-1 flex-col justify-center items-center">
          <HomeButton
            text="내 질문 폼 만들러가기"
            nextpage={nextpage}
          ></HomeButton>
        </div>
      </div>
    </div>
  );
}

export default LinkFinish;
