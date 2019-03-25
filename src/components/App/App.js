import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import './App.scss';
import login from '../login';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={login} />
      </Switch>
    );
  }
}

export default App;
