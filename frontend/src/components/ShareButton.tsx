import { useNavigate } from "react-router-dom";

interface ShareButtonProps {
  iconSrc: string; // 이미지 소스는 문자열로 표현

  sharepage: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ iconSrc, sharepage }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(sharepage);
  };

  return (
    <button onClick={handleButtonClick}>
      <div className="flex flex-col justify-center gap-2">
        <img src={iconSrc} alt="Share Icon" className="h-[40px]" />
        <p className="font-pre text-[14px] font-bold">질문폼 공유</p>
      </div>
    </button>
  );
};

export default ShareButton;
