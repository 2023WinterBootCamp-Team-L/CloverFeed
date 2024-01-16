import { useState } from 'react';
import LoginModal from '../components/LoginModal';
import { useNavigate } from 'react-router-dom';
import SignupAnswer from './SignupAnswer';

function GologinButton() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const SuccessLogin = () => {
    navigate('/login');
  };
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  const [emailanswerInputs, setemailAnswerInputs] = useState('');
  const [pwanswerInputs, setpwAnswerInputs] = useState('');

  const onInputChangeemail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setemailAnswerInputs(e.target.value);
  };
  const onInputChangepw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpwAnswerInputs(e.target.value);
  };

  return (
    <div>
      <button className="text-xs text-black underline" onClick={toggleModal}>
        로그인하러가기
      </button>
      <LoginModal isOpen={isOpen} toggle={toggleModal}>
        <div>
          <p className="pt-8 pl-1 mb-1 text-sm text-left">Email 입력</p>
          <SignupAnswer
            value={emailanswerInputs}
            onChange={onInputChangeemail}
          />
          <p className="pt-8 pl-1 mb-1 text-sm text-left">비밀번호 입력</p>
          <SignupAnswer value={pwanswerInputs} onChange={onInputChangepw} />
          <button
            onClick={SuccessLogin}
            className="bg-c-green text-white w-full px-2 py-2 rounded-xl mt-12 text-lg"
          >
            로그인
          </button>
        </div>
      </LoginModal>
    </div>
  );
}

export default GologinButton;
