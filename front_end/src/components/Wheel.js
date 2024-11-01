


import React, { useState } from "react";
import WheelSegment from "./WheelSegment";
import Pointer from "./Pointer";
import ReactConfetti from "react-confetti";

const segments = [
  { number: 1, color: "#FF0000" },
  { number: 2, color: "#FF7F00" },
  { number: 3, color: "#FFFF00" },
  { number: 4, color: "#7FFF00" },
  { number: 5, color: "#00FF00" },
  { number: 6, color: "#00FF7F" },
  { number: 7, color: "#00FFFF" },
  { number: 8, color: "#007FFF" },
  { number: 9, color: "#0000FF" },
  { number: 10, color: "#7F00FF" },
];
const totalSegments = segments.length;
const segmentAngle = 360 / totalSegments;

function Wheel() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    setSpinning(true);
    setResult(null);
    setShowConfetti(false);

    const randomIndex = Math.floor(Math.random() * segments.length);
    const winningSegmentAngle = randomIndex * segmentAngle;
    const extraRotations = 360 * 10; // Spins 10 full rotations
    const finalRotation = rotation + extraRotations + (360 - winningSegmentAngle); // Add rotation to continue spinning smoothly

    setRotation(finalRotation);
    setTimeout(() => {
      setResult(segments[randomIndex].number);
      setSpinning(false);
      setTimeout(() => setShowConfetti(true), 500);
    }, 8000); // 8 seconds for the spin duration
  };

  return (
    <div className="flex flex-col items-center">
      {showConfetti && (
        <ReactConfetti width={window.innerWidth} height={window.innerHeight} />
      )}
      <div className="relative flex items-center justify-center w-48 h-48 md:w-72 md:h-72 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-300 border-8 border-yellow-600 shadow-lg">
        <div className="absolute flex items-center justify-center w-full h-full rounded-full border-[12px] border-yellow-700">
          {/* Lights around the wheel */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-yellow-300 rounded-full shadow-md"
              style={{
                transform: `rotate(${i * 30}deg) translate(88px)`,
              }}
            />
          ))}
          {/* Center Knob */}
          <div className="absolute w-8 h-8 bg-yellow-800 rounded-full border-2 border-yellow-600"></div>
          {/* Pointer */}
          <Pointer result={result} />

          <div
            className="relative flex items-center justify-center w-full h-full rounded-full overflow-hidden transform transition-transform duration-[8000ms] ease-[cubic-bezier(0.33,1,0.68,1)]"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {segments.map((segment, index) => (
              <div
                key={index}
                className="absolute text-center transform flex items-center justify-center"
                style={{
                  backgroundColor: segment.color,
                  transform: `rotate(${index * segmentAngle}deg) translate(0, -110px)`,
                  width: "72px",
                  height: "72px",
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              >
                <span className="text-white font-bold">{segment.number}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={spinWheel}
        className={`mt-6 px-4 py-2 font-semibold rounded-md shadow-md ${
          spinning ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        } text-white`}
        disabled={spinning}
      >
        {spinning ? "Spinning..." : "Spin"}
      </button>
    </div>
  );
}

export default Wheel;
