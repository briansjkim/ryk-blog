import React from 'react';
import Blog from './Blog.jsx';
import styles from './css/index.css';

const Blogs = ({ blogs }) => {
  return (
    <div className={styles.blogs}>
      <div className={styles.blogs_section}>
        {blogs.map((blog, index) =>
          <Blog blog={blog} key={index} />
        )}
      </div>
    </div>
  )
}

export default Blogs;
