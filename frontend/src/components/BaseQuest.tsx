interface BaseQuestProps {
  color?: boolean;
  text: string;
}

const BaseQuest: React.FC<BaseQuestProps> = ({ text, color = true }) => (
  <div
    className={`${
      color ? "bg-c-sl-purple" : "bg-c-blue"
    } rounded-lg flex items-center p-4 leading-1.25 font-pre text-[14px] font-bold`}
  >
    {text}
  </div>
);

export default BaseQuest;
