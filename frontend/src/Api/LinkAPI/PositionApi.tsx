// PositionApi.tsx
import axios, { AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: 'http://example.com/api', // 실제 API의 baseURL로 변경
});

interface ApiResponseSuccess {
  status: 'success';
  message: string;
  // 다른 성공적인 응답의 속성들을 여기에 추가
}

interface ApiResponseError {
  status: 'error';
  error_code: number;
  message: string;
  // 다른 오류 응답의 속성들을 여기에 추가
}

export type ApiResponse = ApiResponseSuccess | ApiResponseError;

export const sendPositionData = async (position: string): Promise<ApiResponse> => {
  try {
    const response: AxiosResponse<ApiResponse> = await api.post('/position', { position });
    return response.data;
  } catch (error) {
    console.error("API 요청 중 오류가 발생하였습니다.", error);
    throw error;
  }
};
