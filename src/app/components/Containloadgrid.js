import Bargraphload from './Graph/bargraphLoad'
import Bargraphgrid from './Graph/bargraphGrid'
import BargraphLoadandGrid from './Graph/bargraphLoadandGrid'

export default function Containloadgrid() {
    return (
        <div className='w-full flex flex-col justify-center'>
            <BargraphLoadandGrid loadPercent={50} gridPercent={50} loadValue={5000} gridValue={5000} />
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
