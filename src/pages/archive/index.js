import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import seasonsAPi from "../../api/seasons";
import racesAPi from "../../api/races";
import { SeasonList, SeasonReport } from "./components";

const Archive = () => {
  const [selectedSeasonInfo, setSelectedSeasonInfo] = useState(null);
  const getSeasonsApi = useApi(seasonsAPi.getSeasons);
  const getRacesApi = useApi(racesAPi.getRacesForYear);

  useEffect(() => {
    getSeasonsApi.request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeSeason = (seasonInfo) => {
    setSelectedSeasonInfo(seasonInfo);

    getRacesApi.request(seasonInfo.season);
  };

  return (
    <>
      <SeasonList
        data={getSeasonsApi?.data?.MRData?.StandingsTable?.StandingsLists || []}
        selectedSeasonInfo={selectedSeasonInfo}
        onChangeSeason={handleChangeSeason}
        loading={getSeasonsApi.loading}
      />
      {!getSeasonsApi.loading && (
        <SeasonReport
          data={getRacesApi.data?.MRData?.RaceTable?.Races || []}
          championId={
            selectedSeasonInfo?.DriverStandings?.[0]?.Driver?.driverId
          }
          loading={getRacesApi.loading}
        />
      )}
    </>
  );
};

export default Archive;
