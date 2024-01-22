import { useNavigate } from "react-router-dom";

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
      <div className="flex flex-col justify-center gap-3.5">
        <img src={iconSrc} alt="Chart Icon" className="h-[30px] mt-1" />
        <p className="font-pre text-[14px] font-bold">피드백 차트</p>
      </div>
    </button>
  );
};

export default ChartButton;
