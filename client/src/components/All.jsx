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
      <h1>All Blogs</h1>
      <p onClick={handleClose}>Close</p>
    </div>
  )
}
export default All;
