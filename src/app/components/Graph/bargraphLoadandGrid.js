import React from "react";

const bargraphLoadandGrid = ({
  loadPercent,
  gridPercent,
  loadValue,
  gridValue,
}) => {

  const loadWidth = `${loadPercent}%`;
  const gridWidth = `${gridPercent}%`;

  return (
    <div className="w-full">
      <div className="w-full bg-gray-200 rounded h-6">
        <div
          className="bg-green-600 h-6 rounded"
          style={{ width: loadWidth }}
        >
        </div>
        <div
          className="bg-green-600 h-6 rounded"
          style={{ width: gridWidth }}
        >
        </div>
      </div>
      <div className="flex justify-between px-2">
        <span className="text-xs font-medium text-green-600">
          From PV: {loadValue} kWh
        </span>
        <span className="text-xs font-medium text-gray-700">
          From grid: {gridValue} kWh
        </span>
      </div>
      <div className="flex justify-between px-2 py-1">
        <span className="text-sm font-medium text-green-600">{loadPercent}%</span>
        <span className="text-sm font-medium text-gray-700">{gridPercent}%</span>
      </div>
    </div>
  );
};

export default bargraphLoadandGrid;
