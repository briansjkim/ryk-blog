import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import styles from './css/index.css';

const Nav = () => {
  return (
    <nav id="nav" className={styles.nav}>
      <div className={styles.text_section}>
        <a href="#nav">inspire</a>
        <p>22 // ca -> ga -> ny</p>
      </div>
    </nav>
  )
}

export default Nav;
