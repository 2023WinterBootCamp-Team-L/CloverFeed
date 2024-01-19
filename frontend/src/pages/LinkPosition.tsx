// LinkPosition.tsx
// import React from "react";
import LinkButton from "../components/LinkButton";
import 개발자 from "../assets/개발자.svg";
import 디자이너 from "../assets/디자이너.svg";
import 기획자 from "../assets/기획자.svg";
import PMPO from "../assets/PMPO.svg";
import 기타직무 from "../assets/기타직무.svg";
// import { useState } from 'react';
// import ProgressBar from '../components/ProgressBar';

function LinkPosition() {
  const nextpage = "/LinkTag1";

  // const [totalSteps, setTotalSteps] = useState<number>(5); // totalSteps는 배열의 첫 번째 요소
  // const [currentStep, setCurrentStep] = useState<number>(1); // currentStep은 배열의 첫 번째 요소

  const buttons = [
    {
      icon: <img src={개발자} className="w-12 h-10" alt="개발자" />,
      backgroundColor: "#E2E9FF",
      buttonText: "개발자",
    },
    {
      icon: <img src={디자이너} className="w-10 h-10" alt="디자이너" />,
      backgroundColor: "#F6EED4",
      buttonText: "디자이너",
    },
    {
      icon: <img src={기획자} className="w-9.5 h-10.5" alt="기획자" />,
      backgroundColor: "#F8DEDE",
      buttonText: "기획자",
    },
    {
      icon: <img src={PMPO} className="w-8.5 h-10" alt="PMPO" />,
      backgroundColor: "#C4FDDC",
      buttonText: "PMPO",
    },
    {
      icon: <img src={기타직무} className="w-10 h-10.5" alt="기타직무 " />,
      backgroundColor: "#E6E6E6",
      buttonText: "기타직무",
    },
  ];

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="flex flex-col justify-center items-center overflow-hidden relative border-2 border-gray-300 bg-emerald-50 "
        style={{ width: "393px", height: "852px" }}
      >
        <div className="flex flex-col gap-12">
          {/* <ProgressBar totalSteps={totalSteps} currentStep={currentStep} /> */}
          <div>
            <p className="text-xl leading-1.5 text-center font-Preahvihear bold">
              본인의 포지션을
            </p>
            <p className="text-xl leading-1.5 text-center font-Preahvihear">
              선택해주세요!
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-8">
              {buttons.map((button, index) => (
                <LinkButton
                  key={index}
                  icon={button.icon}
                  backgroundColor={button.backgroundColor}
                  buttonText={button.buttonText}
                  nextpage={nextpage}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkPosition;
