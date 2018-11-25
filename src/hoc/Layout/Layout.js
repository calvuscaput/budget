import React, { Component } from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';

class Layout extends Component {

  render() { 
    return ( 
      <>
      <Toolbar />
      <div>
      {this.props.children}
      </div>
      </>
     );
  }
}
 
export default Layout;