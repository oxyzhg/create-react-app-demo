import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotMatch from '@/pages/NotMatch';
import Home from '@/pages/Home';
import Login from '@/pages/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Redirect exact from="/" to="/login" /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route component={NotMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
