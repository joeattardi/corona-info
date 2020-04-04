import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import { format } from 'date-fns';
import useMedia from 'use-media';

import CountryListTable from './countryListTable/CountryListTable';
import CountryCell from './countryListTable/CountryCell';
import CountryList from './countryList/CountryList';
import NumberCell from './countryListTable/NumberCell';

import StatisticTile from './StatisticTile';

import styles from './Main.module.scss';

export default function Main({ data }) {
  const countryColumns = [
    { label: 'Country', property: 'country', component: CountryCell },
    { label: 'Cases', property: 'cases', component: NumberCell, sortable: false },
    { label: 'New cases', property: 'todayCases', component: NumberCell, sortable: false },
    { label: 'Deaths', property: 'deaths', component: NumberCell, sortable: false },
    { label: 'New deaths', property: 'todayDeaths', component: NumberCell, sortable: false },
    { label: 'Recovered', property: 'recovered', component: NumberCell, sortable: false }
  ];

  const showTable = useMedia({ minWidth: 700 });

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
      {showTable ? <CountryListTable data={data.countryData} columns={countryColumns} initialSort="cases" /> : <CountryList data={data.countryData} />}
    </main>
  );
}
