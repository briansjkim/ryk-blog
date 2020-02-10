import React from 'react';
import { Link } from 'react-router-dom';
import styles from './scss/index.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="text_section">
        <Link to="/">inspire</Link>
        <p>22 // ca -> ga -> ny</p>
      </div>
    </nav>
  )
}

export default Nav;
