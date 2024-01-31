import React from "react";
import AnswerOption from "./AnswerOption";

interface AnswerOptionListProps {
  inputs: string[];
  setInputs: React.Dispatch<React.SetStateAction<string[]>>;
  onCompleteChange?: (complete: boolean) => void;
  onUpdateInputs?: (inputs: string[]) => void;
}

const AnswerOptionList: React.FC<AnswerOptionListProps> = ({
  inputs,
  setInputs,
  onCompleteChange,
  onUpdateInputs,
}) => {
  const onInputChange =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const newInputs = [...inputs];
      newInputs[index] = e.target.value;
      setInputs(newInputs);
      onUpdateInputs && onUpdateInputs(newInputs);
    };

  const onItemDelete = (index: number) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
    onUpdateInputs && onUpdateInputs(newInputs);
  };

  React.useEffect(() => {
    const isComplete = inputs.every((input) => input !== "");
    onCompleteChange && onCompleteChange(isComplete);
  }, [inputs, onCompleteChange]);

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
