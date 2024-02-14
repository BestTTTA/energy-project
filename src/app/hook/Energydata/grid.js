import { useState, useEffect } from "react";
import { InfluxDB } from "@influxdata/influxdb-client";

const Gridpage = () => {
  const [gridData, setGridData] = useState(null);
  const [isLoadinggrid, setIsLoading] = useState(true);

  useEffect(() => {
    const influxDB = new InfluxDB({
      url: process.env.NEXT_PUBLIC_INFLUXDB_URL,
      token: process.env.NEXT_PUBLIC_INFLUXDB_TOKEN,
    });

    const queryApi = influxDB.getQueryApi("TTTA");

    const fetchGrid = async () => {
      const fluxQuery = `
      from(bucket: "TTTA ENERGY")
      |> range(start: -1m)
      |> filter(fn: (r) => r["_measurement"] == "ESP32GRID")
      |> filter(fn: (r) => r["_field"] == "Watts")
      |> last()
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

    fetchGrid();
  }, []);

  return {
    gridData,
    isLoadinggrid,
  };
};

export default Gridpage;
