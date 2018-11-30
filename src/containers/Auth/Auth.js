import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import LineLoader from '../../components/UI/LineLoader/LineLoader';
import FormErrorMessage from '../../components/UI/FormErrorMessage/FormErrorMessage';
import {check, rules} from '../../shared/validity';
import * as actions from '../../store/actions/index';
import classes from './Auth.module.sass';
class Auth extends Component {
  state = {
    email: '',
    password: '',
    valid: false,
    formErrorMessages: {
      email: '',
      password: ''
    },
    touched: {
      email: false,
      password: false
    }
  }

  signupHandler = e => {
    e.preventDefault();
    this.props.onAuth(this.state.email, this.state.password, false)
  }
  signinHandler = e => {
    e.preventDefault();
    this.props.onAuth(this.state.email, this.state.password, true)
  }

  componentDidMount() {
    if (this.props.authRedirectPath !== '/') {
      this.props.onSetAuthRedirctPath()
    }
  }

  static getDerivedStateFromProps(nextProps, state) {
    const formErrorMessages = {};
    const emailValid = check(state.email, rules.auth.email);
    const passwordValid = check(state.password, rules.auth.password);
    if (!emailValid && state.touched.email) {
      formErrorMessages.email = 'Введите правильный e-mail'
    }
    if (!passwordValid && state.touched.password) {
      formErrorMessages.password = 'Длина пароля от 5 до 16 символов'
    }

    return {
      valid:  emailValid &&
              passwordValid,
      formErrorMessages: formErrorMessages
    }
  }

  formChangeHandler = (event) => {
    switch (event.target.id) {
      case 'email':
        this.setState({email: event.target.value, touched: {
          ...this.state.touched,
          email: true
        }});
        break;
      case 'password':
        this.setState({password: event.target.value, touched: {
          ...this.state.touched,
          password: true
        }});
        break;
      default:
        break;
    }    
  }

  render() { 
    let authRedirect = null;
    if (this.props.isAuthenticated) {
      authRedirect = <Redirect to={this.props.authRedirectPath} />
    }

    const loader = this.props.loading ? <LineLoader/> : null;
    return ( 
      <form action="" className={[classes.Auth, 'Block'].join(' ')}>
        {authRedirect}
        <label htmlFor="email">Ваш E-mail:</label>
        <Input
        type="text"
        name="email"
        id="email"
        changed={this.formChangeHandler}
        value={this.state.email} />
        <FormErrorMessage>{this.state.formErrorMessages.email}</FormErrorMessage>


        <label htmlFor="password">Ваш пароль:</label>
        <Input
        type="password"
        name="password"
        id="password"
        changed={this.formChangeHandler}
        value={this.state.password} />
        <FormErrorMessage>{this.state.formErrorMessages.password}</FormErrorMessage>
        {loader}
        <div className={classes.Buttons}>
          <Button dis={!this.state.valid} click={this.signinHandler}>Авторизация</Button>
          <Button dis={!this.state.valid} click={this.signupHandler}>Регистрация</Button>
        </div>
      </form>
     );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
    onSetAuthRedirctPath: () => dispatch(actions.setAuthRedirectPath('/'))
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(Auth)