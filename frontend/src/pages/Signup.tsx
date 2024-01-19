import loginclover from "../assets/loginclover.svg";
import GreenButton from "../components/GreenButton";

function Signup() {
  const nextpage = "/GoSignup";
  return (
    <div
      className="bg-white flex flex-col items-center justify-center
    overflow-hidden max-w-[24.56rem] mx-auto h-screen"
    >
      <div className="mb-16 text-center">
        <center>
          <p className="text-4xl">Welcome</p>
        </center>
      </div>
      <div className="mb-24 text-center">
        <center>
          <img src={loginclover} alt="로그인클로버" />
        </center>
      </div>
      <div>
        <center>
          <GreenButton text="회원가입 및 로그인" nextpage={nextpage} />
        </center>
      </div>
    </div>
  );
}

export default Signup;
