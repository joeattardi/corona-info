import React from 'react';

import classNames from 'classnames';
import numeral from 'numeral';

import styles from './StatisticTile.module.scss';

export default function StatisticTile({ label, value, type }) {
  const classes = classNames(styles.tile, {
    [styles.cases]: type === 'cases',
    [styles.deaths]: type === 'deaths',
    [styles.recovered]: type === 'recovered'
  });

  return (
    <div className={classes}>
      <h3>{label}</h3>
      <h2>{numeral(value).format('0,0')}</h2>
    </div>
  );
}