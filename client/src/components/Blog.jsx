import React from 'react';
import styles from './css/index.css';

const Blog = ({ blog }) => {
  return (
    <div className={styles.blog_section}>
      <h3 className={styles.blog_date}>{blog.date}</h3>
      <h1 className={styles.blog_title}>{blog.title}</h1>
      <div className={styles.blog_message_section}>
        <p className={styles.blog_message}>{blog.message}</p>
      </div>
    </div>
  )
}

export default Blog;
