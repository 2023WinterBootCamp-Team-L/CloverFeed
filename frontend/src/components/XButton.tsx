import { useNavigate } from "react-router-dom";
import XMark from "../assets/XMark.svg";

interface XButtonProps {
  nextpage: string;
}

const XButton = ({ nextpage }: XButtonProps) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(nextpage);
  };

  return (
    <button onClick={handleButtonClick}>
      <img src={XMark} />
    </button>
  );
};

export default XButton;
