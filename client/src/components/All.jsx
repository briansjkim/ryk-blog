import React from 'react';
import Nav from './Nav.jsx';
import styles from './css/index.css';

const All = () => {
  return (
    <div className={styles.all}>
      <Nav />
      <h1>All Blogs</h1>
    </div>
  )
}

export default All;
