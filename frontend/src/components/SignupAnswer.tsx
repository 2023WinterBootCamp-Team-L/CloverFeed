import React from 'react';

interface SignupAnswerProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const SignupAnswer: React.FC<SignupAnswerProps> = ({ value, onChange }) => {
  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="bg-white text-black w-56 h-10 rounded-lg border-2 border-emerald-500 leading-1.25 p-2 text-sm"
      />
    </div>
  );
};

export default SignupAnswer;
