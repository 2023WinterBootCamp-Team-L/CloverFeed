import BackButton from "../components/BackButton";
import AddButton from "../components/AddButton";
import QuestBox from "../components/BaseQuest";
import { useNavigate } from "react-router-dom";

function QueryList() {
  const navigate = useNavigate();
  const handleAddButtonClick = () => {
    navigate("/queryadd");
  };

  return (
    <div className="bg-emerald-50 flex flex-col overflow-hidden w-[24.56rem] mx-auto h-[53.25rem] px-5 py-8 gap-4">
      <div className="flex justify-between">
        <BackButton back page="/querystart" />
        <BackButton back={false} page="/queryshare" />
      </div>
      <p className="text-2xl">질문 리스트</p>
      <div className="flex flex-col gap-2">
        <p className="text-xl">기본 질문</p>
        <QuestBox text="당신의 직무는 무엇인가요?" />
        <QuestBox color={false} text="00님의 업무 능력 강점은 무엇인가요?" />
        <QuestBox text="00님의 성격 및 태도는 어떤가요?" />
        <QuestBox color={false} text="00님에게 전하고 싶은 칭찬이 있나요?" />
        <QuestBox text="00님이 보완해줬으면 하는 부분이 있나요?" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl">추가 질문</p>
        <AddButton
          text="새로운 질문을 추가해보세요"
          onClick={handleAddButtonClick}
        />
      </div>
    </div>
  );
}

export default QueryList;
