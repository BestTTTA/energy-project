import { PieChart } from '@mui/x-charts/PieChart';

const data = [
    { value: 10, label: 'series A' },
    { value: 15, label: 'series B' },
    { value: 20, label: 'series C' },
];

export default function PieActiveArc() {
    return (
        <div className='w-full flex justify-center items-center'>
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
        </div>
    );
}