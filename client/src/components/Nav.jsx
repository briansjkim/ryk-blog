import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/index.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.text_section}>
        <Link to="/">inspire</Link>
        <p>22 // ca -> ga -> ny</p>
      </div>
    </nav>
  )
}

export default Nav;
