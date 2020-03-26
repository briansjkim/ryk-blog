import React from 'react';
import Nav from './Nav.jsx';
import Social from './Social.jsx';
import Header from './Header.jsx';
import { withRouter } from 'react-router-dom';
import './scss/index.scss';

class FullBlog extends React.Component {
  constructor(props) {
    super(props);

    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="full-blog" >
        <Nav />
        <div className="full-blog-mid">
          <div className="full-blog-details">
            <div className="go-back">
              <p className="all-heading" onClick={this.goBack}>All</p>
            </div>
            <h3>{this.props.location.state.blog.date}</h3>
            <h1>{this.props.location.state.blog.title}</h1>
            <div>
              <p>{this.props.location.state.blog.message}</p>
            </div>
          </div>
          <div className="full-blog-social">
            <Social />
          </div>
        </div>
      </div >
    )
  }
}

export default withRouter(FullBlog);
