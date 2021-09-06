import React from "react";

const TableHeader = ({ columns }) => (
  <thead>
    <tr>
      {columns?.map((column) => (
        <th key={column.path || column.key}>{column.label}</th>
      )) || []}
    </tr>
  </thead>
);

export default TableHeader;
