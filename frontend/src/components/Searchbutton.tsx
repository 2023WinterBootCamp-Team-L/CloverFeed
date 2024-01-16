import 돋보기 from "../assets/돋보기.svg";
import React, { useState } from "react";

interface SearchbuttonProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onEnter: () => void; // 추가: 엔터키를 누를 때 실행할 함수
  placeholder?: string;
}

const Searchbutton: React.FC<SearchbuttonProps> = ({
  value,
  onChange,
  onEnter, // 추가: 엔터키를 누를 때 실행할 함수
  placeholder = "검색어를 입력해주세요",
}) => {
  const [is돋보기Visible, set돋보기Visible] = useState(true);

  const handleFocus = () => {
    set돋보기Visible(false);
  };

  const handleBlur = () => {
    set돋보기Visible(true);
  };

  const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      onEnter(); // 추가: 엔터키를 눌렀을 때 실행할 함수 호출
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyPress={handleKeyPress} // 추가: 엔터키 감지
        placeholder={placeholder}
        className="border border-black bg-white text-black w-full h-10 rounded-lg focus:outline-none leading-1.25 p-2 text-sm"
      />
      {is돋보기Visible && (
        <button onClick={onEnter}>
          <img
            src={돋보기}
            alt="돋보기"
            className="absolute right-0 top-0 h-full w-9 pr-5 cursor-pointer"
          />
        </button>
      )}
    </div>
  );
};

export default Searchbutton;
