import { useState } from "react";

interface ToggleProps {
  onChange: (choice: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ onChange }) => {
  const [choice, setChoice] = useState(false);

  const handleToggleClick = (value: boolean) => {
    if (value !== choice) {
      setChoice(value);
      onChange(value); // 변경된 상태를 부모 컴포넌트로 전달
    }
  };

  return (
    <>
      <label className="relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          checked={choice}
          onChange={() => handleToggleClick(!choice)}
          className="sr-only"
        />
        <div className="shadow-card flex h-46 w-50 items-center justify-center rounded-md bg-gray-100  font-pre text-[14px]">
          <span
            onClick={() => handleToggleClick(true)}
            className={`flex h-7 w-15 items-center justify-center rounded-l-md text-sm px-2 ${
              !choice ? "bg-c-green text-black" : "text-gray-500"
            }`}
          >
            객관식
          </span>
          <span
            onClick={() => handleToggleClick(false)}
            className={`flex h-7 w-15 items-center justify-center rounded-r-md text-sm px-2 ${
              choice ? "bg-c-green text-black" : "text-gray-500"
            }`}
          >
            주관식
          </span>
        </div>
      </label>
    </>
  );
};
export default Toggle;
