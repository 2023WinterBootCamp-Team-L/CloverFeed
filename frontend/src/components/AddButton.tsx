import plus from "../assets/plus.svg";

interface AddButtonProps {
  text: string;
  onClick: () => void;
}

const AddButton: React.FC<AddButtonProps> = ({ text, onClick }) => {
  const handleButtonClick = () => {
    onClick();
  };

  return (
    <div
      className={
        "bg-white border-c-green border-opacity-50 border-2 rounded-lg h-12 font-pre font-bold text-[14px] p-4 leading-1.25 flex items-center justify-between"
      }
    >
      {text}
      <button onClick={handleButtonClick}>
        <img src={plus} alt="Plus Icon" className="h-4 w-4" />
      </button>
    </div>
  );
};

export default AddButton;
