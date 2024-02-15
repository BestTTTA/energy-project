import Gettotalgrid from "../hook/Energydata/totalgrid";
import Gettotalgridmonth from "../hook/Energydata/totalgridmonth";
import GetSolar from "../hook/Energydata/solar"
import GetSolar2 from "../hook/Energydata/solar2"
import GetSolar3 from "../hook/Energydata/solar3"
import GetAcOutput from "../hook/Energydata/ac_output"
import GetAcOutput2 from "../hook/Energydata/ac_output2"
import GridAmpinput from "../hook/Energydata/GridAmpinput"
import GridVoltinput from "../hook/Energydata/GridVoltinput"
import GridPF from "../hook/Energydata/gridPF"
import Load from "../hook/Energydata/load"
import Image from "next/image";

export default function Cardvalue() {
    const { gridData, isLoading } = Gettotalgrid();
    const { gridDatamonth, isLoadingmonth } = Gettotalgridmonth();

    let kilowattsgridmonth = (gridDatamonth * 720) / 1000;
    let kilowattsgrid = (gridData * 24) / 1000;


    const { solarData, isLoadingsolar } = GetSolar();
    const { solarData2, isLoadingsolar2 } = GetSolar2();
    const { solarData3, isLoadingsolar3 } = GetSolar3();
    let GetSolar4 = (solarData + solarData2) / 2
    let GetAllSolar = solarData + solarData2 + solarData3 + GetSolar4
    GetAllSolar = parseFloat(GetAllSolar.toFixed(2));



    const { ACoutputData, isLoadingACoutput } = GetAcOutput();
    const { ACoutputData2, isLoadingACoutput2 } = GetAcOutput2();
    let Acoutput3 = (ACoutputData + ACoutputData2) / 2
    let AllAcoutput = ACoutputData + ACoutputData2 + Acoutput3
    AllAcoutput = parseFloat(AllAcoutput.toFixed(2));


    const { gridAmp, isLoadingGridAmp } = GridAmpinput();
    const { gridVolt, isLoadingGridVolt } = GridVoltinput();
    const { gridPF, isLoadingGridPF } = GridPF();
    let Gridinput = gridAmp * gridVolt * gridPF;
    Gridinput = parseFloat(Gridinput.toFixed(2));


    const { loadData, isLoadingload } = Load();
    let Loaddeximal = typeof loadData === 'number' ? parseFloat(loadData.toFixed(2)) : null;



    const iconsize = 50;

    return (
        <div>
            <div className="flex justify-start items-center w-full col-span-4">
                <Image src="/png/home.png" height={30} width={30} />
                <h5 className="text-xl font-bold m-2">TheTigerTeamAcademy</h5>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2 w-full divide-x-2 border-solid border-2 border-grey-500 lg:p-4 p-1 rounded">
                <div className="flex flex-row justify-center items-center w-full col-span-1 gap-2">
                    <Image
                        src="/png/solarblack.png"
                        alt=""
                        height={iconsize}
                        width={iconsize}
                    />
                    <div className="flex flex-col justify-start items-start w-fit">
                        <div className="font-bold text-lg flex flex-row items-end ">
                            {isLoading ? <div>Loading...</div> : <div>{GetAllSolar}</div>}
                            <div className="mx-1 font-thin text-sm text-gray-400">Watt</div>
                        </div>
                        <div className="text-gray-400">Solar Input</div>
                    </div>
                </div>

                <div className="flex flex-row justify-center items-start w-full col-span-1 gap-2">
                    <Image
                        src="/png/ac-power.png"
                        alt=""
                        height={iconsize}
                        width={iconsize}
                    />
                    <div className="flex flex-col justify-start items-start w-fit">
                        <div className="font-bold text-lg flex flex-row items-end ">
                            {isLoading ? <div>Loading...</div> : <div>{AllAcoutput}</div>}
                            <div className="mx-1 font-thin text-sm text-gray-400">Watt</div>
                        </div>
                        <div className="text-gray-400">AC Output</div>
                    </div>
                </div>

                <div className="flex flex-row justify-center items-start w-full col-span-1 gap-2">
                    <Image
                        src="/png/electricity.png"
                        alt=""
                        height={iconsize}
                        width={iconsize}
                    />
                    <div className="flex flex-col justify-start items-start w-fit">
                        <div className="font-bold text-lg flex flex-row items-end ">
                            {isLoading ? <div>Loading...</div> : <div>{Gridinput}</div>}
                            <div className="mx-1 font-thin text-sm text-gray-400">Watt</div>
                        </div>
                        <div className="text-gray-400">Grid Input</div>
                    </div>
                </div>

                <div className="flex flex-row justify-center items-start w-full col-span-1 gap-2">
                    <Image
                        src="/png/smart-home.png"
                        alt=""
                        height={iconsize}
                        width={iconsize}
                    />
                    <div className="flex flex-col justify-start items-start w-fit">
                        <div className="font-bold text-lg flex flex-row items-end ">
                            {isLoadingmonth ? <div>Loading...</div> : <div>{Loaddeximal}</div>}
                            <div className="mx-1 font-thin text-sm text-gray-400">Watt</div>
                        </div>
                        <div className="text-gray-400">Load</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
