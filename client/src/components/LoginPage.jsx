import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './scss/index.scss';

class LoginPage extends React.Component {
  constructor() {
    super();

    this.state = {
      login: false
    }
  }

  render() {
    return (
      <form>
        <p>Hello</p>
      </form>
    )
  }
}

export default LoginPage;
