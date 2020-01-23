import React from 'react';
import Nav from './Nav.jsx';
import Social from './Social.jsx';
import Header from './Header.jsx';
import styles from './css/index.css';

const All = () => {
  return (
    <div className={styles.all}>
      <Nav />
      <Header />
      <div className={styles.all_mid}>
        {/* Blogs  */}
        {/* <div className={styles.all_social}>
          <Social />
        </div> */}
      </div>
    </div>
  )
}

export default All;
