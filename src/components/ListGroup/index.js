import React from "react";

const ListGroup = ({ listClassName, items }) => (
  <ul className="list-group">
    {items.map((item, index) => (
      <li className={listClassName || "list-group-item"} key={index}>
        {item.content || item.title}
      </li>
    ))}
  </ul>
);

export default ListGroup;
