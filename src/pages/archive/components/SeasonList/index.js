import React from "react";
import ListGroup from "../../../../components/ListGroup";

const SeasonList = ({ data }) => {
  const items = [
    {
      content: (
        <>
          <div className="ms-2 me-auto">
            <p className="lead mb-1">
              <i className="bi bi-trophy me-1"></i>Ashraful Islam
            </p>
            <p className="font-monospace mb-0">
              <i className="bi bi-calendar3 me-1"></i>2005
            </p>
          </div>
          <p className="fs-5 text-primary">Renault</p>
        </>
      ),
    },
  ];
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
