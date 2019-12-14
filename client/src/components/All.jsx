import React from 'react';
import styles from './css/index.css';

// modal for clicking all
const All = ({show, handleClose}) => {
  let appearHide = show ? 'modal display-block' : 'modal display-none';

  if (!show) {
    return null;
  }

  return (
    <div className={styles.all_modal}>
        <div className={styles.close} onClick={handleClose}>X</div>
        <div className={styles.heading_text}>
          <h1>Blogs</h1>
        </div>
    </div>
  )
}
export default All;
