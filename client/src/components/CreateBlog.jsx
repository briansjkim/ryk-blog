import React from 'react';
import './scss/index.scss';

class CreateBlog extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      date: '',
      message: ''
    }
  }

  render() {
    return (
      <div className="create-blog">
        <h1>Hello</h1>
      </div>
    )
  }
}

export default CreateBlog;
