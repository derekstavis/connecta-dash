import React, { Component } from 'react'
import LoggedPages from './Pages/LoggedPages'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './Root.css';

class Root extends Component {
  render() {
    return (
      <Router>
        <div class="app">
          <Route exact path="/" component={LoggedPages}/>
          <Route path="/others" component={LoggedPages}/>         
        </div>
      </Router>
    );
  }
}

export default Root;
