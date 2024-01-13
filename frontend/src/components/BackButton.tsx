import { useNavigate } from "react-router-dom";
import nextarrow from "../assets/nextarrow.svg";
import backarrow from "../assets/backarrow.svg";

interface BackButtonProps {
  back?: boolean;
  page: string;
  onClick?: () => void;
}

const BackButton = ({ page, back = true, onClick }: BackButtonProps) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    }

    navigate(page);
  };

  return (
    <button
      className={`${
        back
          ? "bg-white border-black border-[0.1rem] text-black"
          : "bg-black border-black border-[0.1rem] text-white"
      } rounded-full h-9 w-9 flex items-center justify-center`}
      onClick={handleButtonClick}
    >
      <img
        src={back ? backarrow : nextarrow}
        className={`${back ? "mr-1" : "ml-1"} h-5 w-5`}
      />
    </button>
  );
};

export default BackButton;
