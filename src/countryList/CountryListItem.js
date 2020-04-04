import React from 'react';

import CountryListDataItem from './CountryListDataItem';

import styles from './CountryListItem.module.scss';

export default function CountryListItem({ data }) {
  return (
    <div className={styles['list-item']}>
      <div className={styles.country}>
        <span className={`${styles.flag} flag-icon flag-icon-squared flag-icon-${data.countryInfo.iso2.toLowerCase()}`}></span>
        <h4>{data.country}</h4>
      </div>
      <div className={styles.data}>
        <div className={styles.column}>
          <CountryListDataItem label="Total cases" value={data.cases} />
          <CountryListDataItem label="New cases" value={data.todayCases} />
        </div>
        <div className={styles.column}>
          <CountryListDataItem label="Deaths" value={data.deaths} />
          <CountryListDataItem label="New deaths" value={data.todayDeaths} />
        </div>
        <div className={styles.column}>
          <CountryListDataItem label="Recovered" value={data.recovered} />
        </div>
      </div>
    </div>
  );
}
