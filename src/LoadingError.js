import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './LoadingError.module.scss';

export default function LoadingError() {
  return (
    <div className={styles['loading-error']}>
      <FontAwesomeIcon icon={faExclamationCircle} size="7x" />
      <div class={styles.message}>Failed to load data</div>
      <div><button>Try again</button></div>
    </div>
  );
}
