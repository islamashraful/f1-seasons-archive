import React from "react";

const ListGroup = ({ listClassName, items }) => (
  <ul className="list-group">
    {items.map(
      (item, index) =>
        item.content || (
          <li className={listClassName || "list-group-item"} key={index}>
            {item.title}
          </li>
        )
    )}
  </ul>
);

export default ListGroup;
