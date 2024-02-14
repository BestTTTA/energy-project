import { useState, useEffect } from "react";
import { InfluxDB } from "@influxdata/influxdb-client";

const GridPage = () => {
  const [gridData, setGridData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const influxDB = new InfluxDB({
      url: process.env.NEXT_PUBLIC_INFLUXDB_URL,
      token: process.env.NEXT_PUBLIC_INFLUXDB_TOKEN,
    });

    const queryApi = influxDB.getQueryApi("TTTA");

    const fetchGridData = async () => {
      const fluxQuery = `
        from(bucket:"TTTA ENERGY")
        |> range(start: -1d)
        |> filter(fn: (r) => r["_measurement"] == "ESP32GRID")
        |> filter(fn: (r) => r["_field"] == "Watts")
        |> aggregateWindow(every: 1d, fn: mean)
        |> toInt()
      `;
      try {
        const result = await queryApi.collectRows(fluxQuery);
        setGridData(result[0]._value);
      } catch (error) {
        console.error("Error querying InfluxDB:", error);
        setGridData("Error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchGridData();
  }, []);

  return {
    gridData,
    isLoading,
  };
};

export default GridPage;
