import React from 'react';

import logo from './images/coronavirus.png';
import styles from './Header.module.scss';

export default function Header({ lastUpdated }) {
  return (
    <header id={styles.header}>
      <img className={styles.logo} src={logo} />
      <h1>Coronavirus Data</h1>
    </header>
  );
}
