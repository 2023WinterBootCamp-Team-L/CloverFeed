import SignupAnswer from '../components/SignupAnswer';
import { useState, useEffect } from 'react';
import SuccessButton from '../components/SuccessButton';
import GologinButton from '../components/GologinButton';
import axios from 'axios';

function Gosignup() {
  const [emailanswerInputs, setemailAnswerInputs] = useState('');
  const [nameanswerInputs, setnameAnswerInputs] = useState('');
  const [pwanswerInputs, setpwAnswerInputs] = useState('');
  const [pwcheckanswerInputs, setpwcheckAnswerInputs] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false); // Added state for password validation
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  const onInputChangeemail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setemailAnswerInputs(e.target.value);
    // You might want to add email validation logic here
    setErrorMessage(null);
  };
  const onInputChangename = (e: React.ChangeEvent<HTMLInputElement>) => {
    setnameAnswerInputs(e.target.value);
  };
  const onInputChangepw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpwAnswerInputs(e.target.value);
    setIsPasswordValid(false);
  };
  const onInputChangepwcheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpwcheckAnswerInputs(e.target.value);
    setIsPasswordValid(false);
  };
  const emailValidationRegex =
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleSignup = async () => {
    try {
      //필수 입력값 확인
      if (
        !emailanswerInputs ||
        !nameanswerInputs ||
        !pwanswerInputs ||
        !pwcheckanswerInputs
      ) {
        setErrorMessage(
          '입력되지 않은 항목이 있습니다. 모든 항목을 입력하세요.'
        );
        return;
      }
      // 이메일 유효성 검사
      if (!emailValidationRegex.test(emailanswerInputs)) {
        setErrorMessage('올바른 이메일 형식이 아닙니다.');
        return;
      }
      // 비밀번호 일치여부 확인
      if (pwanswerInputs !== pwcheckanswerInputs) {
        setErrorMessage('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
        return;
      }

      // API request
      const response = await axios.post(
        'http://localhost:8000/api/user/auth/signup/',
        {
          username: nameanswerInputs,
          email: emailanswerInputs,
          password: pwanswerInputs,
        }
      );
      //성공적인 응답처리
      if (response.data.status === 'success') {
        console.log(
          '회원가입이 성공적으로 완료되었습니다.',
          response.data.message
        );
        setIsComplete(true);
      } else {
        // 에러 응답처리
        setErrorMessage('회원가입에 실패했습니다. ' + response.data.message);
      }
    } catch (error) {
      // 기타 에러
      setErrorMessage('오류가 발생했습니다. 다시 시도해주세요.');
      console.error('Signup error:', error);
    }
  };

  useEffect(() => {
    // errorMessage가 변경되면 3초 후에 null로 설정하여 사라지게 함
    const timeoutId = setTimeout(() => {
      setErrorMessage(null);
    }, 3000);

    // useEffect 클린업 함수에서 타이머 제거
    return () => clearTimeout(timeoutId);
  }, [errorMessage]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="bg-c-emerald bg-opacity-35 flex flex-col mx-auto items-center min-h-screen gap-10 px-5 py-16 overflow-hidden  w-full sm:w-[393px] lg:w-[393px]"
        // style={{ width: '393px' }}
      >
        <div className="flex flex-col items-start mb-4">
          <p className="font-pre text-[14px] font-bold">Email입력</p>
          <SignupAnswer
            value={emailanswerInputs}
            onChange={onInputChangeemail}
          />
        </div>

        <div className="flex flex-col items-start mb-4">
          <p className="font-pre text-[14px] font-bold">이름(또는 닉네임)</p>
          <SignupAnswer value={nameanswerInputs} onChange={onInputChangename} />
        </div>

        <div className="flex flex-col items-start mb-4">
          <p className="font-pre text-[14px] font-bold">비밀번호 입력</p>
          <SignupAnswer value={pwanswerInputs} onChange={onInputChangepw} />
        </div>

        <div className="flex flex-col items-start mb-8">
          <p className="font-pre text-[14px] font-bold">비밀번호 확인</p>
          <SignupAnswer
            value={pwcheckanswerInputs}
            onChange={onInputChangepwcheck}
          />
        </div>

        <div className="flex flex-col gap-3 justify-center items-center ">
          <SuccessButton
            onClick={handleSignup}
            disabled={!isPasswordValid}
            text={isComplete ? '회원가입 완료' : '회원가입'}
          />
          <GologinButton />
        </div>

        {errorMessage && (
          <p className="font-pre text-[14px] font-bold text-red-400">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
}
export default Gosignup;
