import React from "react";

interface ProgressBarProps {
  totalSteps: number;
  currentIndex: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  totalSteps,
  currentIndex,
}) => {
  return (
    <div className="flex justify-center items-center mt-1">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "100%",
            margin: "10px",
            background: index < currentIndex ? "#50DA8C" : "#BABABA",
          }}
        ></div>
      ))}
    </div>
  );
};

export default ProgressBar;
