import React from 'react';
import Nav from './Nav.jsx';
import Social from './Social.jsx';
import Header from './Header.jsx';
import Blogs from './Blogs.jsx';
import styles from './scss/index.scss';

const All = (props) => {
  console.log(props);
  return (
    <div className="all">
      <Nav />
      <Header />
      <div className="all_mid">
        <Blogs blogs={props.location.state.blogs} />
        <div className="all_social">
          <Social />
        </div>
      </div>
    </div>
  )
}

export default All;
