import SignupAnswer from "../components/SignupAnswer";
import { useState } from "react";
import SuccessButton from "../components/SuccessButton";
import GologinButton from "../components/GologinButton";
import axios from "axios";
function Gosignup() {
  const [emailanswerInputs, setemailAnswerInputs] = useState("");
  const [nameanswerInputs, setnameAnswerInputs] = useState("");
  const [pwanswerInputs, setpwAnswerInputs] = useState("");
  const [pwcheckanswerInputs, setpwcheckAnswerInputs] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false); // Added state for password validation
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
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
          "입력되지 않은 항목이 있습니다. 모든 항목을 입력하세요."
        );
        return;
      }
      // 이메일 유효성 검사
      if (!emailValidationRegex.test(emailanswerInputs)) {
        setErrorMessage("올바른 이메일 형식이 아닙니다.");
        return;
      }
      // 비밀번호 일치여부 확인
      if (pwanswerInputs !== pwcheckanswerInputs) {
        setErrorMessage("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        return;
      }
      // API request
      const response = await axios.post(
        "http://localhost:8000/api/user/auth/signup/",
        {
          username: nameanswerInputs,
          email: emailanswerInputs,
          password: pwanswerInputs,
        }
      );
      //성공적인 응답처리
      if (response.data.status === "success") {
        // Optionally, you can do something on successful signup
        console.log(
          "회원가입이 성공적으로 완료되었습니다.",
          response.data.message
        );
      } else {
        // 에러 응답처리
        setErrorMessage("회원가입에 실패했습니다. " + response.data.message);
      }
    } catch (error) {
      // 기타 에러
      setErrorMessage("오류가 발생했습니다. 다시 시도해주세요.");
      console.error("Signup error:", error);
    }
  };

  return (
    <div
      className="bg-emerald-50 flex flex-col overflow-hidden max-w-[24.56rem]
    mx-auto h-screen gap-[20px] px-22px py-[48px] rounded-3xl"
    >
      <div className="mb-2">
        <div className="pt-8 pl-[85px] mb-1 text-sm text-left flex-row gap-3 flex items-center">
          Email입력
        </div>
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
          <SuccessButton onClick={handleSignup} disabled={!isPasswordValid} />
        </span>
      </div>
      <div>
        <center>
          <GologinButton />
        </center>
      </div>
      {errorMessage && (
        <p style={{ color: "red", textAlign: "center" }}>{errorMessage}</p>
      )}
    </div>
  );
}
export default Gosignup;
