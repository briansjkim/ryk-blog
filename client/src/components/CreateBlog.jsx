import React from 'react';
import axios from 'axios';
import Nav from './Nav.jsx';
import Header from './Header.jsx';
import Social from './Social.jsx';
import { Redirect } from 'react-router-dom';
import './scss/index.scss';

class CreateBlog extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      date: '',
      message: '',
      redirect: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.createBlogs = this.createBlogs.bind(this);
  }

  handleChange(e, target) {
    this.setState({ [target]: e.target.value });
  }

  createBlogs(e) {
    // e.preventDefault();
    let blog = this.state;
    axios.post('/api/blogs', blog)
      .then(() => this.setState({ redirect: true }))
      .catch((error) => console.log('Error ', error))
  }

  render() {
    const redirect = this.state.redirect;
    if (redirect === true) {
      return <Redirect to='/' />
    }
    return (
      <div className="create">
        <div className="home-link">
          <Nav />
        </div>
        <form className="create_blog">
          <div className="blog-title">
            <label>Title: </label>
            <input type="text" value={this.state.title} onChange={(e) => this.handleChange(e, 'title')} placeholder="Title" required></input>
          </div>
          <div className="blog-date">
            <label>Date: </label>
            <input type="text" value={this.state.date} onChange={(e) => this.handleChange(e, 'date')} placeholder="March 30, 2020" required></input>
          </div>
          <textarea className="blog-message" type="text" value={this.state.message} onChange={(e) => this.handleChange(e, 'message')} required></textarea>
          <button className="send-blog" onClick={(e) => this.createBlogs(e)}>Create</button>
        </form>
        <div className="social-link">
          <Social />
        </div>
      </div>
    )
  }
}

export default CreateBlog;
