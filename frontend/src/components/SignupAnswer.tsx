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
        disabled={false}
        className="bg-white h-10 w-56 rounded-lg border-2 border-emerald-200 pl-5 outline-none focus:border-emerald-400 text-lg"
      />
    </div>
  );
};

export default SignupAnswer;
