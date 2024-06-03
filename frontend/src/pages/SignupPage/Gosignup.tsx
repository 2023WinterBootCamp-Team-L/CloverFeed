import SignupAnswer from '../../components/Answer/SignupAnswer';
import { useState, useEffect } from 'react';
import SuccessButton from '../../components/SuccessButton';
import GologinButton from '../../components/Login/Button/GologinButton';
import axios from 'axios';

const EMAIL_VALIDATION_REGEX =
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function SignupGo() {
  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    password: '',
    passwordCheck: '',
  });
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
    setErrorMessage(null);
  };

  const validateInputs = () => {
    const { email, name, password, passwordCheck } = inputs;
    if (!email || !name || !password || !passwordCheck) {
      return '입력되지 않은 항목이 있습니다. 모든 항목을 입력하세요.';
    }
    if (!EMAIL_VALIDATION_REGEX.test(email)) {
      return '올바른 이메일 형식이 아닙니다.';
    }
    if (password !== passwordCheck) {
      return '비밀번호와 비밀번호 확인이 일치하지 않습니다.';
    }
    return null;
  };

  const handleSignup = async () => {
    const error = validateInputs();
    if (error) {
      setErrorMessage(error);
      return;
    }

    try {
      const response = await axios.post(
        'https://cloverfeed.kr/api/user/auth/signup/',
        {
          username: inputs.name,
          email: inputs.email,
          password: inputs.password,
        }
      );
      if (response.data.status === 'success') {
        setIsComplete(true);
      } else {
        setErrorMessage('회원가입에 실패했습니다. ' + response.data.message);
      }
    } catch (error) {
      setErrorMessage('오류가 발생했습니다. 다시 시도해주세요.');
      console.error('Signup error:', error);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setErrorMessage(null);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [errorMessage]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-c-emerald bg-opacity-35 flex flex-col items-center justify-center mx-auto min-h-screen gap-10 px-5 py-16 w-full sm:w-[393px] lg:w-[393px]">
        {['email', 'name', 'password', 'passwordCheck'].map((field) => (
          <div className="flex flex-col items-start mb-4" key={field}>
            <p className="font-pre text-[14px] font-bold">
              {field === 'email'
                ? 'Email입력'
                : field === 'name'
                  ? '이름(또는 닉네임)'
                  : field === 'password'
                    ? '비밀번호 입력'
                    : '비밀번호 확인'}
            </p>
            <SignupAnswer
              type={field === 'email' ? 'text' : 'password'}
              name={field}
              value={inputs[field]}
              onChange={handleChange}
            />
          </div>
        ))}

        <div className="flex items-center flex-col gap-3">
          <SuccessButton
            onClick={handleSignup}
            disabled={!isPasswordValid}
            text={isComplete ? '회원가입 완료' : '회원가입'}
          />
          <p className="overflow-y-auto">
            <GologinButton />
          </p>
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

export default SignupGo;
