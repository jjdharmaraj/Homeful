import React from 'react';
import Test from '~/components/test';
import styles from './styles.scss';

let View = ({locationList}) => (
  <div className={styles.container}>
    <Test /> {JSON.stringify(locationList)}
  </div>
);

export default View;
