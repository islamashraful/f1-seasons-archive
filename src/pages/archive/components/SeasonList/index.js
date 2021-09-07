import React from "react";
import ListGroup from "../../../../components/ListGroup";

const defaultClassName =
  "list-group-item d-flex justify-content-between align-items-start";

const getClassName = (current, selected) =>
  current === selected ? `${defaultClassName} active` : defaultClassName;

const SeasonList = ({ data, selectedSeason, onChangeSeason }) => {
  const items = data?.map((item, index) => ({
    content: (
      <li
        className={getClassName(item.season, selectedSeason)}
        key={index + item.season}
      >
        <div
          className="ms-2 me-auto"
          onClick={() => onChangeSeason(item.season)}
        >
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
      </li>
    ),
  }));

  return (
    <div className="col-md-4 col-xs-12">
      <ListGroup items={items} />
    </div>
  );
};

export default SeasonList;
