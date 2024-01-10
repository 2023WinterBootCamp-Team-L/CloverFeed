import clover from "../assets/clover.svg";

import ChangePage from "../components/ChangePage";

function QueryMain() {
  const nextpage = "/querystart";

  return (
    <div className="flex flex-row gap-2.5 justify-center items-start overflow-hidden max-w-[24.56rem] mx-auto px-4 py-20 rounded-[1.37rem]">
      <ChangePage nextpage={nextpage} />
      <div className="flex flex-col gap-[6.13rem] justify-start items-center">
        <p className="block text-center text-2xl">
          질문리스트는 기본질문과 당신이 직접 만드는 추가질문으로
          구성되어있어요.
        </p>
        <img src={clover} alt="클로버" />
      </div>
    </div>
  );
}

export default QueryMain;
