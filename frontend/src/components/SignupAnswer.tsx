interface SignupAnswerProps {
  type?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const SignupAnswer: React.FC<SignupAnswerProps> = ({
  type,
  value,
  onChange,
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={onChange}
        disabled={false}
        className="bg-white h-10 w-56 pl-3 border-2 border-emerald-200 rounded-lg outline-none focus:border-c-green font-pre text-[14px]"
      />
    </div>
  );
};

export default SignupAnswer;
