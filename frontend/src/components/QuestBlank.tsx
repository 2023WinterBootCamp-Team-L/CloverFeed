import React, { useState } from "react";

interface QuestBlankProps {
  onChange: (value: string) => void;
}

const QuestBlank: React.FC<QuestBlankProps> = ({ onChange }) => {
  const [input, setInput] = useState("");

  const handleChange = (value: string) => {
    setInput(value);
    onChange(value);
  };

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        className="h-40 w-full border-emerald-200 border-2 rounded-lg focus:outline-none leading-1.25 p-2 text-sm"
      />
    </div>
  );
};

export default QuestBlank;
