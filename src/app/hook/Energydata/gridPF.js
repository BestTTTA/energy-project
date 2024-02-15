import { useState, useEffect } from "react";
import { InfluxDB } from "@influxdata/influxdb-client";

const GridPF = () => {
  const [gridPF, setGridPF] = useState(null);
  const [isLoadingGridPF, setIsLoadingGridPF] = useState(true);

  useEffect(() => {
    const influxDB = new InfluxDB({
      url: process.env.NEXT_PUBLIC_INFLUXDB_URL,
      token: process.env.NEXT_PUBLIC_INFLUXDB_TOKEN,
    });

    const queryApi = influxDB.getQueryApi("TTTA");

    const fetchSolar = async () => {
      const fluxQuery = `
      from(bucket: "TTTA ENERGY")
      |> range(start: -1m)
      |> filter(fn: (r) => r["_measurement"] == "ESP32GRID")
      |> filter(fn: (r) => r["_field"] == "PF")
      |> last()
      `;
      try {
        const result = await queryApi.collectRows(fluxQuery);
        setGridPF(result[0]._value);
      } catch (error) {
        console.error("Error querying InfluxDB:", error);
        setGridPF("Error");
      } finally {
        setIsLoadingGridPF(false);
      }
    };

    fetchSolar();
  }, []);

  return {
    gridPF,
    isLoadingGridPF,
  };
};

export default GridPF;
