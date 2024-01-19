import React, { useEffect } from "react";
import BackButton from "../components/BackButton";
import Line from "../components/Line";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const SkillChart = ({
  data,
}: {
  data: { tag: string; percentage: number }[];
}) => {
  const chartData = {
    labels: data.map((item) => item.tag),
    datasets: [
      {
        data: data.map((item) => item.percentage),
        backgroundColor: [
          "#D5FBE5",
          "#F9C7C7",
          "#F6EED4",
          "#E2E9FF",
          "#EDD0F5",
          "#EEEFF0",
        ],
        borderColor: [
          "#D5FBE5",
          "#F9C7C7",
          "#F6EED4",
          "#E2E9FF",
          "#EDD0F5",
          "#EEEFF0",
        ],
      },
    ],
  };

  const options = {
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
          const dataLabel = chartData.labels[context.dataIndex];
          return `${dataLabel}\n${value}%`;
        },
      },
    },
  };

  // 나중에 퍼센티지, 데이터 개수 나뉘어졌을 때 사용할 코드
  // const total = Data.datasets[0].data.reduce(
  //   (acc: number, curr: number) => acc + curr,
  //   0
  // );
  // const percentage = ((value / total) * 100).toFixed(1); // 퍼센테이지 값을 소수점 한 자리수까지 표시
  // return `${dataLabel}\n${percentage}%`;

  const generateSentence = () => {
    const [first, second, third] = chartData.labels.slice(0, 3);
    const sentence = `당신은 ${first}, ${second}, ${third}있는 사람이네요`;
    return sentence;
  };

  return (
    <div className="flex flex-col justify-center w-full gap-2">
      <p className="text-sm">{generateSentence()}</p>
      <Doughnut data={chartData} options={options}></Doughnut>{" "}
      {/*오류가 나는데 실행은 또 잘됨...*/}
    </div>
  );
};

function Chart() {
  const userId = 1;
  const apiUrl = `http://localhost:8000/api/feedbacks/tags/chart?userid=${userId}`;

  const [workData, setWorkData] = React.useState<
    { tag: string; percentage: number }[]
  >([]);
  const [attitudeData, setAttitudeData] = React.useState<
    { tag: string; percentage: number }[]
  >([]);

  useEffect(() => {
    const getChart = async () => {
      try {
        const response = await axios.get(apiUrl);
        if (response.data.status === "success") {
          setWorkData(response.data.work);
          setAttitudeData(response.data.attitude);
        } else {
          console.error("에러 응답:", response.data.message);
        }
      } catch (error) {
        console.error("네트워크 오류:", error);
      }
    };

    getChart();
  }, [apiUrl]);

  // React.useEffect(() => {
  //   axios
  //     .get(apiUrl)
  //     .then((response: AxiosResponse) => {
  //       if (response.data.status === "success") {
  //         const workTags = response.data.work;
  //         const attitudeTags = response.data.attitude;
  //         setWorkData(workTags);
  //         setAttitudeData(attitudeTags);
  //         console.log("Work Tags:", workTags);
  //         console.log("Attitude Tags:", attitudeTags);
  //       } else {
  //         console.error("사용자를 찾을 수 없습니다.", response.data.message);
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("에러 응답:", error.message);
  //     });
  // }, [apiUrl]);

  //   const dummyApiResponse = {
  //     status: "success",
  //     work: [
  //       {
  //         tag: "효율적인",
  //         percentage: 40,
  //       },
  //       {
  //         tag: "박학다식",
  //         percentage: 20,
  //       },
  //       {
  //         tag: "리더십",
  //         percentage: 20,
  //       },
  //       {
  //         tag: "전략적인",
  //         percentage: 20,
  //       },
  //     ],
  //     attitude: [
  //       {
  //         tag: "경청하는",
  //         percentage: 25,
  //       },
  //       {
  //         tag: "공감 능력",
  //         percentage: 12.5,
  //       },
  //       {
  //         tag: "책임감",
  //         percentage: 12.5,
  //       },
  //       {
  //         tag: "끈기",
  //         percentage: 12.5,
  //       },
  //       {
  //         tag: "성실함",
  //         percentage: 12.5,
  //       },
  //       {
  //         tag: "배려심",
  //         percentage: 12.5,
  //       },
  //     ],
  //   };

  //   if (dummyApiResponse.status === "success") {
  //     const workTags = dummyApiResponse.work;
  //     const attitudeTags = dummyApiResponse.attitude;
  //     setWorkData(workTags);
  //     setAttitudeData(attitudeTags);
  //     console.log("Work Tags:", workTags);
  //     console.log("Attitude Tags:", attitudeTags);
  //   } else {
  //     console.error("Error:", dummyApiResponse.message);
  //   }
  // }, []);

  return (
    <div className="bg-c-blue bg-opacity-30 flex flex-col overflow-hidden w-[24.56rem] mx-auto h-full px-5 py-8 gap-4 overflow-y-auto overflow:hidden">
      <div className="flex justify-between">
        <BackButton back page="/mainpage" />
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
          <SkillChart data={workData} />
        </div>

        <div className="space-y-2">
          <div className="flex flex-row justify-start">
            <div className="flex flex-col justify-center items-center">
              <p className="">성격 및 태도</p>
              <Line />
            </div>
          </div>
          <SkillChart data={attitudeData} />
        </div>

        <div className="space-y-2">
          <div className="flex flex-row justify-start">
            <div className="flex flex-col justify-center items-center">
              <p className="">칭찬할 점</p>
              <Line />
            </div>
          </div>
          {/* 워드클라우드*/}
        </div>

        <div className="space-y-2">
          <div className="flex flex-row justify-start">
            <div className="flex flex-col justify-center items-center">
              <p className="">보완할 점</p>
              <Line />
            </div>
          </div>
          {/* 워드클라우드 */}
        </div>
      </div>
    </div>
  );
}

export default Chart;
