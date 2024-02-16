import GetSolar from "../hook/Energydata/solar"
import GetSolar2 from "../hook/Energydata/solar2"
import GetSolar3 from "../hook/Energydata/solar3"
import Getlux from "../hook/Energydata/lux";

export default function Optimizeright() {

    const { solarData, isLoadingsolar } = GetSolar();
    const { solarData2, isLoadingsolar2 } = GetSolar2();
    const { solarData3, isLoadingsolar3 } = GetSolar3();
    let GetSolar4 = (solarData + solarData2) / 2
    let GetAllSolar = solarData + solarData2 + solarData3 + GetSolar4
    // GetAllSolar = parseFloat(GetAllSolar.toFixed(2));

    const { luxData, isLoadinglux } = Getlux();

    const CardMode = ({ Namebox, Topic, Valuemode }) => {
        return (
            <div className='w-full border-solid border-2 rounded p-2'>
                <div className="w-full flex justify-center font-bold text-xl">{Namebox}</div>
                <div className="w-full flex justify-start">{Topic}: {Valuemode}</div>
            </div>
        );
    };

    const CardModeoutput = ({ Namebox, Topic, Valuemode }) => {
        return (
            <div className='w-full border-solid border-2 rounded p-2'>
                <div className="w-full flex justify-center font-bold text-xl">{Namebox}</div>
                <div className="w-full flex justify-start">{Topic}: {Valuemode}</div>
                <div className="w-full flex justify-start"
                    style={{ color: luxData < 10000 ? 'red' : luxData < 15000 ? 'yellow' : 'inherit' }}>
                    Light intensity: {luxData} Lux
                </div>
                <div className="w-full flex justify-start">Solar Input: {GetAllSolar}</div>
            </div>
        );
    };

    return (
        <div className="w-full p-2">
            <div className="font-bold text-lg">Optimization</div>
            <div className="flex justify-between grid lg:grid-cols-2 grid-cols-2 gap-5">
                <CardMode Namebox="Charge MODE" Topic="Current MODE" Valuemode={5} />
                <CardModeoutput Namebox="Use MODE" Topic="Current MODE" Valuemode={5} />
                <CardMode Namebox="Advice Charge MODE" Topic="Advice MODE" Valuemode={5} />
                <CardModeoutput Namebox="Advice Use MODE" Topic="Advice MODE" Valuemode={5} />
            </div>
        </div>
    )
}
