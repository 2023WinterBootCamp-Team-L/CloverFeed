import { useEffect, useState } from "react";
import clover from "../assets/clover.svg";
import GreenButton from "../components/GreenButton";
import axios from "axios";
import { useRecoilState } from "recoil";
import {
  QuestionList,
  feedbackQuestionListState,
} from "../../atoms/QuestionStore";
import { answerListState } from "../../atoms/AnswerStore";
// import LinkButton from "../components/LinkButton";

function LinkStart() {
  const [user_name, setUser_name] = useState("");
  const [form_id, setForm_id] = useState(0);
  const [answerList, setAnswerList] = useRecoilState(answerListState);
  const [questions, setQuestions] = useRecoilState(feedbackQuestionListState);

  const getQuestionList = async () => {
    // Query Parameters를 가져오기
    const queryParams = new URLSearchParams(window.location.search);

    // user_id 값을 가져오기
    const userId = queryParams.get("user_id");
    if (userId) {
      localStorage.setItem("author_id", userId);
    }

    try {
      const response = await axios.get(
        "https://cloverfeed.kr/api/form/questions/?user_id=" + userId
      );

      if (response.data.status === "success") {
        // console.log("피드백 질문");
        // console.log(response); // 전체 응답 콘솔에 기록

        // 데이터 업데이트
        setUser_name(response.data.user_name);
        setForm_id(response.data.form_id);
        setQuestions(
          (prevQuestions: QuestionList) =>
            ({
              ...prevQuestions,
              questions: response.data.questions || [],
            }) as QuestionList
        );
      } else {
        console.error(
          `폼 없음: ${response.data.error_code}, ${response.data.message}`
        );
      }
    } catch (error) {
      console.error("API 요청 중 에러:", error);
    }
  };

  useEffect(() => {
    // 여기에 Recoil State 초기화 코드 추가
    getQuestionList();
  }, []);

  useEffect(() => {
    // console.log("user_name: " + user_name);
  }, [user_name]);

  useEffect(() => {
    // console.log("form_id: " + form_id);
    setAnswerList((oldState) => ({
      ...oldState,
      form_id: form_id,
    }));
  }, [form_id]);

  useEffect(() => {
    // console.log("질문 목록");
    // console.log(questions);
  }, [questions]);

  useEffect(() => {
    // console.log("답변 목록");
    // console.log(answerList);
  }, [answerList]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div
        //sm은 화면 너비 640px이상(모바일), md는 768px이상(테블릿), lg는 1024px이상(데스크탑)
        className="flex px-5 py-10 flex-col  items-center relative bg-c-emerald bg-opacity-35 overflow-hidden min-h-screen w-full sm:w-[393px] lg:w-[393px]"
        //style={{ width: '393px', height: '852px' }}
      >
        <div className="w-full h-full flex flex-1 flex-col justify-center items-center">
          {/* <p className="font-pre text-[22px] font-bold">{`${}님의 본격적인`}</p> */}
          <p className="font-pre text-[22px] font-bold">{`${user_name}님의 본격적인`}</p>
          <p className="font-pre text-[22px] font-bold">
            평가를 시작하겠습니다!
          </p>
          <p className="font-pre text-[22px] font-bold">익명으로 전달되니</p>
          <p className="font-pre text-[22px] font-bold">걱정하지 마세요.</p>
        </div>
        <div className=" w-full h-full flex flex-1 flex-col justify-center items-center">
          <img
            src={clover}
            className="w-[250px] h-[250px]"
            alt="클로버 이미지"
          />
        </div>
        <div className="w-full h-full flex flex-1 flex-col justify-center items-center mb-4">
          <GreenButton text="피드백 시작하기" nextpage="/LinkAnswer" />
        </div>
      </div>
    </div>
  );
}

export default LinkStart;
