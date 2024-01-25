import React, { useState, useEffect } from "react";
import BackButton from "../components/BackButton";
import Line from "../components/Line";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import axios, { AxiosResponse } from "axios";

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
          font: {
            family: "Pretendard",
          },
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
    <div className="flex flex-col justify-center w-full gap-4">
      <p className="font-pre text-[16px] font-bold">{generateSentence()}</p>
      <Doughnut data={chartData} options={options}></Doughnut>{" "}
      {/*오류가 나는데 실행은 또 잘됨...*/}
    </div>
  );
};

function Chart() {
  const [userid, setUserid] = useState("");

  useEffect(() => {
    const storedUserid = localStorage.getItem("user_id");
    if (storedUserid) {
      setUserid(storedUserid);
    }
  }, []);

  const apiUrl = `http://localhost:8000/api/feedbacks/tags/chart/?user_id=${userid}`;

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
          console.log("차트");
        } else {
          console.error("에러 응답:", response.data.message);
        }
      } catch (error) {
        console.error("네트워크 오류:", error);
      }
    };

    getChart();
  }, [apiUrl]);

  React.useEffect(() => {
    axios
      .get(apiUrl)
      .then((response: AxiosResponse) => {
        if (response.data.status === "success") {
          const workTags = response.data.work;
          const attitudeTags = response.data.attitude;
          setWorkData(workTags);
          setAttitudeData(attitudeTags);
          console.log("Work Tags:", workTags);
          console.log("Attitude Tags:", attitudeTags);
        } else {
          console.error("사용자를 찾을 수 없습니다.", response.data.message);
        }
      })
      .catch((error) => {
        console.error("에러 응답:", error.message);
      });

    // const dummyApiResponse = {
    //   status: "success",
    //   work: [
    //     {
    //       tag: "효율적인",
    //       percentage: 40,
    //     },
    //     {
    //       tag: "박학다식",
    //       percentage: 20,
    //     },
    //     {
    //       tag: "리더십",
    //       percentage: 20,
    //     },
    //     {
    //       tag: "전략적인",
    //       percentage: 20,
    //     },
    //   ],
    //   attitude: [
    //     {
    //       tag: "경청하는",
    //       percentage: 25,
    //     },
    //     {
    //       tag: "공감 능력",
    //       percentage: 12.5,
    //     },
    //     {
    //       tag: "책임감",
    //       percentage: 12.5,
    //     },
    //     {
    //       tag: "끈기",
    //       percentage: 12.5,
    //     },
    //     {
    //       tag: "성실함",
    //       percentage: 12.5,
    //     },
    //     {
    //       tag: "배려심",
    //       percentage: 12.5,
    //     },
    //   ],
    // };

    if (dummyApiResponse.status === "success") {
      const workTags = dummyApiResponse.work;
      const attitudeTags = dummyApiResponse.attitude;
      setWorkData(workTags);
      setAttitudeData(attitudeTags);
      console.log("Work Tags:", workTags);
      console.log("Attitude Tags:", attitudeTags);
    } else {
      console.error("Error:");
    }
  }, [apiUrl]);

  return (
    <div
      className="bg-white flex flex-col mx-auto h-screen gap-10 px-5 py-8"
      style={{ width: "393px" }}
    >
      <div>
        <BackButton back page="/mainpage" />
      </div>
      <p className="font-pre text-[22px] font-bold">피드백 차트</p>

      <div className="flex flex-col gap-6">
        <div className="flex flex-row justify-start">
          <Line text="업무 능력 강점" />
        </div>
        <SkillChart data={workData} />
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-row justify-start">
          <Line text="성격 및 태도" />
        </div>
        <SkillChart data={attitudeData} />
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-row justify-start">
          <Line text="칭찬할 점" />
        </div>
        {/* 워드클라우드 */}
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-row justify-start">
          <Line text="개선할 점" />
        </div>
        {/* 워드클라우드 */}
      </div>
    </div>
  );
}

export default Chart;
