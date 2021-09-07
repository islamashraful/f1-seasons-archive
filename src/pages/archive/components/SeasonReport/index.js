import React, { useMemo } from "react";
import { Table, LoadingIndicator } from "../../../../components";
import { getSeasonReportCols } from "./helper";

const SeasonReport = ({ data, championId, loading }) => {
  const columns = useMemo(() => getSeasonReportCols(championId), [championId]);
  const tableData = useMemo(
    () =>
      data.map((item) => ({
        ...item,
        rowHighlighted: item?.Results?.[0]?.Driver?.driverId === championId,
      })),
    [championId, data]
  );

  return (
    <div className="col-md-8 col-xs-12">
      {loading && <LoadingIndicator />}

      {!championId && (
        <h1 className="display-6">Click on a season to see races</h1>
      )}

      {!loading && !!data.length && (
        <Table columns={columns} data={tableData} />
      )}
    </div>
  );
};

export default SeasonReport;
