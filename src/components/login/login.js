import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitLogin } from '../../actions/loginAction';
import './login.scss';

class login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  handleChangeu(e) {
    this.setState({ username: e.target.value });
  }

  handleChangep(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit() {
    const username = this.state.username;
    const password = this.state.password;
    const loginDetails = { username: username, password: password };
    console.log(this.props.loginsAction);
    this.props.submitLogin(loginDetails);
  }

  render() {
    return (
      <div>
        <center className="login-co"><h1>LOGIN</h1></center>
        <div id="login">
          <input value={this.state.username} onChange={this.handleChangeu.bind(this)} type="email" id="email" placeholder="Email" />
          <input value={this.state.password} onChange={this.handleChangep.bind(this)} type="password" id="password" placeholder="Password" />
          <button type="button" onClick={this.handleSubmit.bind(this)} id="login">Login</button>
        </div>
        <span>Userdetails: {this.props.loginTokenFromReducer} </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { loginTokenFromReducer } = state.loginReducers;
  return { loginTokenFromReducer };
};


export default connect(mapStateToProps, { submitLogin })(login);
