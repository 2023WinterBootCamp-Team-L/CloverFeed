import BackButton from "../components/BackButton";
// import ExceedPopup from "../components/ExceedPopup";

function LinkTag2() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div
        className="flex flex-col justify-center items-center overflow-hidden relative border-2 border-gray-300 bg-emerald-50 "
        style={{ width: "393px", height: "852px" }}
      >
        <div className="flex justify-between">
          <BackButton back page="/LinkTag1" />
          <BackButton back={false} page="/LinkAnswer1" />
        </div>
        <div className="">
          <p className=" text-left font-Preahvihear text-24 text-xl font-normal font-weight-400 ">
            당신이 생각하는 XXX 님의
          </p>
          <p className=" text-left font-Preahvihear text-24 text-xl font-normal font-weight-400 ">
            업무 능력 강점은 무엇인가요?
          </p>
          <p className=" text-left font-Preahvihear text-[#767677] text-[14px] font-normal font-weight-400 ">
            키워드를 최대 5개까지 선택해주세요.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LinkTag2;
