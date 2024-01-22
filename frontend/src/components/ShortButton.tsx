interface ShortButtonProps {
  type?: boolean;
  text: string;
  onClick?: () => void;
}

const ShortButton = ({ type = true, text, onClick }: ShortButtonProps) => {
  const handleButtonClick = () => {
    // QR 및 링크 생성
  };

  return (
    <button
      className={`${
        type ? "bg-c-green" : "bg-c-indigo"
      } text-white p-3 rounded-lg w-[125px] font-pre text-[16px]`}
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

export default ShortButton;
