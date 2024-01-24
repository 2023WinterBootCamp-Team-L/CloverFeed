import { useState } from "react";
interface FeedbackAnswerInputProps {
  value: string;
  onTextChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onFocus?: () => void;
  onBlur?: () => void;
}

const FeedbackAnswerInput: React.FC<FeedbackAnswerInputProps> = ({
  value,
  onTextChange,
  onFocus,
  onBlur,
}) => {
  const textColor = value === "내용을 입력하세요" ? "gray" : "black";
  const textAreaStyle = {
    color: textColor,
  };

  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative">
      <textarea
        value={value}
        onChange={onTextChange}
        onFocus={() => {
          setIsFocused(true);
          if (onFocus) onFocus();
        }}
        onBlur={() => {
          setIsFocused(false);
          if (onBlur) onBlur();
        }}
        style={{
          ...textAreaStyle,
          borderColor: isFocused ? "#50DA8C" : "white",
        }}
        className="bg-white w-[340px] h-[380px] p-3 border-2 rounded-2xl focus:outline-none resize-none font-pre text-[14px]"
      />
    </div>
  );
};

export default FeedbackAnswerInput;
