import clover from "../assets/clover.svg";
import GreenButton from "../components/GreenButton";

function LinkStart() {
  const nextpage = "/LinkPosition";
  return (
    <div className="flex justify-center items-center h-screen ">
      <div
        className="flex flex-col justify-center items-center overflow-hidden relative border-2 border-gray-300 bg-emerald-50 "
        style={{ width: "393px", height: "852px" }}
      >
        <div className="flex flex-col justify-center h-full items-end">
          <div className="flex flex-col gap-[1rem]">
            <p className="text-xl leading-1.5 text-center font-Preahvihear">
              XXX님의 본격적인
            </p>
            <p className="text-xl leading-1.5 text-center font-Preahvihear">
              평가를 시작하겠습니다!
            </p>
            <p className="text-xl leading-1.5 text-center font-Preahvihear">
              익명으로 전달되니
            </p>
            <p className="text-xl leading-1.5 text-center  font-Preahvihear">
              걱정하지 마세요.
            </p>
            <div className="w-95.88 h-325 flex justify-center items-center">
              <img src={clover} className="w-200 h-200" alt="클로버 이미지" />
            </div>
            <GreenButton text="피드백 시작하기" nextpage={nextpage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkStart;
