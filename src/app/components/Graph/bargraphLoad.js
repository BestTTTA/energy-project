import React from "react";

const bargraphLoad = ({
  loadPercent,
  loadValue,
}) => {
  const loadWidth = `${loadPercent}%`;

  return (
    <div className="w-full">
      <div className="w-full bg-gray-200 rounded h-3">
        <div
          className="bg-green-600 h-3 rounded"
          style={{ width: loadWidth }}
        ></div>
      </div>
      <div className="flex justify-between px-2">
        <span className="text-xs font-medium text-green-600">
          From LOAD: {loadValue} Watt
        </span>
      </div>
      <div className="flex justify-between px-2 py-1">
        <span className="text-sm font-medium text-green-600">{loadPercent}%</span>
      </div>
    </div>
  );
};

export default bargraphLoad;
