import { useEffect, useState } from "react";
import clover from "../assets/clover.svg";
import GreenButton from "../components/GreenButton";
import axios from "axios";
import { useRecoilState } from "recoil";
import { answerListState } from "../../atoms/AnswerStore";
// import LinkButton from "../components/LinkButton";

function LinkStart() {
  const [user_name, setUser_name] = useState("");
  const [form_id, setForm_id] = useState(0);
  const [answerList, setAnswerList] = useRecoilState(answerListState);

  const getQuestionList = async () => {
    // Query Parameters를 가져오기
    const queryParams = new URLSearchParams(window.location.search);

    // user_id 값을 가져오기
    const userId = queryParams.get("user_id");

    try {
      const response = await axios.get(
        "http://localhost:8000/api/form/questions/?user_id=" + userId
      );
      setUser_name(response.data.user_name);
      setForm_id(response.data.form_id);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuestionList();
  }, []);

  useEffect(() => {
    console.log("user_name: " + user_name);
  }, [user_name]);

  useEffect(() => {
    console.log("form_id: " + form_id);
    setAnswerList((oldState) => ({
      ...oldState,
      form_id: form_id,
    }));
  }, [form_id]);

  useEffect(() => {
    console.log(answerList);
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
