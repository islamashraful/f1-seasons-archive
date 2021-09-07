import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import seasonsAPi from "../../api/seasons";
import racesAPi from "../../api/races";
import { SeasonList, SeasonReport } from "./components";

const Archive = () => {
  const [selectedSeason, setSelectedSeason] = useState(null);
  const getSeasonsApi = useApi(seasonsAPi.getSeasons);
  const getRacesApi = useApi(racesAPi.getRacesForYear);

  useEffect(() => {
    getSeasonsApi.request();
  }, []);

  const handleChangeSeason = (season) => {
    setSelectedSeason(season);

    getRacesApi.request(season);
  };

  return (
    <>
      <SeasonList
        data={getSeasonsApi?.data?.MRData?.StandingsTable?.StandingsLists || []}
        selectedSeason={selectedSeason}
        onChangeSeason={handleChangeSeason}
      />
      <SeasonReport data={getRacesApi.data?.MRData?.RaceTable?.Races || []} />
    </>
  );
};

export default Archive;
