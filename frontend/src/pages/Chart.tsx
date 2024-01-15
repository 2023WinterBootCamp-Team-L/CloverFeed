import BackButton from "../components/BackButton";
import Line from "../components/Line";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Tag from "../components/Tag";
import 개발자 from "../assets/PMPO.svg";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const SkillChart = () => {
  const Data = {
    labels: ["박학다식", "기획력", "의견 다양성", "기타"],
    datasets: [
      {
        data: [35, 23, 17, 8],
        backgroundColor: ["#D5FBE5", "#F9C7C7", "#E2E9FF", "#EDD0F5"],
        borderColor: ["#D5FBE5", "#F9C7C7", "#E2E9FF", "#EDD0F5"],
      },
    ],
  };

  const Options = {
    plugins: {
      legend: {
        display: true,
        labels: {
          fontSize: 10,
          boxWidth: 10,
          boxHeight: 10,
          color: "black",
        },
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        color: "black",
        textAlign: "center",
        formatter: function (value: number, context: any) {
          // 타입을 명시적으로 지정
          const dataLabel = Data.labels[context.dataIndex];
          const total = Data.datasets[0].data.reduce(
            (acc: number, curr: number) => acc + curr,
            0
          );
          const percentage = ((value / total) * 100).toFixed(1); // 퍼센테이지 값을 소수점 한 자리수까지 표시
          return `${dataLabel}\n${percentage}%`;
        },
      },
    },
  };

  const generateSentence = () => {
    const [first, second, third] = Data.labels.slice(0, 3);
    const sentence = `당신은 ${first}, ${second}, ${third}한 사람이네요`;
    return sentence;
  };

  return (
    <div className="flex flex-col justify-center w-full gap-2">
      <p className="text-sm">{generateSentence()}</p>
      <Doughnut data={Data} options={Options}></Doughnut>
    </div>
  );
};

function Chart() {
  return (
    <div className="bg-c-emerald bg-opacity-30 flex flex-col overflow-hidden w-[24.56rem] mx-auto h-full px-5 py-8 gap-4 overflow-y-auto overflow:hidden">
      <Tag text="개발자" image={개발자} color="bg-c-green" />
      <div className="flex justify-between">
        <BackButton back page="/" />
      </div>
      <p className="text-2xl">피드백 차트</p>
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex flex-row justify-start">
            <div className="flex flex-col justify-center items-center">
              <p className="">업무 능력 강점</p>
              <Line />
            </div>
          </div>
          {/* 차트 및 요약 */}
          <SkillChart />
        </div>
        <div className="space-y-2">
          <div className="flex flex-row justify-start">
            <div className="flex flex-col justify-center items-center">
              <p className="">성격 및 태도</p>
              <Line />
            </div>
          </div>
          {/* 차트 및 요약 */}
          <SkillChart />
        </div>
        <div className="space-y-2">
          <div className="flex flex-row justify-start">
            <div className="flex flex-col justify-center items-center">
              <p className="">칭찬할 점</p>
              <Line />
            </div>
          </div>
          {/* 차트 및 요약 */}
          <SkillChart />
        </div>
        <div className="space-y-2">
          <div className="flex flex-row justify-start">
            <div className="flex flex-col justify-center items-center">
              <p className="">보완할 점</p>
              <Line />
            </div>
          </div>
          {/* 차트 및 요약 */}
          <SkillChart />
        </div>
      </div>
    </div>
  );
}

export default Chart;
