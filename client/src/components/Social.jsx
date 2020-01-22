import React from 'react';
import styles from './css/index.css';

const Social = () => {
  return (
    <div className={styles.social_section}>
      <p>"I am overflowing with words i do not have"</p>
      <div>
        <a className={styles.social_link} href="https://twitter.com/racheelkangg/" target="_blank"><i className="fab fa-twitter fa-1x"></i></a>
        <a className={styles.social_link} href="https://www.instagram.com/rchlkang/" target="_blank"><i className="fab fa-instagram fa-1x"></i></a>
        <a className={styles.social_link} target="_blank" href="https://www.youtube.com/user/raachelkangg/"><i className="fab fa-youtube fa-1x"></i></a>
      </div>
    </div>
  )
}

export default Social;
