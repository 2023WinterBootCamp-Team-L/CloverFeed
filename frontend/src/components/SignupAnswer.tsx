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
        className="bg-white text-black w-80 h-10 rounded-lg outline-emerald-500  leading-1.25 p-2 text-sm justify-center"
      />
    </div>
  );
};

export default SignupAnswer;
