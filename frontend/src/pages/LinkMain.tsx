import { useEffect, useState } from "react";
import clover from "../assets/clover.svg";
import ChangePage from "../components/ChangePage";

function LinkMain() {
  const [user_id, setUser_id] = useState(0);

  useEffect(() => {
    // Query Parameters를 가져오기
    const queryParams = new URLSearchParams(window.location.search);

    // user_id 값을 가져오기
    const userId = queryParams.get("user_id");
    if (userId) {
      setUser_id(parseInt(userId));
    }
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <ChangePage nextpage={`/LinkStart?user_id=${1}`} />
      <div
        className="flex h-full flex-col justify-center items-center relative bg-c-emerald bg-opacity-35 min-h-screen w-full sm:w-[393px] lg:w-[393px]"
        // style={{ width: "393px", height: "852px" }}
      >
        <div className="w-full h-full flex flex-1 flex-col justify-center items-center">
          <p className="text-black text-center font-pre text-[22px] font-bold">
            안녕하세요!
          </p>
          <p className="text-black text-center font-pre text-[22px] font-bold">
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
