import clover from "../assets/clover.svg";
// import ChangePage from "../components/ChangePage";

function LinkMain() {
  // const nextpage = "/LinkStart";

  return (
    <div className="flex justify-center items-center h-screen">
      {/* <ChangePage nextpage={nextpage} /> */}
      <div
        className="flex h-full flex-col justify-center items-center overflow-hidden relative border-2 border-gray-300 bg-emerald-50"
        style={{ width: "393px", height: "852px" }}
      >
        <div className="w-full h-full flex flex-col justify-center items-center mt-1/5">
          <p className="text-black dark:text-white text-center font-Preahvihear text-24 text-xl font-normal font-weight-400 leading-35 mb-2">
            안녕하세요!
          </p>

          <p className="text-black dark:text-white text-center font-Preahvihear text-24 text-xl font-normal font-weight-400 leading-35 mb-10">
            클로피에 오신 걸 환영해요.
          </p>

          <div className="w-95.88 h-325 flex justify-center items-center">
            <img
              src={clover}
              className="w-[201.25px] h-[201.25px]"
              alt="클로버 이미지"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkMain;
