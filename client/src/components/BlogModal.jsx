import React from 'react';

const BlogModal = ({ blog, show, handleClose }) => {
  var appearHide = show ? 'modal display-block' : 'modal display-none';

  if (!show) {
    return null;
  }

  return (
    <div className={appearHide}>
      <h1 onClick={handleClose}>{blog.date}</h1>
    </div>
  )
}

export default BlogModal;
