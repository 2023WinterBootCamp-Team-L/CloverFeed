
import BackButton from "../components/BackButton";

import 돋보기 from "../assets/돋보기.svg";
import Tag from "../components/Tag";
import FeedBackResultTag from "../components/FeedBackResultTag";
import FeedBackResultAnswer from "../components/FeedBackResultAnswer";


const FeedBackResult: React.FC = () => {
  const sampleTags = [
    <Tag key={1} text="개성이 뚜렷한" image={돋보기} color="bg-pink-200" />
    // ... 다른 TagProps를 원하는 만큼 추가
  ]


  return (
    <div className="flex flex-col overflow-hidden max-w-[24.56rem] mx-auto h-auto px-5 py-8 gap-4">
      <div className="flex justify-between">
        <BackButton back page="/Linkmain" />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xl">#2356 디자이너 피드백</p>
        <div className="bg-[#e2e9ff80] h-auto w-full flex flex-col justify-center border-opacity-50 border-2 rounded-3xl leading-1.25 p-8 text-sm">
        <p className="text-lg">홍길동님을 개성이 뚜렷하고
경청하는 팀 분위기 메이커라고
피드백을 보내셨네요!</p></div>


      <FeedBackResultTag
        title="업무 능력 강점"
        tags={sampleTags}
      />
        <FeedBackResultAnswer
        answertitle="협업을 한적 있다면 홍길동님과 어떠하셨나요?"
        text="기존에 일하던 사람이 퇴사해서 걱정하던 와중에 들어왔는데 같이 일하는 동안 바로 적응하셔서 일하기 좋았고 팀 분위기 바로 읽어서 일하기 좋았어요  다음에 같이 또 일합시다."
          />

<FeedBackResultAnswer
        answertitle="협업을 한적 있다면 홍길동님과 어떠하셨나요?"
        text="기존에 일하던 사람이 퇴사해서 걱정하던 와중에 들어왔는데 같이 일하는 동안 바로 적응하셔서 일하기 좋았고 팀 분위기 바로 읽어서 일하기 좋았어요  다음에 같이 또 일합시다."
          />

<FeedBackResultAnswer
        answertitle="저를 1점부터 4점까지 평가해주세요"
        text="2점"
          />



      </div>      
    </div>
  );
};

export default FeedBackResult;