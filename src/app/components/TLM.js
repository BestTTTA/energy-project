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
        <div className="flex flex-col justify-center items-center gap-8 w-full">
            <div className="flex flex-col justify-center items-center gap-8 w-fit">
                <div className="flex flex-row justify-start items-center w-full gap-2">
                    <Image
                        src="/png/sunny (1).png"
                        alt=""
                        height={iconsize}
                        width={iconsize}
                    />
                    <div className="flex flex-col justify-start items-start w-fit">
                        <div className="font-bold text-xl flex flex-row items-end ">
                            {isLoadinglux ? <div>Loading...</div> : <div>{luxData}</div>}
                            <div className="mx-1 font-thin text-sm text-gray-400">Lux</div>
                        </div>
                        <div className="text-gray-400">Light intensity</div>
                    </div>
                </div>

                <div className="flex flex-row justify-start items-center w-full gap-2">
                    <Image
                        src="/png/weather.png"
                        alt=""
                        height={iconsize}
                        width={iconsize}
                    />
                    <div className="flex flex-col justify-start items-start w-fit">
                        <div className="font-bold text-xl flex flex-row items-end ">
                            {isLoadingtemp ? <div>Loading...</div> : <div>{tempData}</div>}
                            <div className="mx-1 font-thin text-sm text-gray-400"> ºC</div>
                        </div>
                        <div className="text-gray-400">Temperature</div>
                    </div>
                </div>

                <div className="flex flex-row justify- items-center w-full gap-2">
                    <Image
                        src="/png/cloud.png"
                        alt=""
                        height={iconsize}
                        width={iconsize}
                    />
                    <div className="flex flex-col justify-start items-start w-fit">
                        <div className="font-bold text-xl flex flex-row items-end ">
                            {isLoadinghumid ? <div>Loading...</div> : <div>{humidData}</div>}
                            <div className="mx-1 font-thin text-sm text-gray-400">%RH</div>
                        </div>
                        <div className="text-gray-400">Humidity</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
