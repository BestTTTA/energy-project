import Gettotalgrid from "../hook/Energydata/totalgrid";
import Gettotalgridmonth from "../hook/Energydata/totalgridmonth";
import Image from "next/image";

export default function Cardvalue() {
    const { gridData, isLoading } = Gettotalgrid();
    const { gridDatamonth, isLoadingmonth } = Gettotalgridmonth();
  
    let kilowattsgridmonth = (gridDatamonth * 720) / 1000;
    let kilowattsgrid = (gridData * 24) / 1000;

    const iconsize = 50;

    return (
        <>
            <div className="flex justify-start items-center w-full col-span-4">
                <Image src="/png/home.png" height={30} width={30} />
                <h5 className="text-xl font-bold m-2">Thetigerteamacademy</h5>
            </div>

            <div className="grid lg:grid-cols-4 grid-cols-2 w-full divide-x-2 border-solid border-2 border-grey-500 lg:p-4 p-1 rounded">
                <div className="flex flex-row justify-center items-center w-full col-span-1 gap-2">
                    <Image
                        src="/png/solaryield.png"
                        alt=""
                        height={iconsize}
                        width={iconsize}
                    />
                    <div className="flex flex-col justify-start items-start w-fit">
                        <p className="font-bold text-xl flex flex-row items-end ">
                            Value<p className="mx-1 font-thin text-sm text-gray-400">Watt</p>
                        </p>
                        <p className="text-gray-400">Total yield</p>
                    </div>
                </div>

                <div className="flex flex-row justify-center items-start w-full col-span-1 gap-2">
                    <Image
                        src="/png/totalyield.png"
                        alt=""
                        height={iconsize}
                        width={iconsize}
                    />
                    <div className="flex flex-col justify-start items-start w-fit">
                        <p className="font-bold text-xl flex flex-row items-end ">
                            Value<p className="mx-1 font-thin text-sm text-gray-400">Watt</p>
                        </p>
                        <p className="text-gray-400">Total yield</p>
                    </div>
                </div>

                <div className="flex flex-row justify-center items-start w-full col-span-1 gap-2">
                    <Image
                        src="/png/consum.png"
                        alt=""
                        height={iconsize}
                        width={iconsize}
                    />
                    <div className="flex flex-col justify-start items-start w-fit">
                        <p className="font-bold text-xl flex flex-row items-end ">
                            {isLoading ? <p>Loading...</p> : <p>{kilowattsgrid}</p>}
                            <p className="mx-1 font-thin text-sm text-gray-400">kWh</p>
                        </p>
                        <p className="text-gray-400">Total grid energy day</p>
                    </div>
                </div>

                <div className="flex flex-row justify-center items-start w-full col-span-1 gap-2">
                    <Image
                        src="/png/consumpv.png"
                        alt=""
                        height={iconsize}
                        width={iconsize}
                    />
                    <div className="flex flex-col justify-start items-start w-fit">
                        <p className="font-bold text-xl flex flex-row items-end ">
                            {isLoadingmonth ? <p>Loading...</p> : <p>{kilowattsgridmonth}</p>}
                            <p className="mx-1 font-thin text-sm text-gray-400">kWh</p>
                        </p>
                        <p className="text-gray-400">Total grid energy month</p>
                    </div>
                </div>
            </div>
        </>
    );
}
