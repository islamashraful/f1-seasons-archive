import React from "react";
import ListGroup from "../../../../components/ListGroup";

const SeasonList = ({ data }) => {
  const items = data?.map((item) => ({
    content: (
      <>
        <div className="ms-2 me-auto">
          <p className="lead mb-1">
            <i className="bi bi-trophy me-1"></i>
            {`${item?.DriverStandings?.[0]?.Driver?.givenName} ${item?.DriverStandings?.[0]?.Driver?.familyName}`}
          </p>
          <p className="font-monospace mb-0">
            <i className="bi bi-calendar3 me-1"></i>
            {item.season}
          </p>
        </div>
        <p className="fs-5 text-primary">
          {item?.DriverStandings?.[0].Constructors?.[0].name}
        </p>
      </>
    ),
  }));

  return (
    <div className="col-md-4 col-xs-12">
      <ListGroup
        items={items}
        listClassName="list-group-item d-flex justify-content-between align-items-start"
      />
    </div>
  );
};

export default SeasonList;
