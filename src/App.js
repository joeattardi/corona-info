import React, { useState, useEffect } from 'react';

import { getAllCountries, getTotals } from './api';

import Header from './Header';
import Loading from './Loading';
import Main from './Main';
import styles from './App.module.scss';
import LoadingError from './LoadingError';

const STATE_LOADING = 'LOADING';
const STATE_DATA_LOADED = 'DATA_LOADED';
const STATE_ERROR = 'ERROR';

export default function App() {
  const [data, setData] = useState({});
  const [state, setState] = useState(STATE_LOADING);

  useEffect(() => {
    async function loadData() {
      try {
        const totals = await getTotals();
        let countryData = await getAllCountries();

        countryData = countryData
          .filter(c => !!c.countryInfo.iso2)
          .sort((a, b) => b.cases - a.cases);

        setData({
          totals,
          countryData
        });
        setState(STATE_DATA_LOADED);
      } catch (err) {
        setState(STATE_ERROR);
      }
    }

    loadData();
  }, []);

  function getBody() {
    switch (state) {
      case STATE_LOADING:
        return <Loading />;
      case STATE_ERROR:
        return <LoadingError />;
      default:
        return <Main data={data} />;
    }
  }


  return (
    <div>
      <Header />
      <div id={styles['content-area']}>
        {getBody()}
      </div>
    </div>
  );
}