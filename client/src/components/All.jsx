import React from 'react';
import Nav from './Nav.jsx';
import Social from './Social.jsx';
import Header from './Header.jsx';
import Blogs from './Blogs.jsx';
import './scss/index.scss';

const All = (props) => {
  return (
    <div className="all">
      <Nav />
      <div className="all_mid">
        <div className="all_blogs">
          <Blogs blogs={props.location.state.blogs} />
        </div>
        <div className="all_social">
          <Social />
        </div>
      </div>
    </div>
  )
}

export default All;
