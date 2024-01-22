import { useNavigate } from "react-router-dom";

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
      <div className="flex flex-col justify-center gap-2">
        <img src={iconSrc} alt="Research Icon" className="h-[40px]" />
        <p className="font-pre text-[14px] font-bold">피드백 검색</p>
      </div>
    </button>
  );
};

export default ResearchButton;
