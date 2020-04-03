import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { format } from 'date-fns';

import Country from './Country';
import StatisticTile from './StatisticTile';

import styles from './Main.module.scss';

export default function Main({ data }) {
  const maxValue = data.countryData[0].cases;

  return (
    <main id={styles.main}>
      <h2 className={styles['last-updated']}>
        <FontAwesomeIcon icon={faInfoCircle} /> Data last updated {format(data.totals.updated, 'MMMM d, yyyy h:mm a')}.
      </h2>
      <h2>At a glance</h2>
      <div id={styles.totals}>
        <StatisticTile label="Total Cases" value={data.totals.cases} type="cases" />
        <StatisticTile label="Deaths" value={data.totals.deaths} type="deaths" />
        <StatisticTile label="Recovered" value={data.totals.recovered} type="recovered" />
      </div>

      <h2>By country</h2>
      {data.countryData.map(country => (
        <Country key={country.country} data={country} maxValue={maxValue} />
      ))}
    </main>
  );
}
