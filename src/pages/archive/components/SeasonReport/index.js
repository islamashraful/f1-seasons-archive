import React from "react";
import Table from "../../../../components/Table";

const columns = [
  {
    path: "round",
    label: "Round / Race",
  },
  {
    path: "winner",
    label: "Winner",
  },
  {
    path: "automake",
    label: "Auto Make",
  },
];

const data = [
  {
    round: 1,
    winner: "john",
    automake: "audi",
  },
];

const SeasonReport = () => (
  <div className="col-md-8 col-xs-12">
    <Table columns={columns} data={data} />
  </div>
);

export default SeasonReport;
