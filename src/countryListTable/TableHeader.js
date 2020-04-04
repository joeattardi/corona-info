import React from "react";

import SortableHeader from "./SortableHeader";

export default function TableHeader({ column, currentSort, sortDirection, onSort }) {
  return (
    <th>
      {column.sortable ? (
        <SortableHeader
          column={column}
          currentSort={currentSort}
          sortDirection={sortDirection}
          onSort={() => onSort(column.property)}
        />
      ) : (
        <div>{column.label}</div>
      )}
    </th>
  );
}
