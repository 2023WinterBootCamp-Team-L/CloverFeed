
import BackButton from "../components/BackButton";
import FeedbackBox from "../components/FeedbackBox";
import 돋보기 from "../assets/돋보기.svg";
import Tag from "../components/Tag";


const FeedBackList: React.FC = () => {
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
      <FeedbackBox
        title="Feedback Title"
        tags={sampleTags}
      />

        <FeedbackBox
        title="Feedback Title"
        tags={sampleTags}
        
      />

        <FeedbackBox
        title="Feedback Title"
        tags={sampleTags}
        
      />

      <FeedbackBox
        title="Feedback Title"
        tags={sampleTags}
          
      />



      </div>
      
    </div>
  );
};

export default FeedBackList;