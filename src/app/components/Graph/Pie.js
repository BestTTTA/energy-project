import { PieChart } from '@mui/x-charts/PieChart';
import ACoutput from '../../hook/Energydata/ACoutput';
import Load from '../../hook/Energydata/load'


export default function PieActiveArc() {

    const { ACdata, isLoadingACdata } = ACoutput();
    const { loadData, isLoadingload } = Load();

    const data = [
        { value: loadData, label: 'LOAD(Watt)' },
        { value: ACdata, label: 'AC output(Watt)' },
    ];

    return (
        <>
            {isLoadingACdata ? (
                <div className='w-full flex justify-center items-center'>Loading...</div>
            ) : (<div className='w-full flex justify-center items-center'>
                <PieChart
                    series={[
                        {
                            data,
                            highlightScope: { faded: 'global', highlighted: 'item' },
                            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                        },
                    ]}
                    height={200}
                />
            </div>)}
        </>
    );
}