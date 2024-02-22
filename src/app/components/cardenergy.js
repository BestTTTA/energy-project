import Cardflow from "./Energyflow/cardEnergyflow";
import TLM from "../components/TLM"
import Pie from "./Graph/Pie"
import Costpermonth from "./Graph/Costpermonth"
import Containloadgrid from "./Containloadgrid";

export default function cardenergy() {


  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-[100%] border-solid border-2 border-grey-500 rounded my-4">
        <Cardflow />
        <TLM />
        <Containloadgrid />
        <Costpermonth />
      </div>
    </>
  );

}
