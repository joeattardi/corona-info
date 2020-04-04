import React from 'react';

import SimpleCell from './SimpleCell';

import styles from './CountryListTable.module.scss';

function getCellComponent(column, rowData, data, rowIndex) {
  let Component = column.component || SimpleCell;
  return <Component rowData={rowData} column={column} data={data} rowIndex={rowIndex} />;
}

export default function CountryListTable({ data, columns }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column.property}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((countryData, rowIndex) => (
          <tr key={countryData.countryInfo.iso2}>
            {columns.map((column) => (
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