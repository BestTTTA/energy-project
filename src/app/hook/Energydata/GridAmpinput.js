import { useState, useEffect } from "react";
import { InfluxDB } from "@influxdata/influxdb-client";

const GridAmpinput = () => {
  const [gridAmp, setGridAmp] = useState(null);
  const [isLoadingGridAmp, setIsLoadingGridAmp] = useState(true);

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
      |> filter(fn: (r) => r["_measurement"] == "Inverter3")
      |> filter(fn: (r) => r["_field"] == "battery_charging_current")
      |> last()
      `;
      try {
        const result = await queryApi.collectRows(fluxQuery);
        setGridAmp(result[0]._value);
      } catch (error) {
        console.error("Error querying InfluxDB:", error);
        setGridAmp("Error");
      } finally {
        setIsLoadingGridAmp(false);
      }
    };

    fetchSolar();
  }, []);

  return {
    gridAmp,
    isLoadingGridAmp,
  };
};

export default GridAmpinput;
