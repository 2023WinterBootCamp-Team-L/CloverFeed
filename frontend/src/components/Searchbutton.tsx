import 돋보기 from "../assets/돋보기.svg";

import React, { useState } from "react";
interface SearchbuttonProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  search: () => void;
  children?: React.ReactNode;
  placeholder?: string;  // children prop 추가
}

const Searchbutton: React.FC<SearchbuttonProps> = ({
  value,
  onChange,
  search,
  children,// children prop 추가
}) => {
  const [is돋보기Visible, set돋보기Visible] = useState(true);

  const handleFocus = () => {
    set돋보기Visible(false);
  };

  const handleBlur = () => {
    set돋보기Visible(true);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="검색어를 입력해주세요"
        className="border border-black bg-white text-black w-full h-10 rounded-lg focus:outline-none leading-1.25 p-2 text-sm"
      />
      {is돋보기Visible && (
        <button onClick={search}>
          <img
            src={돋보기}
            alt="돋보기"
            className="absolute right-0 top-0 h-full w-9 pr-5"
          />
        </button>
      )}
      {children} {/* children을 렌더링 */}
    </div>
  );
};


export default Searchbutton;
