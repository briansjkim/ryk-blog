import React from 'react';
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Mid from './Mid.jsx';
import Blogs from './Blogs.jsx';
import Copyright from './Copyright.jsx';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './scss/index.scss';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      blogs: []
    }

    this.getBlogs = this.getBlogs.bind(this);
    this.getAllBlogs = this.getAllBlogs.bind(this);
  }

  componentDidMount() {
    this.getBlogs();
  }

  getBlogs() {
    axios.get('/api/blogs')
      .then((results) => { return results.data })
      .then((data) => {
        this.setState({ blogs: data });
      })
      .catch((error) => console.log('Error', error));
  }

  getAllBlogs() {
    axios.get('/api/allBlogs')
      .then((results) => { return results.data })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log('Error', error));
  }

  render() {
    return (
      <div id="main" className="main">
        <Nav />
        <Header blogs={this.state.blogs} />
        <Mid />
        <Blogs blogs={this.state.blogs} />
        <div>
          <a href="#main"><button className="back">Back to top</button></a>
        </div>
        <Copyright />
      </div>
    )
  }
}

export default Home;
