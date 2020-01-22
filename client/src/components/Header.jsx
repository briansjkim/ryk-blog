import React from 'react';
import All from './All.jsx';
import { Link } from 'react-router-dom';
import styles from './css/index.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/all">All</Link>
    </div>
  )
}

export default Header;
