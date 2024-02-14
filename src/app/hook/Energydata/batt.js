import { useState, useEffect } from "react";
import { InfluxDB } from "@influxdata/influxdb-client";

const Battpage = () => {
  const [battData, setBattData] = useState(null);
  const [isLoadingbatt, setIsLoading] = useState(true);

  useEffect(() => {
    const influxDB = new InfluxDB({
      url: process.env.NEXT_PUBLIC_INFLUXDB_URL,
      token: process.env.NEXT_PUBLIC_INFLUXDB_TOKEN,
    });

    const queryApi = influxDB.getQueryApi("TTTA");

    const fetchBatt = async () => {
      const fluxQuery = `
      from(bucket: "TTTA ENERGY")
      |> range(start: -1m)
      |> filter(fn: (r) => r["_measurement"] == "Inverter1")
      |> filter(fn: (r) => r["_field"] == "battery_capacity")
      |> last()
      `;
      try {
        const result = await queryApi.collectRows(fluxQuery);
        setBattData(result[0]._value);
      } catch (error) {
        console.error("Error querying InfluxDB:", error);
        setBattData("Error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchBatt();
  }, []);

  return {
    battData,
    isLoadingbatt,
  };
};

export default Battpage;
