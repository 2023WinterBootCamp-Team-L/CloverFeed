interface ShortButtonProps {
  type?: boolean;
  text: string;
  onClick?: () => void;
}

const ShortButton = ({ type = true, text, onClick }: ShortButtonProps) => {
  const handleButtonClick = () => {
    // QR 및 링크 생성
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`${
        type ? 'bg-c-green' : 'bg-c-indigo'
      } text-white p-3 rounded-lg w-[125px] font-pre text-[16px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300`}
      onClick={handleButtonClick}
    >
      {text}
    </button>
  );
};

export default ShortButton;
