import Bargraphload from './Graph/bargraphLoad'
import Bargraphgrid from './Graph/bargraphGrid'

export default function Containloadgrid() {
    return (
        <div className='w-full flex flex-col justify-center'>
            <Bargraphload
                loadPercent={40}
                loadValue={1500}
            />
            <Bargraphgrid
                gridPercent={60}
                gridValue={6000}
            />
        </div>
    )
}
