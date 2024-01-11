import { useNavigate } from "react-router-dom";
import plus from "../assets/plus.svg";

interface QuestAddProps {
  text: string;
}

const QuestAdd: React.FC<QuestAddProps> = ({ text }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <button
      className={
        "bg-white border-emerald-200 border-2 text-black rounded-lg h-12 text-left px-4 text-sm leading-1.25 flex items-center justify-between"
      }
    >
      {text}
      <button onClick={handleButtonClick}>
        <img src={plus} alt="Plus Icon" className="h-4 w-4" />
      </button>
    </button>
  );
};

export default QuestAdd;
