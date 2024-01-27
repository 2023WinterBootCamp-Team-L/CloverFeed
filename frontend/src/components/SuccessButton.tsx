import { useState } from 'react';
interface SuccessButtonProps {
  text: string;
  onClick: () => void; // 수정된 부분
  disabled: boolean;
}
function SuccessButton({ text, onClick }: SuccessButtonProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const handleButtonClick = () => {
    // 버튼 클릭 시 상태 변경
    setIsClicked(!setIsClicked);
    setIsDisabled(!setIsDisabled);
    onClick();
  };
  return (
    <div>
      <button
        id="signupButton"
        className={`bg-c-green text-white h-12 rounded-lg font-pre text-[14px] min-w-[300px] sm:w-[320px] lg:w-[332px]${
          isClicked ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
        } mx-auto`}
        onClick={handleButtonClick}
        disabled={isDisabled || isClicked}
      >
        {text}
      </button>
    </div>
  );
}
export default SuccessButton;
