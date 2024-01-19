import { useState } from "react";
import LoginModal from "../components/LoginModal";
import { useNavigate } from "react-router-dom";
import SignupAnswer from "./SignupAnswer";
import axios from "axios";

function GologinButton() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button
            onClick={handleLogin}
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
