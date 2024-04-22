"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface LogoutButtonProps {
  logoutpage: string;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ logoutpage }) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(logoutpage);
  };

  return (
    <button onClick={handleButtonClick}>
      <Image
        src="/common/logouticon.svg"
        width={20}
        height={20}
        alt="Logout Icon"
        className="transition ease-in-out delay-150  hover:scale-110 duration-300"
      />
    </button>
  );
};

export default LogoutButton;
