import { useState, useEffect } from "react";
import { InfluxDB } from "@influxdata/influxdb-client";

const Solarpage = () => {
  const [solarData, setSolarData] = useState(null);
  const [isLoadingsolar, setIsLoading] = useState(true);

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
      |> filter(fn: (r) => r["_measurement"] == "Inverter1")
      |> filter(fn: (r) => r["_field"] == "pv_charging_power")
      |> last()
      `;
      try {
        const result = await queryApi.collectRows(fluxQuery);
        setSolarData(result[0]._value);
      } catch (error) {
        console.error("Error querying InfluxDB:", error);
        setSolarData("Error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSolar();
  }, []);

  return {
    solarData,
    isLoadingsolar,
  };
};

export default Solarpage;
