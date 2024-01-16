import BackButton from "../components/BackButton";

function LinkOpti() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div
        className="flex flex-col justify-center items-center overflow-hidden relative border-2 rounded-lg bg-emerald-50 "
        style={{ width: "393px", height: "852px" }}
      >
        <div className="flex justify-between w-full px-4 pt-4">
          <BackButton back page="/LinkAnswer2" />
          <BackButton back={false} page="/LinkFinish" />
        </div>
        <div className="flex-col flex-full justify-between pt-12 pb-12">
          <p className="text-left font-Preahvihear text-24 text-xl font-normal font-weight-400 ">
            나의 성과에 대해
          </p>
          <p className="text-left font-Preahvihear text-24 text-xl font-normal font-weight-400 ">
            평가해주세요
          </p>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center">
          <button className="w-80 h-[70px] font-Preahvihear text-24 text-xl font-normal rounded-xl border-2 mb-12 border-[#E2E9FF] bg-white hover:border-[#E2E9FF] hover:bg-[#E2E9FF]">
            1점
          </button>
          <button className="w-80 h-[70px] font-Preahvihear text-24 text-xl font-normal rounded-xl border-2 mb-12 border-[#F6EED4] bg-white hover:border-[#F6EED4] hover:bg-[#F6EED4]">
            2점
          </button>
          <button className="w-80 h-[70px] font-Preahvihear text-24 text-xl font-normal rounded-xl border-2 mb-12 border-[#F8DEDE] bg-white hover:border-[#F8DEDE] hover:bg-[#F8DEDE]">
            3점
          </button>
          <button className="w-80 h-[70px] font-Preahvihear text-24 text-xl font-normal rounded-xl border-2 mb-12 border-[#C1C6CF] bg-white hover:border-[#C1C6CF] hover:bg-[#C1C6CF]">
            4점
          </button>
        </div>
      </div>
    </div>
  );
}

export default LinkOpti;
