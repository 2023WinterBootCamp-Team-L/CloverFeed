import React, { useState } from 'react';
import axios from 'axios';

interface AnswerFormProps {
  formId: string;
  onAnswerChange: (answer: string) => void;
  answer: string;
}

const AnswerForm: React.FC<AnswerFormProps> = ({ formId, onAnswerChange }) => {
  const [answers, setAnswers] = useState<string[]>([]);

  interface ApiResponseSuccess {
    status: 'success';
    message: string;
  }

  interface ApiResponseError {
    status: 'error';
    error_code: number;
    message: string;
  }

  type ApiResponse = ApiResponseSuccess | ApiResponseError;

  const handleSubmit = async () => {
    try {
      const apiUrl = `http://localhost:5173/api/answers`; 

      const requestBody = {
        form_id: formId,
        tags: ['개성이 뚜렷한', '경청하는', '센스있는'],
        answers: answers.map((answer, index) => ({
          question: `Question ${index + 1}`,
          type: index === 2 ? '객관식' : '주관식',
          answer,
        })),
      };

      const response = await axios.post<ApiResponse>(apiUrl, requestBody);

      if (response.data.status === 'success') {
        console.log('POST 요청 성공:', response.data.message);
      } else {
        console.error('POST 요청 실패:', (response.data as ApiResponseError).message);
      }
    } catch (error) {
      console.error('POST 요청 실패:', error);  
    }
  };

  const handleAnswerChange = (index: number, answer: string) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = answer;
      return newAnswers;
    });
    // 부모 컴포넌트로 답변 변경을 알립니다.
    onAnswerChange(answer);
  };

  return (
    <div>
      {/* 각 질문에 대한 입력 폼을 렌더링 */}
      {answers.map((answer, index) => (
        <div key={index}>
          <label>{`Question ${index + 1}:`}</label>
          <input
            type="text"
            value={answer}
            onChange={(e) => handleAnswerChange(index, e.target.value)}
          />
        </div>
      ))}
      <button onClick={handleSubmit}>Submit Answers</button>
    </div>
  );
};

export default AnswerForm;
