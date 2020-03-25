import React from 'react';
import axios from 'axios';
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

  createBlogs(blog) {
    // axios.post('/api/blogs', blog)
    //   .then(() => console.log('Success'))
    //   .catch((error) => console.log('Error ', error))
  }

  render() {
    return (
      <div className="create-blog">
        <form>
          <label>Title</label>
          <input type="text" id="blog_title" onChange={this.handleChange} placeholder="Title" required></input>
          <label>Date</label>
          <input type="text" id="blog_date" onChange={this.handleChange} placeholder="March 25, 2020"></input>
          <input type="text" id="blog_message" onChange={this.handleChange}></input>
        </form>
        <button onClick={this.createBlogs}>Create</button>
      </div>
    )
  }
}

export default CreateBlog;
