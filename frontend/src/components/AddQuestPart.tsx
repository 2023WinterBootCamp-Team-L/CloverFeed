// import { useNavigate } from "react-router-dom";
// import AddButton from "../components/AddButton";
// import { useState } from "react";

// function AddQuestPart() {
//   interface QuestionListProps {
//     inputs: string[];
//     setInputs: React.Dispatch<React.SetStateAction<string[]>>;
//   }

//   const QuestionList: React.FC<QuestionListProps> = ({ inputs, setInputs }) => {
//     const onInputChange =
//       (index: number) => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//         const newInputs = [...inputs];
//         newInputs[index] = e.target.value;
//         setInputs(newInputs);
//       };

//     return (
//       <div className="space-y-1.5">
//         {inputs.map((input, index) => (
//           <Question
//             key={index}
//             value={input}
//             onChange={(e) => onInputChange(index)(e)}
//           />
//         ))}
//       </div>
//     );
//   };

//   const [inputs, setInputs] = useState<string[]>([]);

//   const navigate = useNavigate();
//   const handleAddButtonClick = () => {
//     setInputs([...inputs, ""]);
//     navigate("/queryadd");
//   };

//   return (
//     <div className="flex flex-col gap-2">
//       <p className="text-xl">추가 질문</p>
//       <QuestionList inputs={inputs} setInputs={setInputs}/>
//       <AddButton
//         text="새로운 질문을 추가해보세요"
//         onClick={handleAddButtonClick}
//       />
//     </div>
//   );
// }

// export default AddQuestPart;
