import React, { useState } from 'react';

import styles from './CountryCell.module.scss';

export default function CountryCell({ rowData, data, rowIndex }) {
  const maxValue = data[0].cases;
  const percent = Math.floor((rowData.cases / maxValue) * 100);

  return (
    <div>
      <div className={styles.bar} style={{ width: `calc(${percent}% - 2rem)`}}>
        <div className={styles.inner}>&nbsp;</div>
      </div>
      <span className={`${styles.flag} flag-icon flag-icon-squared flag-icon-${rowData.countryInfo.iso2.toLowerCase()}`}></span>
      {rowData.country}
    </div>
  );
}
