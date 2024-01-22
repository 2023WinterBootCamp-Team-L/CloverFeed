import { useState, useEffect } from "react";
import LoginModal from "../components/LoginModal";
import { useNavigate } from "react-router-dom";
import SignupAnswer from "./SignupAnswer";
import axios from "axios";
function GologinButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigate = useNavigate();

  const SuccessLogin = () => {
    navigate("/login");
  };
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const [emailanswerInputs, setemailAnswerInputs] = useState("");
  const [pwanswerInputs, setpwAnswerInputs] = useState("");

  const onInputChangeemail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setemailAnswerInputs(e.target.value);
  };

  const onInputChangepw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpwAnswerInputs(e.target.value);
  };

  const emailValidationRegex =
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleLogin = async () => {
    try {
      setErrorMessage("");
      if (!emailanswerInputs || !pwanswerInputs) {
        setErrorMessage(
          "입력되지 않은 항목이 있습니다. 모든 항목을 입력하세요."
        );
        return;
      }
      // 이메일 유효성 검사
      if (!emailValidationRegex.test(emailanswerInputs)) {
        setErrorMessage("올바른 이메일 형식이 아닙니다.");
        return;
      }
      const response = await axios.post(
        "http://localhost:8000/api/user/auth/login/",
        {
          email: emailanswerInputs,
          password: pwanswerInputs,
        }
      );
      if (response.data.status === "success") {
        //로그인 성공
        console.log("로그인 성공", response.data);
        SuccessLogin();
      } else {
        //로그인 실패
        console.error("로그인에 실패했습니다.", response.data);
        setErrorMessage(
          "로그인에 실패했습니다. 이메일 또는 비밀번호가 올바르지 않습니다."
        );
      }
    } catch (error) {
      console.error("로그인 에러", error);
      setErrorMessage(
        "로그인 중 오류가 발생했습니다. 나중에 다시 시도해주세요."
      );
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
    <div>
      <button className="font-pre text-[14px] underline" onClick={toggleModal}>
        로그인하러가기
      </button>
      <LoginModal isOpen={isOpen} toggle={toggleModal}>
        <div className="flex flex-col items-center gap-10 px-5 py-8">
          <div className="flex flex-col items-start gap-2">
            <p className="font-pre text-[14px] font-bold">Email 입력</p>
            <SignupAnswer
              value={emailanswerInputs}
              onChange={onInputChangeemail}
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="font-pre text-[14px] font-bold">비밀번호 입력</p>
            <SignupAnswer value={pwanswerInputs} onChange={onInputChangepw} />
          </div>

          <button
            onClick={handleLogin}
            className="bg-c-green text-white w-56 h-10 rounded-lg font-pre text-[14px]"
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
    </div>
  );
}
export default GologinButton;
