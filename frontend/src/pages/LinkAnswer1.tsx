// LinkAnswer1.tsx

import  { useState } from 'react';
import AnswerForm from '../components/AnswerForm';
import BackButton from '../components/BackButton';

function LinkAnswer1() {
  const [answer1, setAnswer1] = useState('');

  const handleAnswerChange = (answer: string) => {
    setAnswer1(answer);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="flex flex-col justify-center items-center overflow-hidden relative border-2 border-gray-300 bg-emerald-50"
        style={{ width: '393px', height: '852px' }}
      >
        <div className="flex justify-between w-full px-4 pt-4">
          <BackButton back page="/LinkTag2" />
          <BackButton back={false} page="/LinkAnswer2" />
        </div>
        <div className="flex-col flex-full justify-between pt-12 pb-12">
          <p className="text-left font-Preahvihear text-24 text-xl font-normal font-weight-400 ">
            XXX님에게 전하고 싶은
          </p>
          <p className="text-left font-Preahvihear text-24 text-xl font-normal font-weight-400 ">
            칭찬이 있나요?
          </p>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center">
          <div className="w-[360px] h-[580px] flex flex-col items-start overflow-hidden relative border-2 rounded-lg border-[#C1C6CF] bg-white">
            {/* AnswerForm을 사용하고 상태 및 이벤트 핸들러 전달 */}
            <AnswerForm
              formId="form1" // 예시로 고유한 formId 전달
              answer={answer1}
              onAnswerChange={handleAnswerChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkAnswer1;

