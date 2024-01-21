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
  return (
    <div className="relative">
      <textarea
        value={value}
        onChange={onTextChange}
        onFocus={onFocus}
        onBlur={onBlur}
        style={textAreaStyle}
        className="bg-white w-[340px] h-[380px] p-3 border-2 border-c-green rounded-3xl focus:outline-none resize-none font-pre text-[14px]"
      />
    </div>
  );
};

export default FeedbackAnswerInput;
