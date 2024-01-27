import clover from "../assets/clover.svg";
import HomeButton from "../components/HomeButton";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { answerListSelector } from "../../atoms/AnswerStore";
import { useState, useEffect, useRef } from "react";

interface ApiResponse {
  status: "success" | "error";
  summary?: string;
}

function LinkFinish() {
  const feedApiUrl = "http://localhost:8000/api/answers/";

  // Recoil의 상태값에서 AnswerList 가져오기
  const answerList = useRecoilValue(answerListSelector);
  console.log(answerList);

  // POST 요청할 데이터
  const postData = {
    form_id: 15,
    category: answerList.category,
    tags_work: answerList.tags_work,
    tags_attitude: answerList.tags_attitude,
    answers: answerList.answers,
  };

  // Ref를 사용하여 컴포넌트 마운트 상태 추적
  const isMounted = useRef(true);

  // POST 요청 보내기
  useEffect(() => {
    // 컴포넌트가 여전히 마운트되어 있는지 추적
    isMounted.current = true;

    const sendPostData = async () => {
      try {
        const response = await axios.post(feedApiUrl, postData);
        console.log("답변 제출");
        console.log(response.data);

        if (isMounted.current) {
          // 컴포넌트가 여전히 마운트되어 있으면 상태 업데이트
          isMounted.current = false;
        }
      } catch (error) {
        console.error("폼 없음", error);
        // 필요한 경우 에러 처리
      }
    };

    // 답변이 있는지 확인
    if (answerList && answerList.answers.length > 0) {
      sendPostData();
    }

    // 컴포넌트가 언마운트될 때 요청을 취소하는 클린업 함수
    return () => {
      isMounted.current = false;
    };
  }, [answerList]);

  const [userid, setUserid] = useState("");
  const [summary, setSummary] = useState<string | undefined>(undefined);

  useEffect(() => {
    const storedUserid = localStorage.getItem("user_id");
    if (storedUserid) {
      setUserid(storedUserid);
    }
  }, []);

  const gptApiUrl = "http://localhost:8000/api/feedbacks/summary/";
  useEffect(() => {
    // API 데이터를 가져오는 비동기 함수 정의
    const fetchData = async () => {
      try {
        // axios를 사용해 POST 요청 보내기
        const response = await axios.post<ApiResponse>(gptApiUrl, {
          user_id: userid,
        });

        // API 응답이 성공인 경우 요약 정보를 상태 변수에 저장
        if (response.data.status === "success") {
          setSummary(response.data.summary);
        } else {
          // API 응답이 실패인 경우 에러 메시지 출력
          console.error("데이터 없음:", response.data.status);
        }
      } catch (error) {
        // 비동기 함수 실행 중 발생한 에러 처리
        console.error("API 요청 실패:", error);
      }
    };

    // fetchData 함수 호출
    fetchData();
  }, [userid, setSummary]);

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
