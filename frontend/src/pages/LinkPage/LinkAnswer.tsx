import ChoicePart from "../../components/Answer/ChoicePart";
import ShortPart from "../../components/Answer/ShortPart";
import BackButton from "../../components/BackButton";

function LinkAnswer() {
  const data = {
    answerType: "short",
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className="flex flex-col justify-center items-center overflow-hidden relative border-2 border-gray-300 bg-emerald-50 "
        style={{ width: "393px", height: "852px" }}
      >
        <div className="flex justify-between w-full px-4 pt-4">
          <BackButton back page="/LinkTag2" />
          <BackButton back={false} page="/check" />
        </div>
        <div className="flex-col flex-full justify-between pt-12 pb-12">
          <p className="text-left font-Preahvihear text-24 text-xl font-normal font-weight-400 ">
            XXX님에게 전하고 싶은 칭찬이 있나요? {/*Question*/}
          </p>
        </div>
        <div className="flex flex-1 flex-col justify-center items-center">
          {data.answerType === "choice" && <ChoicePart />}
          {data.answerType === "short" && <ShortPart />}
        </div>
      </div>
    </div>
  );
}

export default LinkAnswer;
