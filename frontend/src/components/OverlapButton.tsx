import { useState } from 'react';

function OverlapButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    // 버튼 클릭 시 상태 변경
    setIsClicked(true);
  };

  return (
    <div>
      <button
        id="signupButton"
        className={`bg-c-green text-white w-16 h-4 rounded-md mt-0${
          isClicked ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
        }mx-auto text-xs pt-0`}
        onClick={handleButtonClick}
        disabled={isClicked}
      >
        {isClicked ? '사용 가능' : '중복 확인'}
      </button>
    </div>
  );
}

export default OverlapButton;
