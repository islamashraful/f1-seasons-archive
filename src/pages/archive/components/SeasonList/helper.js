import classNames from "classnames";

export const getListItems = (data, season, onChangeSeason) =>
  data?.map((item, index) => ({
    content: (
      <li
        className={classNames("list-group-item list", {
          active: item.season === season,
        })}
        key={index + item.season}
        onClick={() => onChangeSeason(item)}
      >
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
        <p className="fs-5">
          {item?.DriverStandings?.[0].Constructors?.[0].name}
        </p>
      </li>
    ),
  }));
