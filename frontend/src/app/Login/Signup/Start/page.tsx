import Image from 'next/image';
import GreenButton from '../../../../components/GreenButton';

function SignupStart() {
  const nextpage = '/GoSignup';

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-c-emerald bg-opacity-35 flex flex-col justify-center mx-auto min-h-screen gap-20 px-5 py-20 overflow-hidden w-full sm:w-[393px] lg:w-[393px]">
        <p className="font-pre text-[24px] font-bold text-center">Welcome</p>
        <div className="flex flex-col items-center">
          <Image
            src="/assets/Login/loginclover.svg"
            alt="로그인클로버"
            width={295}
            height={295}
          />
        </div>
        <div className="flex justify-center items-center">
          <GreenButton text="회원가입 및 로그인" nextpage={nextpage} />
        </div>
      </div>
    </div>
  );
}

export default SignupStart;
