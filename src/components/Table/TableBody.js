import React from "react";
import { resolvePath } from "./utils";

const TableBody = ({ data, columns }) => (
  <tbody>
    {data?.map((item, index) => (
      <tr key={index}>
        {columns?.map((column, columnIndex) => (
          <td key={(column.path || column.key) + columnIndex}>
            {column.content
              ? column.content(item)
              : resolvePath(item, column.path)}
          </td>
        )) || []}
      </tr>
    )) || []}
  </tbody>
);

export default TableBody;
