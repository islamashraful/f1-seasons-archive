import React, { useCallback, useEffect, useState } from "react";
import { useApi, useIsMountedRef } from "../../hooks";
import seasonsAPi from "../../api/seasons";
import racesAPi from "../../api/races";
import Constants from "../../config/const";
import { SeasonList, SeasonReport } from "./components";

const Archive = () => {
  const [selectedSeasonInfo, setSelectedSeasonInfo] = useState(null);
  const getSeasonsApi = useApi(seasonsAPi.getSeasons);
  const getRacesApi = useApi(racesAPi.getRacesForYear);
  const isMountedRef = useIsMountedRef();

  useEffect(() => {
    if (isMountedRef.current) {
      const { LIMIT, OFFSET } = Constants;
      getSeasonsApi.request(LIMIT, OFFSET);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeSeason = useCallback((seasonInfo) => {
    if (seasonInfo.season !== selectedSeasonInfo?.season) {
      setSelectedSeasonInfo(seasonInfo);

      getRacesApi.request(seasonInfo.season);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
