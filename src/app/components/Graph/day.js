import * as React from "react";
import Stack from "@mui/material/Stack";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { LineChart } from "@mui/x-charts/LineChart";

export default function ConnectNulls() {
  const [connectNulls, setConnectNulls] = React.useState(true);

  // Assuming this is your solar data
  const solarData = [3, 6, 7, 4, 9, 5, 11, 3, 7, 11, 9];
  const loadData = [3, 12, 7, 4, 10, 12, 11, 3, 7, 5, 9];

  return (
    <Stack sx={{ width: "100%" }}>
      <FormControlLabel
        checked={connectNulls}
        control={
          <Checkbox
            onChange={(event) => setConnectNulls(event.target.checked)}
          />
        }
        label="connectNulls"
        labelPlacement="end"
      />
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16, 18, 20] }]}
        series={[
          {
            label: "load",
            data: loadData,
            connectNulls,
            area: true,
          },
          {
            label: "solar",
            connectNulls,
            data: solarData, 
            area: true,
          },
        ]}
        height={200}
        margin={{ top: 10, bottom: 20 }}
      />
    </Stack>
  );
}
