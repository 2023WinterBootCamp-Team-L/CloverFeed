import { useState } from 'react';
import BackButton from '../components/BackButton';
import FeedbackAnswerInput from '../components/FeedbackAnswerInput';

function LinkAnswer2() {
  const [answerInputs, setAnswerInputs] = useState('내용을 입력하세요');

  const onFocus = () => {
    if (answerInputs === '내용을 입력하세요') {
      setAnswerInputs('');
    }
  };

  const onBlur = () => {
    if (answerInputs === '') {
      setAnswerInputs('내용을 입력하세요');
    }
  };

  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswerInputs(e.target.value);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="flex flex-col overflow-hidden relative bg-c-emerald bg-opacity-35 px-5 py-8 gap-20 min-h-screen w-full sm:w-[393px] lg:w-[393px]"
        // style={{ width: '393px', height: '852px' }}
      >
        <div className="flex justify-between w-full">
          <BackButton back page="/LinkAnswer1" />
          <BackButton back={false} page="/LinkOpti" />
        </div>
        <div className="flex flex-col items-center gap-20">
          <div className="flex-full">
            <p className="font-pre text-[22px] font-bold text-center">
              XXX님이 보완해줬으면
            </p>
            <p className="font-pre text-[22px] font-bold text-center">
              하는 부분이 있나요?
            </p>
          </div>
          <div className="flex flex-1 flex-col justify-center items-center">
            <FeedbackAnswerInput
              value={answerInputs}
              onTextChange={onInputChange}
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LinkAnswer2;
