import { useState, useEffect } from "react";
import AddButton from "../components/AddButton";
import BackButton from "../components/BackButton";
import BaseQuest from "../components/BaseQuest";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Modal";
import { questionListState } from "../../atoms/QuestionStore";
import { useRecoilValue } from "recoil";
import axios from "axios";

function QueryList() {
  const questionList = useRecoilValue(questionListState);
  const navigate = useNavigate();

  const handleAddButtonClick = () => {
    navigate("/QueryAdd");
  };

  const [userid, setUserid] = useState("");

  useEffect(() => {
    const storedUserid = localStorage.getItem("user_id");
    if (storedUserid) {
      setUserid(storedUserid);
    }
  }, []);

  const handleQuestionComplete = async () => {
    try {
      // POST 요청을 보낼 데이터 구성
      const requestData = {
        user_id: userid,
        questions: questionList.questions.map((question) => ({
          context: question.context,
          type: question.type,
          choices: question.choices,
        })),
      };

      const response = await axios.post(
        "http://localhost:8000/api/questions/",
        requestData
      );

      console.log(response.data);
      navigate("/QueryShare");
    } catch (error) {
      console.error(error);
    }
  };

  // 모달
  const [isOpen, setisOpen] = useState(false);
  const toggle = () => {
    setisOpen(!isOpen);
  };

  return (
    <div
      className=" flex flex-col mx-auto h-full gap-10 px-5 py-8"
      style={{ width: "393px" }}
    >
      <div className="flex justify-between">
        <BackButton back page="/querystart" />
        <BackButton back={false} onClick={toggle} />
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-pre text-[22px] font-bold">질문 리스트</p>
        <p className="font-pre text-[14px] font-bold">기본 질문</p>
        <div className="flex flex-col gap-2">
          {questionList.questions.slice(0, 5).map((question, index) => (
            <BaseQuest
              key={index}
              text={question.context}
              color={index % 2 === 0}
            />
          ))}
        </div>
        <p className="font-pre text-[14px] font-bold">추가 질문</p>
        <div className="flex flex-col gap-2">
          <AddButton
            text="새로운 질문을 추가해보세요"
            onClick={handleAddButtonClick}
          />
          {questionList.questions.slice(5).map((question, index) => (
            <BaseQuest
              key={index}
              text={question.context}
              color={index % 2 === 0}
            />
          ))}
        </div>
      </div>
      <Modal isOpen={isOpen} toggle={toggle}>
        <div className="flex flex-col items-center gap-3">
          <p className="font-pre text-[16px] font-bold">
            이대로 질문폼을 완성하시겠어요?
          </p>
          <p className="font-pre text-[16px] font-bold text-center text-c-green">
            완성된 폼은 수정할 수 없어요
          </p>

          <button
            className="bg-c-indigo text-white w-full p-2 rounded-lg mt-4 font-pre text-[16px]"
            onClick={handleQuestionComplete}
          >
            질문폼 완성
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default QueryList;
