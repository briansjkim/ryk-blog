import React from 'react';
import Nav from './Nav.jsx';
import { Link } from 'react-router-dom';
import Social from './Social.jsx';

const FullBlog = (props) => {
  return (
    <div>
      <Nav />
      <Link to='/'><i className="far fa-caret-square-left fa-2x"></i></Link>
      <div>
        <h3>{props.location.state.blog.date}</h3>
        <h1>{props.location.state.blog.title}</h1>
        <div>
          <p>{props.location.state.blog.message}</p>
        </div>
        <div>
          <Social />
        </div>
      </div>
    </div>
  )
}

export default FullBlog;
