import React, { useState, useEffect } from "react";
import ReactWordcloud from "react-wordcloud";
// import clovercloud from "../assets/clovercloud.svg";
import axios, { AxiosResponse } from "axios";

interface Word {
  text: string;
  value: number;
}

interface WordCloudResponse {
  status: string;
  summary: string;
  words: Word[];
}

const options = {
  colors: [
    "hsl(0, 100%, 75%)",
    "hsl(35, 100%, 60%)",
    "hsl(224, 100%, 75%)",
    "hsl(285, 100%, 75%)",
  ],
  enableTooltip: false,
  deterministic: false,
  fontFamily: "impact",
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 3,
  transitionDuration: 1000,
};

const SimpleWordcloud: React.FC = () => {
  const [wordCloudData, setWordCloudData] = useState<WordCloudResponse | null>(
    null
  );
  const [username, setUsername] = useState("");

  useEffect(() => {
    const apiUrl = `http://localhost:8000/api/feedbacks/wordcloud/?user_id=${localStorage.getItem("user_id")}`;

    axios
      .get(apiUrl)
      .then((response: AxiosResponse<WordCloudResponse>) => {
        const data: WordCloudResponse = response.data;
        setWordCloudData(data);
      })
      .catch((error) => {
        console.error("네트워크 오류:", error);
      });

    const storedUsername = localStorage.getItem("user_name");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  if (!wordCloudData) {
    return <div>Loading...</div>;
  }

  console.log(wordCloudData);

  return (
    <div className="flex flex-col gap-8 hover:scale-125 animate-pulse hover:animate-none sm:hover:scale-105 ">
      <div
        className="bg-clover"
        style={{
          // backgroundImage: "",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          margin: "auto",
        }}
      >
        <ReactWordcloud words={wordCloudData.words} options={options} />
      </div>
      <div>
        <p className="text-[14px] text-center font-pre font-bold">
          {username}님은 {wordCloudData.summary}
        </p>
      </div>
    </div>
  );
};

export default SimpleWordcloud;
