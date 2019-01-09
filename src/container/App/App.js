import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Header from '../header/header';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header></Header>
          <Switch>
            <CRoute cprivate exact path="/landing" component={Landing}></CRoute>
            <CRoute exact path="/" component={Landing}></CRoute>
            <CRoute exact path="/login" component={Login}></CRoute>
            {/* <CRoute cprivate crole={[admin, employee]} exact path="/p1" component={P1}></CRoute> */}
            <CRoute exact path="/p1" component={P1}></CRoute>
            <CRoute crole={[admin]} exact path="/p2" component={P2}></CRoute>
            <CRoute cprivate crole={[employee]} exact path="/p3" component={P3}></CRoute>
            <CRoute exact path="/unauthorized-access" component={UnAuthorizedAccess}></CRoute>
            <CRoute component={PageNotFound}></CRoute>

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
