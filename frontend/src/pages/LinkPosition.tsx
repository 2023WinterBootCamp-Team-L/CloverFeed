// LinkPosition.tsx
// import React from "react";
import LinkButton from '../components/LinkButton';
import 개발자 from '../assets/개발자.svg';
import 디자이너 from '../assets/디자이너.svg';
import 기획자 from '../assets/기획자.svg';
import PMPO from '../assets/PMPO.svg';
import 기타직무 from '../assets/기타직무.svg';
// import { useState } from 'react';
// import ProgressBar from '../components/ProgressBar';

function LinkPosition() {
  const buttons = [
    {
      icon: <img src={개발자} className="w-5" alt="개발자" />,
      backgroundColor: '#D5FBE5',
      buttonText: '개발자',
    },
    {
      icon: <img src={디자이너} className="w-5" alt="디자이너" />,
      backgroundColor: '#F6EED4',
      buttonText: '디자이너',
    },
    {
      icon: <img src={기획자} className="w-5" alt="기획자" />,
      backgroundColor: '#FBE2E2',
      buttonText: '기획자',
    },
    {
      icon: <img src={PMPO} className="w-5" alt="PMPO" />,
      backgroundColor: '#E2E9FF',
      buttonText: 'PMPO',
    },
    {
      icon: <img src={기타직무} className="h-6" alt="기타직무 " />,
      backgroundColor: '#F5E7F9',
      buttonText: '기타직무',
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="flex flex-col justify-center items-center overflow-hidden relative bg-c-emerald bg-opacity-35 px-5 py-10 min-h-screen w-full sm:w-[393px] lg:w-[393px]"
        // style={{ width: '393px', height: '852px' }}
      >
        <div className="flex flex-col gap-20">
          {/* <ProgressBar totalSteps={totalSteps} currentStep={currentStep} /> */}
          <div>
            <p className="font-pre text-[22px] font-bold text-center">
              본인의 포지션을
            </p>
            <p className="font-pre text-[22px] font-bold text-center">
              선택해주세요!
            </p>
          </div>
          <div className="flex flex-col items-center gap-6">
            {buttons.map((button, index) => (
              <LinkButton
                key={index}
                icon={button.icon}
                backgroundColor={button.backgroundColor}
                buttonText={button.buttonText}
                nextpage="/LinkTag1"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkPosition;
