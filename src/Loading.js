import React from 'react';
import Loader from 'react-loader-spinner';

import styles from './Loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <Loader
        width={150}
        height={150}
        type="Oval"
        color="#774F38" />
    </div>
  );
}
