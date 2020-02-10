import React from 'react';
import Nav from './Nav.jsx';
import Social from './Social.jsx';
import Header from './Header.jsx';
import styles from './scss/index.scss';

const All = () => {
  return (
    <div className="all">
      <Nav />
      <Header />
      <div className="all_mid">
        {/* Blogs */}
        <div className="all_social">
          <Social />
        </div>
      </div>
    </div>
  )
}

export default All;
