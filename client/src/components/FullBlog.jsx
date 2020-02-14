import React from 'react';
import Social from './Social.jsx';

const FullBlog = (props) => {
  console.log(props);
  return (
    <div className="full-blog">
      <h3>{props.location.state.blog.date}</h3>
      <h1>{props.location.state.blog.title}</h1>
      <div>
        <p>{props.location.state.blog.message}</p>
      </div>
    </div>
  )
}

export default FullBlog;
