import { useState, useEffect } from "react";
import ChoiceButton from "./ChoiceButton";
import { useRecoilState, useSetRecoilState } from "recoil";
import { answerListState } from "../../../atoms/AnswerStore";
import { feedbackQuestionListState } from "../../../atoms/QuestionStore";
import Popup from "../Popup";

import 개발자 from "../../assets/개발자.svg";
import 디자이너 from "../../assets/디자이너.svg";
import 기획자 from "../../assets/기획자.svg";
import PMPO from "../../assets/PMPO.svg";
import 기타직무 from "../../assets/기타직무.svg";

type Option = {
  option: string;
};

type Color = {
  color: string;
};

type Icon = {
  icon: React.ReactElement;
};

function CategoryPart({ questionIndex }: { questionIndex: number }) {
  const Icons: Icon[] = [
    {
      icon: <img src={개발자} className="w-5" alt="개발자" />,
    },
    {
      icon: <img src={디자이너} className="w-5" alt="디자이너" />,
    },
    {
      icon: <img src={기획자} className="w-5" alt="기획자" />,
    },
    {
      icon: <img src={PMPO} className="w-5" alt="PMPO" />,
    },
    {
      icon: <img src={기타직무} className="w-6" alt="기타직무 " />,
    },
  ];

  const Colors: Color[] = [
    { color: "#C6D7FF" },
    { color: "#F0E7C1" },
    { color: "#EDD0F5" },
    { color: "#F9C7C7" },
    { color: "#9CECBE" },
  ];

  const setAnswerListState = useSetRecoilState(answerListState);
  const [questionList] = useRecoilState(feedbackQuestionListState);
  const currentQuestion = questionList.questions[questionIndex];
  const Options: Option[] = currentQuestion.choices
    ? currentQuestion.choices.map((choices) => ({ option: choices }))
    : [];

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = (option: string) => {
    setSelectedOptions((prevOptions) => {
      // 이미 선택된 옵션인 경우 제거
      const updatedOptions = prevOptions.includes(option)
        ? prevOptions.filter((selectedOption) => selectedOption !== option)
        : [...prevOptions, option]; // 선택되지 않은 옵션인 경우 추가

      // 선택된 옵션을 AnswerList의 category로 설정
      setAnswerListState((prevAnswerList) => {
        const updatedCategory = updatedOptions.join(",");
        return {
          ...prevAnswerList,
          category: updatedCategory,
        };
      });

      return updatedOptions;
    });
  };

  const [reset, setReset] = useState(false);

  useEffect(() => {
    // questionIndex가 변경될 때마다 selectedOptions 초기화
    setSelectedOptions([]);
    setReset((prevReset) => !prevReset);
  }, [questionIndex]);

  useEffect(() => {
    // 선택된 옵션이 2개 이상이면 팝업 표시
    if (selectedOptions.length >= 2) {
      setShowPopup(true);
      setReset((prevReset) => !prevReset);
      setSelectedOptions([]);
    }
  }, [selectedOptions]);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      {Options.map((option, index) => (
        <ChoiceButton
          key={index}
          icon={Icons[index].icon}
          text={option.option}
          onClick={() => handleButtonClick(option.option)}
          borderColor={Colors[index % Colors.length].color}
          clickedColor={Colors[index % Colors.length].color}
          reset={reset}
        />
      ))}
      {showPopup && (
        <Popup text="하나의 항목만 선택해주세요." onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default CategoryPart;
