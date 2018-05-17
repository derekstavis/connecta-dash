import React, { Component } from 'react'
import LoggedPages from './Pages/LoggedPages'
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { connect } from 'react-redux'

import './Root.css';
import ProtectedRoute from './utils/ProtectedRoute';
import Login from './Pages/Login/Login';

class Root extends Component {
  render() {
    const { login } = this.props;
    console.log(login);
    return (
      <Router forceRefresh={false}>
        <Switch>
          <Route path="/login" component={Login}/>
          <ProtectedRoute
            component={LoggedPages}
            allowedRoles={['*']}
            path='/'
          />
          <Redirect from="/user" to="/user/login" />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = ({ login }) => ({login})
export default connect(mapStateToProps)(Root) ;
