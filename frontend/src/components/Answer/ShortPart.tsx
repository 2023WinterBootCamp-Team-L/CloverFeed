import { useState } from "react";

export interface ShortAnswerProps {
  value: string;
  onTextChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onFocus: () => void;
  onBlur: () => void;
}

export const ShortAnswer: React.FC<ShortAnswerProps> = ({
  value,
  onTextChange,
  onFocus,
  onBlur,
}) => {
  const textColor = value === "답변을 입력하세요" ? "gray" : "black";
  const textAreaStyle = {
    color: textColor,
  };
  return (
    <div>
      <textarea
        value={value}
        onChange={onTextChange}
        onFocus={onFocus}
        onBlur={onBlur}
        style={textAreaStyle}
        className="h-40 w-full border-c-gray border-2 rounded-lg focus:outline-none leading-1.25 p-2 text-sm resize-none"
      />
    </div>
  );
};

function ShortPart() {
  const [shortAnswerValue, setShortAnswerValue] = useState("답변을 입력하세요");
  const handleTextChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    setShortAnswerValue(e.target.value);
  };

  const handleFocus = () => {
    if (shortAnswerValue === "답변을 입력하세요") {
      setShortAnswerValue("");
    }
  };

  const handleBlur = () => {
    if (shortAnswerValue === "") {
      setShortAnswerValue("답변을 입력하세요");
    }
  };

  return (
    <ShortAnswer
      value={shortAnswerValue}
      onTextChange={handleTextChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}
export default ShortPart;
