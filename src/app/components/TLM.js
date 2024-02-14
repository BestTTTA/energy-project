import Getlux from "../hook/Energydata/lux";
import Gettemp from "../hook/Energydata/temp";
import GetHumid from "../hook/Energydata/humid";
import Image from "next/image";

export default function TLM() {
    
    const { luxData, isLoadinglux } = Getlux();
    const { tempData, isLoadingtemp } = Gettemp();
    const { humidData, isLoadinghumid } = GetHumid();
    const iconsize = 50;

    return (
        <div className="flex flex-col justify-center items-center gap-8">
            <div className="flex flex-row justify-center items-center w-full gap-2">
                <Image
                    src="/png/sunny (1).png"
                    alt=""
                    height={iconsize}
                    width={iconsize}
                />
                <div className="flex flex-col justify-start items-start w-fit">
                    <p className="font-bold text-xl flex flex-row items-end ">
                        {isLoadinglux ? <p>Loading...</p> : <p>{luxData}</p>}
                        <p className="mx-1 font-thin text-sm text-gray-400">Lux</p>
                    </p>
                    <p className="text-gray-400">Light intensity</p>
                </div>
            </div>

            <div className="flex flex-row justify-center items-center w-full gap-2">
                <Image
                    src="/png/weather.png"
                    alt=""
                    height={iconsize}
                    width={iconsize}
                />
                <div className="flex flex-col justify-start items-start w-fit">
                    <p className="font-bold text-xl flex flex-row items-end ">
                        {isLoadingtemp ? <p>Loading...</p> : <p>{tempData}</p>}
                        <p className="mx-1 font-thin text-sm text-gray-400"> ºC</p>
                    </p>
                    <p className="text-gray-400">Temperature</p>
                </div>
            </div>

            <div className="flex flex-row justify-center items-center w-full gap-2">
                <Image
                    src="/png/cloud.png"
                    alt=""
                    height={iconsize}
                    width={iconsize}
                />
                <div className="flex flex-col justify-start items-start w-fit">
                    <p className="font-bold text-xl flex flex-row items-end ">
                        {isLoadinghumid ? <p>Loading...</p> : <p>{humidData}</p>}
                        <p className="mx-1 font-thin text-sm text-gray-400">%RH</p>
                    </p>
                    <p className="text-gray-400">Humidity</p>
                </div>
            </div>
        </div>
    )
}
