import 돋보기 from "../assets/돋보기.svg";


interface searchbuttonProps {
  text: string;
  onClick: () => void;
}

  
  const searchbutton: React.FC<searchbuttonProps> = ({ input, onClick }) => {
    const handleButtonClick = () => {
      onClick();
    };
  
    return (
      <div
        className={
          "bg-white border-c-green border-opacity-50 border-2 text-black rounded-lg h-12 text-left px-4 text-sm leading-1.25 flex items-center justify-between"
        }
      >
        {text}
        <button onClick={handleButtonClick}>
          <img src={돋보기} alt="Plus Icon" className="h-4 w-4" />
        </button>
      </div>
    );
  };
  

export default searchbutton;
