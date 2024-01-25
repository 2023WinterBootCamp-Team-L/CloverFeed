import loginclover from '../assets/loginclover.svg';
import GreenButton from '../components/GreenButton';

function Login() {
  const nextpage = '/Mainpage';
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="bg-white flex flex-col items-center relative min-h-screen gap-20 px-5 py-10 overflow-hidden  w-full sm:w-[393px] lg:w-[393px]"
        // style={{ width: '393px' }}
      >
        <div className="w-full h-full flex flex-1 flex-col justify-center items-center">
          <p className="font-pre text-[24px] font-bold text-center">Welcome</p>
        </div>
        <div className="w-full h-full flex flex-1 flex-col justify-center items-center">
          <img src={loginclover} alt="로그인클로버" />
        </div>
        <div className="w-full h-full flex flex-1 flex-col justify-center items-center mb-4">
          <GreenButton text="나의 피드백 확인하러 가기" nextpage={nextpage} />
        </div>
      </div>
    </div>
  );
}

export default Login;
