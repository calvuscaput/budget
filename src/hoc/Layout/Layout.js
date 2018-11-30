import React, { Component } from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';

import { connect } from 'react-redux';

class Layout extends Component {

  render() { 
    const toolBar = this.props.isAuth ? <Toolbar /> : 
    <div className="Block"
      style={{padding: '37px'}}
    >Для использования приложения необходимо зарегистрироваться/авторизоваться</div>;
    return ( 
      <>
      {toolBar}
      <div>
      {this.props.children}
      </div>
      </>
     );
  }
}
 
const mapStateToProps = state => {
  return {
    
    isAuth: state.auth.token !== null,
  };
};


export default connect(mapStateToProps)(Layout);