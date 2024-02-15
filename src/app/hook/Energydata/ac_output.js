import { useState, useEffect } from "react";
import { InfluxDB } from "@influxdata/influxdb-client";

const ACoutput = () => {
  const [ACoutputData, setACoutputData] = useState(null);
  const [isLoadingACoutput, setIsLoadingACoutput] = useState(true);

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
      |> filter(fn: (r) => r["_field"] == "ac_output_apparent_power")
      |> last()
      `;
      try {
        const result = await queryApi.collectRows(fluxQuery);
        setACoutputData(result[0]._value);
      } catch (error) {
        console.error("Error querying InfluxDB:", error);
        setACoutputData("Error");
      } finally {
        setIsLoadingACoutput(false);
      }
    };

    fetchSolar();
  }, []);

  return {
    ACoutputData,
    isLoadingACoutput,
  };
};

export default ACoutput;
