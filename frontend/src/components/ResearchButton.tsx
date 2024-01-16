import { useNavigate } from 'react-router-dom';

interface ResearchButtonProps {
  iconSrc: string; // 이미지 소스는 문자열로 표현
  researchpage: string;
}

const ResearchButton: React.FC<ResearchButtonProps> = ({
  iconSrc,
  researchpage,
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(researchpage);
  };

  return (
    <button onClick={handleButtonClick}>
      <img src={iconSrc} alt="Research Icon" />
    </button>
  );
};

export default ResearchButton;
