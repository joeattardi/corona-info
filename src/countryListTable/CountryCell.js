import React, { useState } from 'react';

import styles from './CountryCell.module.scss';

export default function CountryCell({ rowData, data, rowIndex }) {
  const [isAnimating, setAnimating] = useState(true);

  const maxValue = data[0].cases;
  const percent = (rowData.cases / maxValue) * 100;

  const delay = 10 * rowIndex;

  if (isAnimating) {
    setTimeout(() => setAnimating(false), delay + 250);
  }

  return (
    <div>
      <div className={styles.bar} style={{ width: `calc(${percent}% - 2rem)`}}>
        <div className={styles.inner} style={{ animationDelay: `${delay}ms`, transform: `scaleX(${isAnimating ? 0 : 1})`}}>&nbsp;</div>
      </div>
      <span className={`${styles.flag} flag-icon flag-icon-squared flag-icon-${rowData.countryInfo.iso2.toLowerCase()}`}></span>
      {rowData.country}
    </div>
  );
}
