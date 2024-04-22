import Image from "next/image";
import { useRouter } from "next/navigation";

interface ChartButtonProps {
  chartpage: string;
}

const ChartButton: React.FC<ChartButtonProps> = ({ chartpage }) => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(chartpage);
  };

  return (
    <button onClick={handleButtonClick}>
      <div className="flex flex-col justify-center gap-3.5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <Image
          src="/common/charticon.svg"
          width={50}
          height={50}
          alt="Chart Icon"
          className="h-[30px] mt-1 ml-1.5"
        />
        <p className="font-pre text-[14px] font-bold">피드백 차트</p>
      </div>
    </button>
  );
};

export default ChartButton;
