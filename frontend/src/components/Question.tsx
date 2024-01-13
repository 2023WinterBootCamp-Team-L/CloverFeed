interface QuestionProps {
  value: string;
  onTextChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const Question: React.FC<QuestionProps> = ({ value, onTextChange }) => {
  return (
    <div>
      <textarea
        value={value}
        onChange={onTextChange}
        className="h-40 w-full border-emerald-200 border-2 rounded-lg focus:outline-none leading-1.25 p-2 text-sm"
      />
    </div>
  );
};

export default Question;
