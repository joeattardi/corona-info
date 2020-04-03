import React from 'react';

import numeral from 'numeral';

export default function NumberCell({ rowData, column }) {
  return <div>{numeral(rowData[column.property]).format('0,0')}</div>;
}
