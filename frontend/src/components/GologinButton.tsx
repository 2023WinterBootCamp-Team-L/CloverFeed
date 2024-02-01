import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoginModal from '../components/LoginModal';
import SignupAnswer from './SignupAnswer';
import Modal from './Modal';

interface ApiResponse {
  status: string;
  feedbackform: string;
  error_code?: string;
  message?: string;
}

function GologinButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [queryIsOpen, setQueryIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const toggleModal = () => setIsOpen(!isOpen);
  const queyryToggleModal = () => setQueryIsOpen(!queryIsOpen);

  const [emailanswerInputs, setemailAnswerInputs] = useState('');
  const [pwanswerInputs, setpwAnswerInputs] = useState('');

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setState(e.target.value);
  };

  const emailValidationRegex =
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleLogin = async () => {
    try {
      setErrorMessage('');
      if (!emailanswerInputs || !pwanswerInputs) {
        setErrorMessage(
          '입력되지 않은 항목이 있습니다. 모든 항목을 입력하세요.'
        );
        return;
      }

      if (!emailValidationRegex.test(emailanswerInputs)) {
        setErrorMessage('올바른 이메일 형식이 아닙니다.');
        return;
      }

      const response = await axios.post(
        'http://localhost:8000/api/user/auth/login/',
        {
          email: emailanswerInputs,
          password: pwanswerInputs,
        }
      );

      if (response.data.status === 'success') {
        localStorage.setItem('user_id', response.data.user_id.toString());
        localStorage.setItem('user_name', response.data.user_name.toString());
        // SuccessLogin 함수를 호출하여 피드백폼 유무를 확인
        SuccessLogin();
      } else {
        setErrorMessage(
          '로그인에 실패했습니다. 이메일 또는 비밀번호가 올바르지 않습니다.'
        );
      }
    } catch (error) {
      console.error('로그인 에러', error);
      setErrorMessage(
        '로그인 중 오류가 발생했습니다. 나중에 다시 시도해주세요.'
      );
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setErrorMessage(null);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [errorMessage]);

  // 로그인 성공 시 피드백폼 유무 조회
  const SuccessLogin = async () => {
    const storedUserid = localStorage.getItem('user_id');
    if (storedUserid) {
      try {
        const response = await axios.get<ApiResponse>(
          `http://localhost:8000/api/form/?user_id=${storedUserid}`
        );

        if (response.data.status === 'success') {
          if (response.data.feedbackform === 'true') {
            navigate('/login');
          } else {
            // 질문폼이 없을 경우 모달을 열고 메시지를 표시
            setQueryIsOpen(true);
          }
        } else {
          console.log('API 응답:', response.data);
        }
      } catch (error) {
        console.error('API 호출 에러:', error);
      }
    }
  };

  return (
    <div>
      <button
        className="font-pre text-[14px] underline transition ease-in-out delay-150 hover:-translate hover:bg-gray-300 duration-300 border-c-green rounded"
        onClick={toggleModal}
      >
        로그인하러가기
      </button>
      <LoginModal isOpen={isOpen} toggle={toggleModal}>
        <div
          className="flex flex-col items-center gap-10 px-5 py-8 sm:w-[260px] md:w-[270px] lg:w-[280px]"
          style={{
            maxHeight: '80vh',
            overflowY: 'auto',
          }}
        >
          {['Email', '비밀번호'].map((label, index) => (
            <div key={index} className="flex flex-col items-start mb-2">
              <p className="font-pre text-[14px] font-bold">{`${label} 입력`}</p>
              <SignupAnswer
                type={index === 0 ? 'text' : 'password'}
                value={index === 0 ? emailanswerInputs : pwanswerInputs}
                onChange={(e) =>
                  onInputChange(
                    e,
                    index === 0 ? setemailAnswerInputs : setpwAnswerInputs
                  )
                }
              />
            </div>
          ))}
          <button
            onClick={handleLogin}
            className="bg-c-green text-white w-56 h-10 min-h-10 rounded-lg font-pre text-[14px] min-w-56 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-500 duration-300"
          >
            로그인
          </button>
          {errorMessage && (
            <p className="font-pre text-[14px] font-bold text-red-400">
              {errorMessage}
            </p>
          )}
        </div>
      </LoginModal>

      {/* 피드백 폼이 없을 경우 모달 렌더링 */}
      <Modal isOpen={queryIsOpen} toggle={queyryToggleModal}>
        <div className="flex flex-col items-center gap-3">
          <p className="font-pre text-[16px] font-bold">
            아직 완성된 질문 폼이 없어요.
          </p>
          <p className="font-pre text-[16px] font-bold text-center text-c-green">
            질문 폼을 완성해야
          </p>
          <p className="font-pre text-[16px] font-bold text-center text-c-green">
            피드백 결과를 확인할 수 있어요.
          </p>
          <button
            className="bg-c-indigo text-white w-full p-2 rounded-lg mt-4 font-pre text-[16px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-900 duration-300"
            onClick={() => {
              navigate('/QueryMain');
              setQueryIsOpen(false);
            }}
          >
            질문 폼 생성하러 가기
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default GologinButton;
