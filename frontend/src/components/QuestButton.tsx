interface QuestButtonProps {
  color?: boolean;
  text: string;
}

const QuestButton: React.FC<QuestButtonProps> = ({ text, color = true }) => (
  <button
    className={`${
      color ? "bg-purple-200" : "bg-blue-200"
    } text-black rounded-lg h-12 text-left px-4 text-sm leading-1.25`}
  >
    {text}
  </button>
);

export default QuestButton;
