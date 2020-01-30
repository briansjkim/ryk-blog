import React from 'react';
import styles from './css/index.css';

const Blog = ({ blog }) => {
  return (
    <div className={styles.blog_section}>
      <h3 className={styles.blog_date}>{blog.date}</h3>
      <h1>{blog.title}</h1>
      <p>{blog.message}</p>
    </div>
  )
}

export default Blog;
