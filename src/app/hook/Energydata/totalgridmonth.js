import { useState, useEffect } from "react";
import { InfluxDB } from "@influxdata/influxdb-client";

const GridPagemonth = () => {
  const [gridDatamonth, setGridDatamonth] = useState(null);
  const [isLoadingmonth, setIsLoadingmonth] = useState(true);

  useEffect(() => {
    const influxDB = new InfluxDB({
      url: process.env.NEXT_PUBLIC_INFLUXDB_URL,
      token: process.env.NEXT_PUBLIC_INFLUXDB_TOKEN,
    });

    const queryApi = influxDB.getQueryApi("TTTA");

    const fetchGridDatamonth = async () => {
      const fluxQuery = `
        from(bucket:"TTTA ENERGY")
        |> range(start: -30d)
        |> filter(fn: (r) => r["_measurement"] == "ESP32GRID")
        |> filter(fn: (r) => r["_field"] == "Watts")
        |> aggregateWindow(every: 1d, fn: mean)
        |> toInt()
      `;
      try {
        const result = await queryApi.collectRows(fluxQuery);
        setGridDatamonth(result[0]._value);
      } catch (error) {
        console.error("Error querying InfluxDB:", error);
        setGridDatamonth("Error");
      } finally {
        setIsLoadingmonth(false);
      }
    };

    fetchGridDatamonth();
  }, []);

  return {
    gridDatamonth,
    isLoadingmonth,
  };
};

export default GridPagemonth;
