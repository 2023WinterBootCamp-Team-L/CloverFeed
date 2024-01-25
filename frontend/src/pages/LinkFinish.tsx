import clover from "../assets/clover.svg";
import HomeButton from "../components/HomeButton";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { answerListSelector } from "../../atoms/AnswerStore";
import { questionListState } from "../../atoms/QuestionStore";

function LinkFinish() {
  const apiUrl = "http://localhost:8000/api/answers/";

  // Recoil의 상태값에서 AnswerList 가져오기
  const answerList = useRecoilValue(answerListSelector);

  // POST 요청할 데이터
  const postData = {
    form_id: 1,
    category: answerList.category,
    tags_work: answerList.tags_work,
    tags_attitude: answerList.tags_attitude,
    answers: answerList.answers,
  };

  // POST 요청 보내기
  try {
    axios
      .post(apiUrl, postData)
      .then((response) => {
        console.log("답변 제출");
        console.log(response.data);
      })
      .catch((error) => {
        console.error("폼 없음", error.response.data);
      });
  } catch (error) {
    console.error("요청 중 에러 발생:", error);
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        className="flex flex-col  overflow-hidden relative bg-c-emerald bg-opacity-40 px-5 py-8 gap-20 min-h-screen w-full sm:w-[393px] lg:w-[393px]"
        // style={{ width: '393px', height: '852px' }}
      >
        <div className="w-full h-full flex flex-1 flex-col justify-center items-center">
          <p className="font-pre text-[22px] font-bold">
            응답해 주셔서 감사합니다
          </p>
        </div>
        <div className=" w-full h-full flex flex-1 flex-col justify-center items-center mb-10">
          <img
            src={clover}
            className="w-[250px] h-[250px]"
            alt="클로버 이미지"
          />
        </div>
        <div className="w-full h-full flex flex-1 flex-col justify-center items-center">
          <HomeButton text="내 질문 폼 만들러가기" nextpage={"/"}></HomeButton>
        </div>
      </div>
    </div>
  );
}

export default LinkFinish;
