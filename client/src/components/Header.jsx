import React from 'react';
import All from './All.jsx';
import { Link } from 'react-router-dom';
import styles from './scss/index.scss';

const Header = ({ blogs }) => {
  return (
    <div className="header">
      <Link to={{
        pathname: "/all",
        state: {
          blogs: blogs
        }
      }}>All</Link>
    </div>
  )
}

export default Header;
