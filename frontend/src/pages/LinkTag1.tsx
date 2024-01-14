// import React, { useState } from "react";
import BackButton from "../components/BackButton";
// import ExceedPopup from "../components/ExceedPopup";

function LinkTag1() {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div
        className="flex flex-col justify-center items-center overflow-hidden relative border-2 border-gray-300 bg-emerald-50 "
        style={{ width: "393px", height: "852px" }}
      >
        <div className="flex justify-between">
          <BackButton back page="/LinkPosition" />
          <BackButton back={false} page="/LinkTag2" />
        </div>
        <div className="">
          <p className=" text-left font-Preahvihear text-24 text-xl font-normal font-weight-400 ">
            당신이 생각하는 XXX 님의
          </p>
          <p className=" text-left font-Preahvihear text-24 text-xl font-normal font-weight-400 ">
            업무 능력 강점은 무엇인가요?
          </p>
          <p className=" text-left font-Preahvihear text-[#767677] text-[14px] font-normal font-weight-400 ">
            키워드를 최대 5개까지 선택해주세요.
          </p>
        </div>
        <div className="flex-full"></div>
      </div>
    </div>
  );
}

export default LinkTag1;

// LinkTag1.tsx

// interface TagProps {
//   icon?: React.ReactNode;
//   text: string;
//   isSelected: boolean;
//   onClick: () => void;
// }

// function Tag({ icon, text, isSelected, onClick }: TagProps) {
//   const baseClasses =
//     "w-[82px] h-[29px] rounded-[20px] flex items-center justify-center cursor-pointer";

//   const selectedClasses = isSelected
//     ? "bg-blue-500 text-white"
//     : "bg-gray-200 text-gray-700";

//   return (
//     <div className={`${baseClasses} ${selectedClasses}`} onClick={onClick}>
//       {icon && <span className="mr-2">{icon}</span>}
//       <span>{text}</span>
//     </div>
//   );
// }

// function LinkTag1() {
//   const [selectedTags, setSelectedTags] = useState<string[]>([]);
//   const [showExceedPopup, setShowExceedPopup] = useState(false);

//   const handleTagClick = (tag: string) => {
//     if (selectedTags.includes(tag)) {
//       // 이미 선택된 경우, 선택 해제
//       setSelectedTags(
//         selectedTags.filter((selectedTag) => selectedTag !== tag)
//       );
//     } else {
//       // 선택되지 않은 경우, 최대 5개까지만 선택
//       if (selectedTags.length < 5) {
//         setSelectedTags([...selectedTags, tag]);
//       } else {
//         // 5개 초과 선택시 팝업 표시
//         setShowExceedPopup(true);
//       }
//     }
//   };

//   const handleCloseExceedPopup = () => {
//     setShowExceedPopup(false);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen ">
//       <div
//         className="flex flex-col justify-center items-center overflow-hidden relative border-2 border-gray-300 bg-emerald-50 "
//         style={{ width: "393px", height: "852px" }}
//       >
//         <div className="flex justify-between">
//           <BackButton back page="/LinkStart" />
//           <BackButton back={false} page="/LinkTag2" />
//         </div>
//         <div className="">
//           <p className=" text-left font-Preahvihear text-24 text-xl font-normal font-weight-400 ">
//             당신이 생각하는 XXX 님의
//           </p>
//           <p className=" text-left font-Preahvihear text-24 text-xl font-normal font-weight-400 ">
//             업무 능력 강점은 무엇인가요?
//           </p>
//           <p className=" text-left font-Preahvihear text-[#767677] text-[14px] font-normal font-weight-400 ">
//             키워드를 최대 5개까지 선택해주세요.
//           </p>
//         </div>
//         <div></div>
//       </div>
//     </div>
//   );
// }

// export default LinkTag1;
