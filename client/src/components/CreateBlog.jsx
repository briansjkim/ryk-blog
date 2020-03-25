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

    this.handleChange = this.handleChange.bind(this);
    this.createBlogs = this.createBlogs.bind(this);
  }

  handleChange() {

  }

  createBlogs() {

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
