import React, { useState } from "react";
import AddButton from "../components/AddButton";
import BackButton from "../components/BackButton";
import BaseQuest from "../components/BaseQuest";
import { useNavigate } from "react-router-dom";
import { useQuestionContext } from "../components/QuestionUpdate";
import { QuestionList } from "../components/QuestionList";

import ModalQeustionComplete from "../components/ModalQuestionComplete";

function QueryList() {
  const navigate = useNavigate();
  const handleAddButtonClick = () => {
    navigate("/queryadd");
  };

  const { questions } = useQuestionContext();

  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <div className="flex flex-col overflow-hidden w-[24.56rem] mx-auto h-[53.25rem] px-5 py-8 gap-4">
      <div className="flex justify-between">
        <BackButton back page="/querystart" />
        <BackButton back={false} onClick={toggle} />
      </div>

      <p className="text-2xl">질문 리스트</p>
      <div className="flex flex-col gap-2">
        <p className="text-xl">기본 질문</p>
        <BaseQuest text="당신의 직무는 무엇인가요?" />
        <BaseQuest color={false} text="00님의 업무 능력 강점은 무엇인가요?" />
        <BaseQuest text="00님의 성격 및 태도는 어떤가요?" />
        <BaseQuest color={false} text="00님에게 전하고 싶은 칭찬이 있나요?" />
        <BaseQuest text="00님이 보완해줬으면 하는 부분이 있나요?" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl">추가 질문</p>
        <QuestionList questions={questions} />
        <AddButton
          text="새로운 질문을 추가해보세요"
          onClick={handleAddButtonClick}
        />
      </div>
      <ModalQeustionComplete isOpen={isOpen} toggle={toggle}>
        <div className="justify-center items-center">
          <p className="text-xl">이대로 질문 폼을 완성하시겠어요?</p>
          <p className="text-c-green text-bold text-md">
            완성된 폼은 수정할 수 없어요
          </p>
        </div>
        <button onClick={toggle}>확인</button>
      </ModalQeustionComplete>
    </div>
  );
}

export default QueryList;
