import { useState } from 'react';

function SuccessButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    // 버튼 클릭 시 상태 변경
    setIsClicked(true);
  };

  return (
    <div>
      <button
        id="signupButton"
        className={`bg-c-green text-white w-80 h-12 rounded-xl mt-0 text-lg${
          isClicked ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
        }mx-auto`}
        onClick={handleButtonClick}
        disabled={isClicked}
      >
        {isClicked ? '회원가입 완료' : '회원가입'}
      </button>
    </div>
  );
}

export default SuccessButton;
