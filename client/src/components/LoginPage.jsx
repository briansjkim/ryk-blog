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
          <div className="username">
            <label>Username: </label>
            <input type="text" required></input>
          </div>
          <div className="password">
            <label>Password: </label>
            <input type="text" required></input>
          </div>
          <div className="sign-in">
            <div className="user">
              <Link to='/home'>Log in</Link>
            </div>
            <div className="guest">
              <Link to='/home'>Guest</Link>
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default withRouter(LoginPage);
