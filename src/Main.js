import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { format } from 'date-fns';
import numeral from 'numeral';


import CountryListTable from './countryListTable/CountryListTable';
import CountryCell from './countryListTable/CountryCell';
import NumberCell from './countryListTable/NumberCell';

import StatisticTile from './StatisticTile';

import styles from './Main.module.scss';

function formatNumber(number) {
  return numeral(number).format('0,0');
}

export default function Main({ data }) {
  const countryColumns = [
    { label: 'Country', property: 'country', component: CountryCell },
    { label: 'Cases', property: 'cases', component: NumberCell },
    { label: 'New Cases', property: 'todayCases', component: NumberCell },
    { label: 'Deaths', property: 'deaths', component: NumberCell },
    { label: 'New Deaths', property: 'todayDeaths', component: NumberCell },
    { label: 'Recovered', property: 'recovered', component: NumberCell }
  ];

  return (
    <main id={styles.main}>
      <h2 className={styles['last-updated']}>
        <FontAwesomeIcon icon={faInfoCircle} /> Data last updated {format(data.totals.updated, 'MMMM d, yyyy h:mm a')}.
      </h2>
      <h2>Worldwide</h2>
      <div id={styles.totals}>
        <StatisticTile label="Total Cases" value={data.totals.cases} type="cases" />
        <StatisticTile label="Deaths" value={data.totals.deaths} type="deaths" />
        <StatisticTile label="Recovered" value={data.totals.recovered} type="recovered" />
      </div>

      <h2>By country</h2>
      <CountryListTable data={data.countryData} columns={countryColumns} />
    </main>
  );
}
