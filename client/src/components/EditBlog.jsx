import React from 'react';
import axios from 'axios';
import Nav from './Nav.jsx';
import Header from './Header.jsx';
import Social from './Social.jsx';
import { withRouter, Link } from 'react-router-dom';
import './scss/index.scss';

class EditBlog extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <p>Editing</p>
      </div>
    )
  }
}

export default EditBlog;
