import React from 'react';

import numeral from 'numeral';

import styles from './CountryListDataItem.module.scss';

export default function CountryListDataItem({ label, value }) {
  return (
    <div className={styles.item}>
      <div className={styles.label}>{label}</div>
      <div className={styles.value}>{numeral(value).format('0,0')}</div>
    </div>
  );
}
