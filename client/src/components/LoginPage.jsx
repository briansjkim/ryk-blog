import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './scss/index.scss';

class LoginPage extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      error: false,
      login: false,
    }

    this.userLogin = this.userLogin.bind(this);
  }

  userLogin() {
    this.setState({ login: true })
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
              <Link to='/home' onClick={this.userLogin}>Log in</Link>
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
