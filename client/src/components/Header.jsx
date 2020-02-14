import React from 'react';
import All from './All.jsx';
import { Link } from 'react-router-dom';
import './scss/index.scss';

// turn header into class component and pass all the blogs to link
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
