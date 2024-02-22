import React from "react";

const bargraphGrid = ({
  gridPercent,
  gridValue,
}) => {
  const gridWidth = `${gridPercent}%`;

  return (
    <div className="w-full">
      <div className="w-full bg-gray-200 rounded h-3">
        <div
          className="bg-blue-600 h-3 rounded"
          style={{ width: gridWidth }}
        ></div>
      </div>
      <div className="flex justify-between px-2">
        <span className="text-xs font-medium text-blue-600">
          From grid: {gridValue} Watt
        </span>
      </div>
      <div className="flex justify-between px-2 py-1">
        <span className="text-sm font-medium text-blue-600">{gridPercent}%</span>
      </div>
    </div>
  );
};

export default bargraphGrid;
