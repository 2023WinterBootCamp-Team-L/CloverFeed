import loginclover from "../assets/loginclover.svg";
import GreenButton from "../components/GreenButton";

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="bg-white flex flex-col justify-center mx-auto min-h-screen gap-20 px-5 py-20 overflow-hidden w-full sm:w-[393px] lg:w-[393px]"
        // style={{ width: '393px' }}
      >
        <p className="font-pre text-[24px] font-bold text-center">Welcome</p>
        <img src={loginclover} alt="로그인클로버" />
        <div className="flex justify-center items-center">
          <GreenButton text="나의 피드백 확인하러 가기" nextpage="/Mainpage" />
        </div>
      </div>
    </div>
  );
}

export default Login;
