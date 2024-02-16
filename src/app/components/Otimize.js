import Energygraph from '../components/energyGraph'
import Optimizeright from './Optimizeright'

export default function Otimize() {
    return (
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 w-[100%]  border-solid border-2 border-grey-500 rounded my-4">
            <Energygraph />
            <Optimizeright />
        </div>
    )
}
