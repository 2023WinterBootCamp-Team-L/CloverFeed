import { useNavigate } from 'react-router-dom';

interface ChartButtonProps {
  iconSrc: string; // 이미지 소스는 문자열로 표현
  chartpage: string;
}

const ChartButton: React.FC<ChartButtonProps> = ({ iconSrc, chartpage }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(chartpage);
  };

  return (
    <button onClick={handleButtonClick}>
      <img src={iconSrc} alt="Chart Icon" />
    </button>
  );
};

export default ChartButton;
