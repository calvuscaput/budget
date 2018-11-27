import React, { Component } from 'react';
import classes from  './App.module.sass';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout'
import Budget from './containers/Budget/Budget';
import Stats from './containers/Stats/Stats';
import Auth from './containers/Auth/Auth';

let routes = (
  <Switch>
    <Route path="/stats" component={Stats} />
    <Route path="/auth" component={Auth} />
    <Route path="/" exact component={Budget} />
  </Switch>
)

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          {routes}
        </Layout>
      </div>
      
    );
  }
}

export default withRouter(App);
