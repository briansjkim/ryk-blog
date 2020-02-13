import React from 'react';
import BlogModal from './BlogModal.jsx';
import styles from './scss/index.scss';

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal(e) {
    this.setState({
      show: true
    })
  }

  hideModal(e) {
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <div className="blog_section">
        <h3 className="blog_date">{this.props.blog.date}</h3>
        <h1 className="blog_title">{this.props.blog.title}</h1>
        <div className="blog_message_section">
          <p className="blog_message">{this.props.blog.message}</p>
        </div>
        <p onClick={this.showModal} className="open_blog">Read More...</p>
        <BlogModal show={this.state.show} handleClose={this.hideModal} />
      </div>
    )
  }
}

export default Blog;
