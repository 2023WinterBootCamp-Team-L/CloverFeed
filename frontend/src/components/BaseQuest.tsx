interface BaseQuestProps {
  color?: boolean;
  text: string;
}

const BaseQuest: React.FC<BaseQuestProps> = ({ text, color = true }) => (
  <div
    className={`${
      color ? "bg-purple-200" : "bg-blue-200"
    } text-black rounded-lg h-12 flex items-center px-4 text-sm leading-1.25`}
  >
    {text}
  </div>
);

export default BaseQuest;
