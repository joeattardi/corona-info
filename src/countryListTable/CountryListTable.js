import React, { useState } from 'react';

import SimpleCell from './SimpleCell';
import TableHeader from './TableHeader';

import styles from './CountryListTable.module.scss';

function getCellComponent(column, rowData, data, rowIndex) {
  let Component = column.component || SimpleCell;
  return (
    <Component
      rowData={rowData}
      column={column}
      data={data}
      rowIndex={rowIndex}
    />
  );
}

export default function CountryListTable({ data, columns, initialSort }) {
  const [currentSort, setCurrentSort] = useState(initialSort);
  const [sortDirection, setSortDirection] = useState('desc');

  function handleSort(property) {
    if (property === currentSort) {
      setSortDirection(sortDirection === 'desc' ? 'asc' : 'desc');
    } else {
      setSortDirection('desc');
    }

    setCurrentSort(property);
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map(column => (
            <TableHeader
              key={column.property}
              column={column}
              currentSort={currentSort}
              sortDirection={sortDirection}
              onSort={handleSort}
            />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((countryData, rowIndex) => (
          <tr key={countryData.countryInfo.iso2}>
            {columns.map(column => (
              <td key={column.property}>
                {getCellComponent(column, countryData, data, rowIndex)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
