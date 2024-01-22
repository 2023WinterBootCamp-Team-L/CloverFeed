import BackButton from "../components/BackButton";

function LinkOpti() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="flex flex-col overflow-hidden relative bg-c-emerald bg-opacity-35 px-5 py-8 gap-20"
        style={{ width: "393px", height: "852px" }}
      >
        <div className="flex justify-between w-full">
          <BackButton back page="/LinkAnswer2" />
          <BackButton back={false} page="/LinkFinish" />
        </div>
        <div className="flex flex-col gap-20">
          <div>
            <p className="font-pre text-[22px] font-bold text-center">
              나의 성과에 대해
            </p>
            <p className="font-pre text-[22px] font-bold text-center">
              평가해주세요
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center gap-10">
          <button className="flex px-20 py-4 font-pre text-[14px] font-bold rounded-lg border-2 border-c-yellow bg-white hover:bg-c-yellow">
            1점
          </button>
          <button className="flex px-20 py-4 font-pre text-[14px] font-bold rounded-lg border-2 border-c-l-pink bg-white hover:bg-c-l-pink">
            2점
          </button>
          <button className="flex px-20 py-4 font-pre text-[14px] font-bold rounded-lg border-2 border-c-blue bg-white hover:bg-c-blue">
            3점
          </button>
          <button className="flex px-20 py-4 font-pre text-[14px] font-bold rounded-lg border-2 border-c-sl-purple bg-white hover:bg-c-sl-purple">
            4점
          </button>
        </div>
      </div>
    </div>
  );
}

export default LinkOpti;
