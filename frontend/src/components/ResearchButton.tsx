import Image from "next/image";
import { useRouter } from "next/navigation";

interface ResearchButtonProps {
  researchpage: string;
}

const ResearchButton: React.FC<ResearchButtonProps> = ({ researchpage }) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(researchpage);
  };

  return (
    <button onClick={handleButtonClick}>
      <div className="flex flex-col justify-center gap-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <Image
          src="/common/researchicon.svg"
          width={50}
          height={50}
          alt="Research Icon"
          className="h-[40px] ml-1.5"
        />
        <p className="font-pre text-[14px] font-bold">피드백 검색</p>
      </div>
    </button>
  );
};

export default ResearchButton;
