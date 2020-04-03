import React from 'react';

import styles from './Country.module.scss';

export default function Country({ data, maxValue }) {
  const percent = (data.cases / maxValue) * 100;

  return (
    <div className={styles.country}>
      <div className={styles.bar} style={{ width: `${percent}%` }}>&nbsp;</div>
      <div className={styles.content}>
        <span className={`${styles.flag} flag-icon flag-icon-squared flag-icon-${data.countryInfo.iso2.toLowerCase()}`}></span>
        <h3>{data.country}</h3>
      </div>
    </div>
  );
}
