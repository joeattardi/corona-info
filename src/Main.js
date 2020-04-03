import React from 'react';

import { format } from 'date-fns';

import StatisticTile from './StatisticTile';

import styles from './Main.module.scss';

export default function Main({ totals }) {
  return (
    <main id={styles.main}>
      <h2 className={styles['last-updated']}>Last updated {format(totals.updated, 'MMMM d, yyyy h:mm a')}</h2>
      <div id={styles.totals}>
        <StatisticTile label="Total Cases" value={totals.cases} type="cases" />
        <StatisticTile label="Deaths" value={totals.deaths} type="deaths" />
        <StatisticTile label="Recovered" value={totals.recovered} type="recovered" />
      </div>
    </main>
  );
}
