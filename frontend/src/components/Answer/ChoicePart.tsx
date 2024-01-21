function ChoicePart() {
  return (
    <div className="flex flex-1 flex-col justify-center items-center">
      <button
        className={`w-80 h-[70px] font-Preahvihear text-24 text-xl font-normal rounded-xl border-2 mb-12 ${
          selectedButton === "1점"
            ? "border-[#E2E9FF] bg-[#E2E9FF]"
            : "border-[#E2E9FF] bg-white hover:border-[#E2E9FF] hover:bg-[#E2E9FF]"
        }`}
        onClick={() => handleButtonClick("1점")}
      >
        1점
      </button>
      <button
        className={`w-80 h-[70px] font-Preahvihear text-24 text-xl font-normal rounded-xl border-2 mb-12 ${
          selectedButton === "2점"
            ? "border-[#E2E9FF] bg-[#E2E9FF]"
            : "border-[#E2E9FF] bg-white hover:border-[#E2E9FF] hover:bg-[#E2E9FF]"
        }`}
        onClick={() => handleButtonClick("2점")}
      >
        2점
      </button>
      <button
        className={`w-80 h-[70px] font-Preahvihear text-24 text-xl font-normal rounded-xl border-2 mb-12 ${
          selectedButton === "3점"
            ? "border-[#E2E9FF] bg-[#E2E9FF]"
            : "border-[#E2E9FF] bg-white hover:border-[#E2E9FF] hover:bg-[#E2E9FF]"
        }`}
        onClick={() => handleButtonClick("3점")}
      >
        3점
      </button>
      <button
        className={`w-80 h-[70px] font-Preahvihear text-24 text-xl font-normal rounded-xl border-2 mb-12 ${
          selectedButton === "4점"
            ? "border-[#E2E9FF] bg-[#E2E9FF]"
            : "border-[#E2E9FF] bg-white hover:border-[#E2E9FF] hover:bg-[#E2E9FF]"
        }`}
        onClick={() => handleButtonClick("4점")}
      >
        4점
      </button>
    </div>
  );
}

export default ChoicePart;
