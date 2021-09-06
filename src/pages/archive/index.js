import React, { useEffect } from "react";
import useApi from "../../hooks/useApi";
import seasonsAPi from "../../api/seasons";
import { SeasonList, SeasonReport } from "./components";

const Archive = () => {
  const getSeasonsApi = useApi(seasonsAPi.getSeasons);

  useEffect(() => {
    getSeasonsApi.request();
  }, []);

  return (
    <>
      <SeasonList
        data={getSeasonsApi?.data?.MRData?.StandingsTable?.StandingsLists || []}
      />
      <SeasonReport />
    </>
  );
};

export default Archive;
