import React from 'react';
import Social from './Social.jsx';
import styles from './css/index.css';

const Image = () => {
  return (
      <div className={styles.image_section}>
        <img className={styles.image} src="https://ryk.s3.us-east-2.amazonaws.com/img_4273.jpg"></img>
      </div>
  )
}

export default Image;
