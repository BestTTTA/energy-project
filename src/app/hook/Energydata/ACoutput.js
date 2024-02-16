import { useState, useEffect } from "react";
import { InfluxDB } from "@influxdata/influxdb-client";

const ACoutput = () => {
  const [ACdata, setACdata] = useState(null);
  const [isLoadingACdata, setisLoadingACdata] = useState(true);

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
      |> filter(fn: (r) => r["_measurement"] == "INT")
      |> filter(fn: (r) => r["_field"] == "Watts")
      |> last()
      `;
      try {
        const result = await queryApi.collectRows(fluxQuery);
        setACdata(result[0]._value);
      } catch (error) {
        console.error("Error querying InfluxDB:", error);
        setACdata("Error");
      } finally {
        setisLoadingACdata(false);
      }
    };

    fetchLoad();
  }, []);

  return {  
    ACdata,
    isLoadingACdata,
  };
};

export default ACoutput;
