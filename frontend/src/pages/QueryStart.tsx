import querystart from "../assets/querystart.svg";
import GreenButton from "../components/GreenButton";
import XButton from "../components/XButton";

function QueryStart() {
  const nextpage = "/querylist";
  const closepage = "/mainpage";

  return (
    <div className="bg-gradient-to-t from-c-emerald">
    <div
      className=" flex flex-col mx-auto h-screen gap-10 px-5 py-10 min-width 768 "
      style={{ width: "393px" }}
    >
      <div className="flex flex-row justify-end">
        <XButton nextpage={closepage} />
      </div>
      <div className="flex flex-col gap-24">
        <div>
          <p className="font-pre text-[22px] font-bold text-center">
            나만의 질문을 생성해서
          </p>
          <p className="font-pre text-[22px] font-bold text-center">
            <span className="text-c-green font-bold">동료에게 피드백</span>을
            받아봐요!
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={querystart} alt="쿼리시작" />
        </div>
        <div className="flex justify-center items-center">
          <GreenButton text="질문 폼 생성하기" nextpage={nextpage} />
        </div>
      </div>
    </div>
    </div>
  );
}

export default QueryStart;
