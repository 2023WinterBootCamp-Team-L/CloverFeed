import loginclover from "../assets/loginclover.svg";
import GreenButton from "../components/GreenButton";

function Signup() {
  const nextpage = "/GoSignup";
  return (
    <div
      className="bg-white flex flex-col mx-auto h-screen gap-20 px-5 py-[137px]"
      style={{ width: "393px" }}
    >
      <p className="font-pre text-[24px] font-bold text-center">Welcome</p>
      <div className="flex flex-col items-center">
        <img src={loginclover} alt="로그인클로버" />
      </div>
      <div className="flex justify-center items-center">
        <GreenButton text="회원가입 및 로그인" nextpage={nextpage} />
      </div>
    </div>
  );
}

export default Signup;
