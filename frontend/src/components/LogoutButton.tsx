import { useNavigate } from 'react-router-dom';

interface LogoutButtonProps {
  iconSrc: string; // 이미지 소스는 문자열로 표현
  logoutpage: string;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ iconSrc, logoutpage }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(logoutpage);
  };

  return (
    <button onClick={handleButtonClick}>
      <img
        src={iconSrc}
        alt="Logout Icon"
        className="transition ease-in-out delay-150  hover:scale-110 duration-300"
      />
    </button>
  );
};

export default LogoutButton;
