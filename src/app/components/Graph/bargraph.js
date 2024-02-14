// components/EnergyConsumptionBar.js
import React from "react";

const EnergyConsumptionBar = ({
  pvPercent,
  gridPercent,
  pvValue,
  gridValue,
}) => {
  const pvWidth = `${pvPercent}%`;
  const gridWidth = `${gridPercent}%`;

  return (
    <>
      <div className="w-full bg-gray-200 rounded h-6">
        <div
          className="bg-blue-600 h-6 rounded"
          style={{ width: pvWidth }}
        ></div>
      </div>
      <div className="flex justify-between px-2">
        <span className="text-xs font-medium text-blue-600">
          From PV: {pvValue} kWh
        </span>
        <span className="text-xs font-medium text-gray-700">
          From grid: {gridValue} kWh
        </span>
      </div>
      <div className="flex justify-between px-2 py-1">
        <span className="text-sm font-medium text-blue-600">{pvPercent}%</span>
        <span className="text-sm font-medium text-gray-700">
          {gridPercent}%
        </span>
      </div>
    </>
  );
};

export default EnergyConsumptionBar;
