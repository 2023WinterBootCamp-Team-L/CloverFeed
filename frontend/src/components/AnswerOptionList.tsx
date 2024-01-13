import React from "react";
import AnswerOption from "./AnswerOption";

interface AnswerOptionListProps {
  inputs: string[];
  setInputs: React.Dispatch<React.SetStateAction<string[]>>;
}

const AnswerOptionList: React.FC<AnswerOptionListProps> = ({
  inputs,
  setInputs,
}) => {
  const onInputChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newInputs = [...inputs];
      newInputs[index] = e.target.value;
      setInputs(newInputs);
    };

  const onItemDelete = (index: number) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  return (
    <div className="space-y-1.5">
      {inputs.map((input, index) => (
        <AnswerOption
          key={index}
          value={input}
          onChange={(e) => onInputChange(index)(e)}
          onDelete={() => onItemDelete(index)}
        />
      ))}
    </div>
  );
};

export default AnswerOptionList;
