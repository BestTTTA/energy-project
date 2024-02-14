import { useState, useEffect } from "react";
import { InfluxDB } from "@influxdata/influxdb-client";

const Humidpage = () => {
  const [humidData, setHumidData] = useState(null);
  const [isLoadinghumid, setIsLoading] = useState(true);

  useEffect(() => {
    const influxDB = new InfluxDB({
      url: process.env.NEXT_PUBLIC_INFLUXDB_URL,
      token: process.env.NEXT_PUBLIC_INFLUXDB_TOKEN,
    });

    const queryApi = influxDB.getQueryApi("TTTA");

    const fetchHumid = async () => {
      const fluxQuery = `
      from(bucket: "TTTA ENERGY")
      |> range(start: -1m)
      |> filter(fn: (r) => r["_measurement"] == "ET")
      |> filter(fn: (r) => r["_field"] == "Humidity_float")
      |> last()
      `;
      try {
        const result = await queryApi.collectRows(fluxQuery);
        setHumidData(result[0]._value);
      } catch (error) {
        console.error("Error querying InfluxDB:", error);
        setHumidData("Error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchHumid();
  }, []);

  return {
    humidData,
    isLoadinghumid,
  };
};

export default Humidpage;
