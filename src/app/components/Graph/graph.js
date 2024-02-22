import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Day from "./day";
import Month from "./month";
import Year from "./year";
import EnergyConsumptionBar from "./bargraph";
import EnergyConsumptionBar2 from "./bargraph2";

function Recents() {
  return <Day />;
}

function Favorites() {
  return <Month />;
}

function Nearby() {
  return <Year />;
}

export default function Graph() {
  const [value, setValue] = React.useState(0);

  function renderTabContent(value) {
    switch (value) {
      case 0:
        return <Recents />;
      case 1:
        return <Favorites />;
      case 2:
        return <Nearby />;
      default:
        return null;
    }
  }

  return (
    <div className="w-full flex items-center flex-col p-2">
      <div className="w-full flex flex-rows justify-between">
        <div className="font-bold text-lg">Energy management</div>
        <div className="w-fit">
          {/* <ButtonGroup
            className="grid grid-cols-3"
            variant="outlined"
            aria-label="outlined button group"
          >
            <Button onClick={() => setValue(0)}>Day</Button>
            <Button onClick={() => setValue(1)}>Month</Button>
            <Button onClick={() => setValue(2)}>Year</Button>
          </ButtonGroup> */}
        </div>
      </div>
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 my-3 gap-4">
        <div className="p-4 border-2 rounded">
          <EnergyConsumptionBar
            pvPercent={30.63}
            gridPercent={77.37}
            pvValue={66.96}
            gridValue={228.87}
          />
        </div>
        <div className="p-4 border-2 rounded">
          <EnergyConsumptionBar2
            pvPercent={70.63}
            gridPercent={77.37}
            pvValue={66.96}
            gridValue={228.87}
          />
        </div>
      </div>
      {renderTabContent(value)}
    </div>
  );
}
