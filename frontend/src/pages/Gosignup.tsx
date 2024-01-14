import SignupAnswer from '../components/SignupAnswer';
import { useState } from 'react';
import SuccessButton from '../components/SuccessButton';
import GologinButton from '../components/GologinButton';

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

  return (
    <div
      className="bg-emerald-50 flex flex-col overflow-hidden max-w-[24.56rem]
    mx-auto h-screen gap-[42px] px-22px py-36px rounded-3xl"
    >
      <div className="mb-2">
        <p className="pt-8 pl-12 mb-0 text-xs text-left">Email입력</p>

        <SignupAnswer value={emailanswerInputs} onChange={onInputChangeemail} />
      </div>
      <div className="mb-2">
        <p className="pt-8 pl-8 mb-0 text-xs text-left">이름</p>
        <SignupAnswer value={nameanswerInputs} onChange={onInputChangename} />
      </div>
      <div className="mb-2">
        <p className="pt-8 pl-8 mb-0 text-xs text-left">비밀번호 입력</p>
        <SignupAnswer value={pwanswerInputs} onChange={onInputChangepw} />
      </div>
      <div className="mb-8">
        <p className="pt-8 pl-8 mb-0 text-xs text-left">비밀번호 확인</p>
        <SignupAnswer
          value={pwcheckanswerInputs}
          onChange={onInputChangepwcheck}
        />
      </div>
      <div>
        <span className="flex justify-center">
          <SuccessButton />
        </span>
      </div>
      <div className="flex justify--center">
        <GologinButton />
      </div>
    </div>
  );
}

export default Gosignup;
