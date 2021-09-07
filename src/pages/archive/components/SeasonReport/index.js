import React from "react";
import Table from "../../../../components/Table";

const SeasonReport = ({ data }) => {
  const columns = [
    {
      label: "Round / Race",
      path: "round",
      content: (raceInfo) => (
        <div>
          Round {raceInfo.round}: {raceInfo.raceName}
        </div>
      ),
    },
    {
      label: "Winner",
      path: "winner",
      content: (raceInfo) => (
        <div>
          {raceInfo?.Results?.[0]?.Driver?.givenName}{" "}
          {raceInfo?.Results?.[0]?.Driver?.familyName}
        </div>
      ),
    },
    {
      label: "Auto Make",
      path: "auto",
      content: (raceInfo) => (
        <div>{raceInfo?.Results?.[0]?.Constructor?.name}</div>
      ),
    },
  ];

  return (
    <div className="col-md-8 col-xs-12">
      <Table columns={columns} data={data} />
    </div>
  );
};

export default SeasonReport;
