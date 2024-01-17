import SignupAnswer from '../components/SignupAnswer';
import { useState, useEffect } from 'react';
import SuccessButton from '../components/SuccessButton';
import GologinButton from '../components/GologinButton';
import OverlapButton from '../components/OverlapButton';
import axios from 'axios';

function Gosignup() {
  const [emailanswerInputs, setemailAnswerInputs] = useState('');
  const [nameanswerInputs, setnameAnswerInputs] = useState('');
  const [pwanswerInputs, setpwAnswerInputs] = useState('');
  const [pwcheckanswerInputs, setpwcheckAnswerInputs] = useState('');

  const onInputChangeemail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setemailAnswerInputs(e.target.value);
  };
  const onInputChangename = (e: React.ChangeEvent<HTMLInputElement>) => {
    setnameAnswerInputs(e.target.value);
  };
  const onInputChangepw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpwAnswerInputs(e.target.value);
  };
  const onInputChangepwcheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpwcheckAnswerInputs(e.target.value);
  };

  useEffect(() => {
    const UserSignup = async (e) => {
      e.PreventDefault();
      const SignupData = new SignupData();
      SignupData.append('EmailData', emailanswerInputs);
      SignupData.append('UserNameData', nameanswerInputs);
      SignupData.append('PasswordData', pwanswerInputs);

      const response = await axios.post(
        'http://localhost:5173/user/auth/signup',
        SignupData,
        {
          headers: {
            'Content-Type': 'multipart/Signup-Data',
          },
        }
      );
    };
  });

  return (
    <div
      className="bg-emerald-50 flex flex-col overflow-hidden max-w-[24.56rem]
    mx-auto h-screen gap-[20px] px-22px py-[48px] rounded-3xl"
    >
      <div className="mb-2">
        <p className="pt-8 pl-[85px] mb-1 text-sm text-left flex-row gap-3 flex items-center">
          Email입력
          <OverlapButton />
        </p>

        <div>
          {/* 컴포넌트를 나란히 정렬하기 위해 flex 컨테이너 추가 */}
          <center>
            <SignupAnswer
              value={emailanswerInputs}
              onChange={onInputChangeemail}
            />
          </center>
        </div>
      </div>
      <div className="mb-2">
        <center>
          <p className="pt-8 pl-[85px] mb-1 text-sm text-left">
            이름(또는 닉네임)
          </p>
          <SignupAnswer value={nameanswerInputs} onChange={onInputChangename} />
        </center>
      </div>
      <div className="mb-2">
        <p className="pt-8 pl-[85px] mb-1 text-sm text-left">비밀번호 입력</p>
        <center>
          <SignupAnswer value={pwanswerInputs} onChange={onInputChangepw} />
        </center>
      </div>
      <div className="mb-8">
        <p className="pt-8 pl-[85px] mb-1 text-sm text-left">비밀번호 확인</p>
        <center>
          <SignupAnswer
            value={pwcheckanswerInputs}
            onChange={onInputChangepwcheck}
          />
        </center>
      </div>
      <div>
        <span className="flex justify-center">
          <SuccessButton />
        </span>
      </div>
      <div>
        <center>
          <GologinButton />
        </center>
      </div>
    </div>
  );
}

export default Gosignup;
