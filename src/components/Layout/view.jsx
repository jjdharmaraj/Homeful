import React from 'react';
import styles from './styles.scss';

let View = ({locationList}) => (
  <div className={styles.container}>
    something goes here... {JSON.stringify(locationList)}
  </div>
);

export default View;
