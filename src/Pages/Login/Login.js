import React, { Component } from 'react';
import { login } from '../../Redux/login'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';


const mapActionsToProps = (dispatch) => ({
  login: () => dispatch(login())
})

const mapStateToProps = (state) => ({
  loginState: state.login,
})

class Login extends Component {

  login = () => {
    this.props.login();
  }

  render = () => {
    return this.props.loginState ?
     (<Redirect to="/"/>) :
     (<div>
      Hello World
      <button onClick={this.login}> Logar </button>
    </div>)
  }
}

export default connect(mapStateToProps, mapActionsToProps)(Login);