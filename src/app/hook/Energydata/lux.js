import { useState, useEffect } from "react";
import { InfluxDB } from "@influxdata/influxdb-client";

const Luxpage = () => {
  const [luxData, setLuxData] = useState(null);
  const [isLoadinglux, setIsLoading] = useState(true);

  useEffect(() => {
    const influxDB = new InfluxDB({
      url: process.env.NEXT_PUBLIC_INFLUXDB_URL,
      token: process.env.NEXT_PUBLIC_INFLUXDB_TOKEN,
    });

    const queryApi = influxDB.getQueryApi("TTTA");

    const fetchLux = async () => {
      const fluxQuery = `
      from(bucket: "TTTA ENERGY")
      |> range(start: -1m)
      |> filter(fn: (r) => r["_measurement"] == "ET")
      |> filter(fn: (r) => r["_field"] == "Light_float")
      |> last()
      `;
      try {
        const result = await queryApi.collectRows(fluxQuery);
        setLuxData(result[0]._value);
      } catch (error) {
        console.error("Error querying InfluxDB:", error);
        setLuxData("Error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchLux();
  }, []);

  return {
    luxData,
    isLoadinglux,
  };
};

export default Luxpage;
