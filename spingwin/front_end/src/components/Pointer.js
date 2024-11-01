import React from "react";

function Pointer() {
  return (
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
      <div
        className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[30px] border-t-red-500"
        style={{
          borderRadius: "5px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Gold circle at the base of the pointer */}
        <div
          className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-5 h-5 bg-yellow-500 rounded-full border-2 border-yellow-600"
        ></div>
      </div>
    </div>
  );
}

export default Pointer;
