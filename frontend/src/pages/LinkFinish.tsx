import clover from "../assets/clover.svg";
import HomeButton from "../components/HomeButton";
import axios from "axios";
import { useEffect } from "react";
// import LinkButton from "../components/LinkButton";

function LinkFinish() {
  const nextpage = "/";

  useEffect(() => {
    const apiUrl = "http://localhost:8000/api/answers";

    // POST 요청할 데이터
    const postData = {
      form_id: "타겟 폼 ID",
      category: "개발자",
      tags_work: ["박학다식", "기획력", "효율적인"],
      tags_attitude: ["개성이 뚜렷한", "경청하는", "센스있는"],
      answers: [
        {
          context: "당신의 직무는 무엇인가요?",
          type: "객관식",
          answer: "개발자",
        },
        {
          context: "이구름님의 업무 능력 강점은 무엇인가요?",
          type: "객관식",
          answer: "박학다식",
        },
        {
          context: "이구름님의 성격 및 태도는 어떤가요?",
          type: "객관식",
          answer: "책임감",
        },
        {
          context: "이구름님에게 전하고 싶은 칭찬이 있나요?",
          type: "주관식",
          answer: "웃기고 귀여워:)",
        },
        {
          context: "이구름님이 보완해 줬으면 하는 부분이 있나요?",
          type: "주관식",
          answer: "자꾸 지각한다.",
        },
      ],
    };

    // POST 요청 보내기
    axios
      .post(apiUrl, postData)
      .then((response) => {
        console.log("답변 제출");
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.response.data);
      });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="flex h-full flex-col justify-center items-center relative bg-c-emerald bg-opacity-40"
        style={{ width: "393px", height: "852px" }}
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
          <HomeButton
            text="내 질문 폼 만들러가기"
            nextpage={nextpage}
          ></HomeButton>
        </div>
      </div>
    </div>
  );
}

export default LinkFinish;
