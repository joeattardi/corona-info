import React, { useState, useEffect } from 'react';

import { getTotals } from './api';

import Header from './Header';
import Loading from './Loading';
import Main from './Main';
import styles from './App.module.scss';
import LoadingError from './LoadingError';

const STATE_LOADING = 'LOADING';
const STATE_DATA_LOADED = 'DATA_LOADED';
const STATE_ERROR = 'ERROR';

export default function App() {
  const [totals, setTotals] = useState({});
  const [state, setState] = useState(STATE_LOADING);

  useEffect(() => {
    async function loadData() {
      try {
        setTotals(await getTotals());
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
        return <Main totals={totals} />;
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