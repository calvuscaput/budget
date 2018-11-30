import React, { Component } from 'react';
import classes from  './App.module.sass';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './hoc/Layout/Layout'
import Budget from './containers/Budget/Budget';
import Stats from './containers/Stats/Stats';
import Logout from './containers/Auth/Logout/Logout';
import Auth from './containers/Auth/Auth';
import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount() {    ;
    this.props.onTryAutoSignUp();
    
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Budget} />
        <Route path="/stats" component={Stats} />
        <Route path="/logout" component={Logout} />
        <Redirect to="/" />
      </Switch>
    )
    
    if (!this.props.isAuth) {
      routes = (
        <Switch>
          <Route path="/auth" component={Auth} />
          <Redirect to="/auth" />
        </Switch>

      )
    }    
    return (
      <div className={classes.App}>
        <Layout>
          {routes}
        </Layout>
      </div>
      
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

const mapStateToProps = state => {  
  return {
    isAuth: state.auth.token !== null,
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
