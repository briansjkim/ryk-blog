import React from 'react';
import Blog from './Blog.jsx';
import './scss/index.scss';

const Blogs = ({ blogs }) => {
  return (
    <div className="blogs">
      <div className="blogs_section">
        {blogs.map((blog, index) =>
          <Blog blog={blog} key={index} />
        )}
      </div>
    </div>
  )
}

export default Blogs;
