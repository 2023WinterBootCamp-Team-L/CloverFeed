const Line = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <p className="font-pre text-[14px] font-bold px-2">{text}</p>
      <div className="border-t border-c-yellow border-solid border-4 w-full"></div>
    </div>
  );
};

export default Line;
