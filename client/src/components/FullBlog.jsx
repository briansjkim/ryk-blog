import React from 'react';
import Nav from './Nav.jsx';
import Social from './Social.jsx';
import Header from './Header.jsx';
import './scss/index.scss';

const FullBlog = (props) => {
  return (
    <div className="full-blog">
      <Nav />
      <div className="full-blog-mid">
        <div className="full-blog-details">
          <h3>{props.location.state.blog.date}</h3>
          <h1>{props.location.state.blog.title}</h1>
          <div>
            <p>{props.location.state.blog.message}</p>
          </div>
        </div>
        <div className="full-blog-social">
          <Social />
        </div>
      </div>
    </div>
  )
}

export default FullBlog;
