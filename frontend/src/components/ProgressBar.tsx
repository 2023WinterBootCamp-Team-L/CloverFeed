// // ProgressBar.tsx

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// interface ProgressBarProps {
//   totalPages: number; // 전체 페이지 수
// }

// const ProgressBar: React.FC<ProgressBarProps> = ({ totalPages }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unlisten = navigate((location) => {
//       // 페이지 이동 시 호출되는 함수
//       setCurrentPage((prev) => prev + 1);
//     });

//     return () => {
//       // 컴포넌트가 언마운트 되거나 페이지 이동이 끝났을 때 호출되는 함수
//       unlisten();
//     };
//   }, [navigate]);

//   const progress = (currentPage / totalPages) * 100;

//   return (
//     <div className="w-full h-4 bg-gray-300">
//       <div
//         className="h-full bg-green-500"
//         style={{ width: `${progress}%` }}
//       ></div>
//     </div>
//   );
// };

// export default ProgressBar;
