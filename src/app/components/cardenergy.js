import Cardflow from "./Energyflow/cardEnergyflow";
import Wheather from "../components/wheather";
import Map from "../components/map";
import TLM from "../components/TLM"

export default function cardenergy() {


  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 w-full border-solid border-2 border-grey-500 rounded my-4">
        <Cardflow />
        <TLM />
        <Wheather />
        <Map />
      </div>
    </>
  );

}
