import React, { Component } from 'react';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import FormErrorMessage from '../../components/UI/FormErrorMessage/FormErrorMessage';
import {check, rules} from '../../shared/validity';
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
    console.log('signup', this.state);
  }
  signinHandler = e => {
    e.preventDefault();
    console.log('signin', this.state);
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
    return ( 
      <form action="" className={[classes.Auth, 'Block'].join(' ')}>
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

        <div className={classes.Buttons}>
          <Button dis={!this.state.valid} click={this.signinHandler}>Авторизация</Button>
          <Button dis={!this.state.valid} click={this.signupHandler}>Регистрация</Button>
        </div>
      </form>
     );
  }
}
 
export default Auth;