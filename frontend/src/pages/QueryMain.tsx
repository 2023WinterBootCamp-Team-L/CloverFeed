import clover from "../assets/clover.svg";

function QueryMain() {
  return (
    <div>
      <div>
        질문리스트는 기본질문과 당신이 직접 만드는 추가질문으로 구성되어있어요.
      </div>
      <button>
        <img src={clover} alt="클로버" />
      </button>
    </div>
  );
}

export default QueryMain;
