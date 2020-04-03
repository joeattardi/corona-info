import React from 'react';

export default function SimpleCell({ rowData, column }) {
  return <div>{rowData[column.property]}</div>;
}
