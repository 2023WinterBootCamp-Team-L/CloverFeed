import clover from "../assets/clover.svg";
import ChangePage from "../components/ChangePage";

function LinkMain() {
  const nextpage = "/LinkStart";

  return (
    <div className="flex justify-center items-center h-screen">
      <ChangePage nextpage={nextpage} />
      <div
        className="flex h-full flex-col justify-center items-center relative bg-c-emerald bg-opacity-35"
        style={{ width: "393px", height: "852px" }}
      >
        <div className="w-full h-full flex flex-1 flex-col justify-center items-center">
          <p className="text-black dark:text-white text-center font-pre text-[22px] font-bold">
            안녕하세요!
          </p>
          <p className="text-black dark:text-white text-center font-pre text-[22px] font-bold">
            클로피에 오신 걸 환영해요.
          </p>
        </div>
        <div className=" w-full h-full flex flex-1 flex-col justify-center items-center">
          <img
            src={clover}
            className="w-[250px] h-[250px]"
            alt="클로버 이미지"
          />
        </div>
        <div className="flex-1" />
      </div>
    </div>
  );
}

export default LinkMain;
