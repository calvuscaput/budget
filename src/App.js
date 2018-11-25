import React, { Component } from 'react';
import classes from  './App.module.sass';

import Layout from './hoc/Layout/Layout'
import Budget from './containers/Budget/Budget';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Budget />
        </Layout>
      </div>
      
    );
  }
}

export default App;
