import React from 'react';
import All from './All.jsx';
import { Link } from 'react-router-dom';
import styles from './scss/index.scss';

const Header = () => {
  return (
    <div className="header">
      <Link to="/all">All</Link>
    </div>
  )
}

export default Header;
