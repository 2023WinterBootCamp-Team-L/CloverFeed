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
      } text-white px-2 py-2 rounded-md mt-4 text-lg w-[131px]`}
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

export default ShortButton;
