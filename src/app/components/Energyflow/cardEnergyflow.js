"use client";
import Image from "next/image";
import "./cardflow.css";
import Getsolar from "../../hook/Energydata/solar";
import Getbatt from "../../hook/Energydata/batt";
import Getgrid from "../../hook/Energydata/grid";
import Getload from "../../hook/Energydata/load";

export default function cardFlow() {
  const { solarData, isLoading } = Getsolar();
  const { battData, isLoadingbatt } = Getbatt();
  const { gridData, isLoadinggrid } = Getgrid();
  const { loadData, isLoadingload } = Getload();

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[300px] h-[300px] flex flex-col p-2 bg-[url('/energyflow.svg')] bg-no-repeat bg-center ">
        <div className="circlesolar"></div>
        <div className="circlebatt"></div>
        <div className="circlesolarhome"></div>
        <div className="circlegrid"></div>
        <div className=" h-full flex justify-center items-start ">
          <div className={`flex justify-center flex-col items-center w-[60px] h-[60px] border-[1px] rounded-full border-yellow-500 outline outline-offset-4 outline-1 outline-yellow-200 bg-white`}>
            <Image src="/png/solar-panel.png" alt="" height={0} width={20} />
            <p className="text-[8px] font-bold text-gray-500">
              {isLoading ? <p>Loading...</p> : <p>{solarData}</p>}
            </p>
            <p className="text-[8px] font-bold font-serif text-gray-500">Watt</p>
          </div>
        </div>
        <div className=" h-full flex justify-between items-center">
          <div
            className={`flex justify-center flex-col items-center w-[60px] h-[60px] border-[1px] rounded-full border-[#87DBDC] outline outline-offset-4 outline-1 outline-[#87dbdc7f] bg-white`}
          >
            <div className="flex justify-center items-center">
              <div className="border-2 border-black h-[15px] w-[30px] rounded relative">
                <div
                  style={{ width: `${battData}%` }}
                  className="h-full flex items-center justify-center bg-green-400"
                ></div>
                <p className="absolute text-[12px] font-bold text-black w-full flex justify-center">
                  {isLoadingbatt ? "Loading..." : `${battData}%`}
                </p>
              </div>
            </div>
          </div>
          <div
            className={`flex justify-center flex-col items-center w-[60px] h-[60px] border-[1px] rounded-full border-purple-500 outline outline-offset-4 outline-1 outline-purple-200 bg-white`}
          >
            <Image src="/png/electric-tower.png" alt="" height={0} width={20} />
            <p className="text-[8px] font-bold text-gray-500">
              {isLoadinggrid ? <p>Loading...</p> : <p>{gridData}</p>}
            </p>
            <p className="text-[8px] font-bold font-serif text-gray-500">Watt</p>
          </div>
        </div>
        <div className=" h-full flex justify-center items-end">
          <div
            className={`flex justify-center flex-col items-center w-[60px] h-[60px] border-[1px] rounded-full border-sky-500 outline outline-offset-4 outline-1 outline-sky-200 bg-white`}
          >
            <Image src="/png/energy-costs.png" alt="" height={0} width={20} />
            <p className="text-[8px] font-bold text-gray-500">
              {isLoadingload ? <p>Loading...</p> : <p>{loadData}</p>}
            </p>
            <p className="text-[8px] font-bold font-serif text-gray-500">Watt</p>
          </div>
        </div>
      </div>
    </div>
  );
}
