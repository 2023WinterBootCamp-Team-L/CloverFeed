import { atom, useRecoilState } from 'recoil';

export interface QuestionProps {
  value: string;
  onTextChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const questionsAtom = atom<QuestionProps[]>({
  key: 'questions',
  default: [] as QuestionProps[],
});

export interface QueryAddState {
  showAnswersAdd: boolean;
  answerInputs: string[];
  questionInputs: string;
  answerComplete: boolean;
  popupVisible: boolean;
}

export const queryAddState = atom<QueryAddState>({
  key: 'queryAddState',
  default: {
    showAnswersAdd: false,
    answerInputs: [],
    questionInputs: '질문하고 싶은 내용을 입력하세요',
    answerComplete: false,
    popupVisible: false,
  },  
});

export const useRecoilQuestionState = () => {
  // Recoil 상태를 사용합니다.
  const [questions, setQuestions] = useRecoilState(questionsAtom);

  // 필요한 Recoil 상태 및 관련 로직을 반환합니다.
  return { questions, setQuestions };
};


export interface QuestionProps {
  value: string;
  onTextChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const questionsState = atom<QuestionProps[]>({
  key: 'questionsState',
  default: [],
});