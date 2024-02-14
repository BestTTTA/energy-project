import { useState, useEffect } from "react";
import { InfluxDB } from "@influxdata/influxdb-client";

const Gridpage = () => {
  const [loadData, setLoadData] = useState(null);
  const [isLoadingload, setIsLoading] = useState(true);

  useEffect(() => {
    const influxDB = new InfluxDB({
      url: process.env.NEXT_PUBLIC_INFLUXDB_URL,
      token: process.env.NEXT_PUBLIC_INFLUXDB_TOKEN,
    });

    const queryApi = influxDB.getQueryApi("TTTA");

    const fetchLoad = async () => {
      const fluxQuery = `
      from(bucket: "TTTA ENERGY")
      |> range(start: -1m)
      |> filter(fn: (r) => r["_measurement"] == "LOAD")
      |> filter(fn: (r) => r["_field"] == "Watts")
      |> last()
      `;
      try {
        const result = await queryApi.collectRows(fluxQuery);
        setLoadData(result[0]._value);
      } catch (error) {
        console.error("Error querying InfluxDB:", error);
        setLoadData("Error");
      } finally {
        setIsLoading(false);
      }
    };

    fetchLoad();
  }, []);

  return {
    loadData,
    isLoadingload,
  };
};

export default Gridpage;
