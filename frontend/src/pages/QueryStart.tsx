import querystart from "../assets/querystart.svg";

function QueryStart() {
  return (
    <div className="flex flex-row gap-2.5 justify-center items-start overflow-hidden max-w-[24.56rem] mx-auto px-4 py-[1.69rem] rounded-[1.37rem]">
      <div className="flex flex-col items-end gap-[1.8rem]">
        <button>x(컴포넌트)</button>
        <div className="flex flex-col gap-[6.13rem] justify-start items-center">
          <p className="block text-center text-2xl">
            나만의 질문을 생성해서 동료에게 피드백을 받아봐요!
          </p>
          <img src={querystart} alt="쿼리시작" />
          <button>질문 생성하기(컴포넌트)</button>
        </div>
      </div>
    </div>
  );
}

export default QueryStart;
