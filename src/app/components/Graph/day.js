import * as React from "react";
import Stack from "@mui/material/Stack";
import { LineChart } from "@mui/x-charts/LineChart";

export default function ConnectNulls() {
  const solarData = [3, 6, 7, 4, 9, 5, 11, 3, 7, 11, 9];
  const loadData = [3, 12, 7, 4, 10, 12, 11, 3, 7, 5, 9];

  return (
    <div className="w-full border-solid border-2 border-grey-500 rounded my-2">
      <Stack sx={{ width: "100%" }}>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16, 18, 20] }]}
          series={[
            {
              label: "load",
              data: loadData,
              area: true,
            },
            {
              label: "solar",
              data: solarData,
              area: true,
            },
          ]}
          height={200}
          margin={{ top: 10, bottom: 20 }}
        />
      </Stack>
    </div>
  );
}
