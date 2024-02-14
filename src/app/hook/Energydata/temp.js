import { useState, useEffect } from "react";
import { InfluxDB } from "@influxdata/influxdb-client";

const Temppage = () => {
  const [tempData, setTempData] = useState(null);
  const [isLoadingtemp, setIsLoading] = useState(true);

  useEffect(() => {
    const influxDB = new InfluxDB({
      url: process.env.NEXT_PUBLIC_INFLUXDB_URL,
      token: process.env.NEXT_PUBLIC_INFLUXDB_TOKEN,
    });

    const queryApi = influxDB.getQueryApi("TTTA");

    const fetchTemp = async () => {
      const fluxQuery = `
      from(bucket: "TTTA ENERGY")
      |> range(start: -1m)
      |> filter(fn: (r) => r["_measurement"] == "ET")
      |> filter(fn: (r) => r["_field"] == "Temperature_float")
      |> last()
      `;
      try {
        const result = await queryApi.collectRows(fluxQuery);
        setTempData(result[0]._value);
      } catch (error) {
        console.error("Error querying InfluxDB:", error);
        setTempData("Error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTemp();
  }, []);

  return {
    tempData,
    isLoadingtemp,
  };
};

export default Temppage;
