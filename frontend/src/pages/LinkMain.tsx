import clover from "../assets/clover.svg";

function LinkMain() {
  return (
    <div>
      <div className="w-317 h-70 my-10">
        안녕하세요! 클로피에 오신 걸 환영해요.
      </div>

      <button className="flex items-center pr-1 bg-white">
        <img
          src={clover}
          alt="추가 버튼"
          className="w-8 h-8 cursor-pointer bg-white"
        />
      </button>
    </div>
  );
}

export default LinkMain;
