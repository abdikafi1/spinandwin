import React from "react";

function WheelSegment({ number, color }) {
  return (
    <div className="wheel-segment flex items-center justify-center" style={{ backgroundColor: color }}>
      <span className="text-white font-bold">{number}</span>
    </div>
  );
}

export default WheelSegment;
