import querystart from "../assets/querystart.svg";
import GreenButton from "../components/GreenButton";
import XButton from "../components/XButton";

function QueryStart() {
  const nextpage = "/querylist";
  const closepage = "/mainpage";

  return (
    <div className="bg-gradient-to-t from-c-emerald flex flex-col items-center overflow-hidden w-[24.56rem] mx-auto h-[53.25rem]">
      <div className="flex flex-col justify-center h-full items-end">
        <div>
          <XButton nextpage={closepage} />
        </div>
        <div className="flex flex-col gap-[6.13rem]">
          <div>
            <p className="text-2xl leading-1.25 text-center">
              나만의 질문을 생성해서
            </p>
            <p className="text-2xl leading-1.25 text-center">
              <span className="text-c-green font-bold">동료에게 피드백</span>을
              받아봐요!
            </p>
          </div>
          <img src={querystart} alt="쿼리시작" />
          <GreenButton text="질문 생성하기" nextpage={nextpage} />
        </div>
      </div>
    </div>
  );
}

export default QueryStart;
