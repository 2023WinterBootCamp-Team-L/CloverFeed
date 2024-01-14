import { useState } from "react";
import AddButton from "../components/AddButton";
import BackButton from "../components/BackButton";
import BaseQuest from "../components/BaseQuest";
import { useNavigate } from "react-router-dom";
import { useQuestionContext } from "../components/QuestionUpdate";
import { QuestionList } from "../components/QuestionList";

import Modal from "../components/Modal";

function QueryList() {
  // 페이지 이동
  const navigate = useNavigate();
  const handleAddButtonClick = () => {
    navigate("/queryadd");
  };
  const handleQuestionComplete = () => {
    navigate("/queryshare");
  };

  // 모달
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
      <Modal isOpen={isOpen} toggle={toggle}>
        <div className="flex flex-col items-center gap-4">
          <div className="space-y-1">
            <p className="text-xl font-bold">이대로 질문폼을 완성하시겠어요?</p>
            <p className="text-md text-center">
              완성된 폼은
              <span className="text-c-green font-bold"> 수정할 수 없어요</span>
            </p>
          </div>

          <button
            onClick={handleQuestionComplete}
            className="bg-c-indigo text-white w-full px-2 py-2 rounded-xl mt-4 text-lg"
          >
            질문폼 완성
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default QueryList;
