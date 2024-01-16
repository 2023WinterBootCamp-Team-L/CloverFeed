import { useNavigate } from 'react-router-dom';

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
      <img src={iconSrc} alt="Share Icon" />
    </button>
  );
};

export default ShareButton;
