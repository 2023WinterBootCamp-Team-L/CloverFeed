import { useRouter } from "next/navigation";
import Image from "next/image";

interface BackButtonProps {
  back?: boolean;
  page?: string;
  onClick?: () => void;
}

const BackButton = ({ page, back = true, onClick }: BackButtonProps) => {
  const router = useRouter();

  const handleButtonClick = () => {
    if (onClick) {
      onClick();
    }
    if (page) {
      router.push(page);
    }
  };

  return (
    <button
      className={`${
        back
          ? "bg-white border-c-indigo border-[0.1rem]"
          : "bg-c-indigo border-c-indigo border-[0.1rem]"
      } rounded-full h-9 w-9 min-w-7 min-h-7 flex items-center justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}
      onClick={handleButtonClick}
    >
      <Image
        src={back ? "/common/backarrow.svg" : "/common/nextarrow.svg"}
        width={50}
        height={50}
        alt={back ? "뒤로가기" : "다음으로"}
        className={`${back ? "mr-1" : "ml-1"} h-5 w-5`}
      />
    </button>
  );
};

export default BackButton;
