import ChangePage from "../components/ChangePage";
import clover from "../assets/loginclover.svg";

function QueryMain() {
  return (
    <div
      className="bg-gradient-to-t from-c-emerald flex flex-col mx-auto h-screen gap-20 px-5 py-[95px]"
      style={{ width: "393px" }}
    >
      <ChangePage nextpage="/QueryStart" />
      <div>
        <p className="font-pre text-[22px] font-bold text-center">
          질문리스트는 <span className="text-c-green">기본질문</span>과
        </p>
        <p className="font-pre text-[22px] font-bold text-center">
          당신이 직접 만드는
        </p>
        <p className="font-pre text-[22px] font-bold text-center">
          <span className="text-c-green">추가질문</span>으로 구성되어있어요.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img src={clover} />
      </div>
    </div>
  );
}

export default QueryMain;
