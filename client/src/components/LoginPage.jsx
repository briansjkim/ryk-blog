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
      <form className="login">
        <div className="user-info">
          <label>Username: </label>
          <input type="text" required></input>
          <br />
          <label>Password: </label>
          <input type="text" required></input>
        </div>
        <Link to='/home'>Log in</Link>
        <Link to='/home'>Guest</Link>
      </form>
    )
  }
}

export default withRouter(LoginPage);
