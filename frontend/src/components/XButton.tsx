"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import XMark from "../assets/XMark.svg";

interface XButtonProps {
  nextpage: string;
}

const XButton = ({ nextpage }: XButtonProps) => {
  // const navigate = useNavigate();
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(nextpage);
  };

  return (
    <button onClick={handleButtonClick}>
      <Image
        src={XMark}
        alt="가위표 버튼"
        className="transition ease-in-out delay-100 hover:scale-125 duration-300"
      />
    </button>
  );
};

export default XButton;
