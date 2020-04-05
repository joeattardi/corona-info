import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer id={styles.footer}>
      <div className={styles.content}>
        <div className={styles.copyright}><a target="_blank" rel="noopener noreferrer" href="https://joeattardi.codes">Joe Attardi</a> 2020</div>
        <div className={styles.attributions}>
          <div>Data source: <a target="_blank" rel="noopener noreferrer" href="https://github.com/NovelCovid/API">NovelCOVID 19 API</a></div>
          <div><a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icons/set/coronavirus">Coronavirus</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a></div>
        </div>
      </div>
      <div><a target="_blank" rel="noopener noreferrer" href="https://github.com/joeattardi/corona-info"><FontAwesomeIcon icon={faGithub} /></a></div>
    </footer>
  );
}
