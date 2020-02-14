import React from 'react';
import { Link } from 'react-router-dom';
import './scss/index.scss';

const Blog = ({ blog }) => {
  return (
    <div className="blog_section">
      <h3 className="blog_date">{blog.date}</h3>
      <h1 className="blog_title">{blog.title}</h1>
      <div className="blog_message_section">
        <p className="blog_message">{blog.message}</p>
      </div>

      <p className="open_blog">Read More...</p>
    </div>
  )
}

export default Blog;
