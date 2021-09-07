import React, { useMemo } from "react";
import { ListGroup, LoadingIndicator } from "../../../../components";
import { getListItems } from "./helper";
import "./styles.css";

const SeasonList = ({ data, selectedSeasonInfo, loading, onChangeSeason }) => {
  const items = useMemo(
    () => getListItems(data, selectedSeasonInfo?.season, onChangeSeason),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedSeasonInfo?.season, data]
  );

  return (
    <div className="col-md-4 col-xs-12">
      {loading ? <LoadingIndicator /> : <ListGroup items={items} />}
    </div>
  );
};

export default SeasonList;
