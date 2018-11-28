import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Adder.module.sass';

import uuid from 'uuid/v1';
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input';
import FormErrorMessage from '../UI/FormErrorMessage/FormErrorMessage';
import {check, rules} from '../../shared/validity';
import * as actions from '../../store/actions/index';
class Adder extends Component {
  state = {
    type: 'deduct',
    category: '',
    value: '',
    name: '',
    valid: false,
    formErrorMessages: {
      value: '',
      name: '',
      category: ''
    },
    touched: {
      value: false,
      name: false,
      category: false
    }
  }

  addHandler = e => {
    e.preventDefault(); 
    this.props.onAddItem(this.state.name, this.state.type, this.state.category, +this.state.value, uuid());
  }

static getDerivedStateFromProps(nextProps, state) {
  const formErrorMessages = {}
  const categoryValid = check(state.category, rules.adder.category);
  const valueValid = check(state.value, rules.adder.value);
  const nameValid = check(state.name, rules.adder.name);
  if (!categoryValid && state.touched.category) {
    formErrorMessages.category = 'Введите название категории'
  }
  if (!valueValid && state.touched.value) {
    formErrorMessages.value = 'Значение должно содержать только цифры и не быть пустым'
  }
  if (!nameValid && state.touched.name) {
    formErrorMessages.name = 'Введите название прихода/расхода'
  }
  
  return {
    valid: categoryValid &&
                 valueValid &&
                 nameValid,
    formErrorMessages: formErrorMessages
  }
}

  formChangeHandler = (event) => {
    switch (event.target.id) {
      case 'type':
        this.setState({type: event.target.value});
        break;
      case 'category':
        this.setState({category: event.target.value, touched: {
          ...this.state.touched,
          category: true
        }});
        break;
      case 'value':
        this.setState({value: event.target.value, touched: {
          ...this.state.touched,
          value: true
        }});
        break;
      case 'name':
        this.setState({name: event.target.value, touched: {
          ...this.state.touched,
          name: true
        }});
        break;
      default:
        break;
    }
    
  }
  render() { 
    
    const selectStyle = {
      backgroundColor: this.state.type === 'deduct' ? '#ff3c65' : '#28a745'
    };

    return ( 
      <div className={[classes.Adder, 'Block'].join(' ')}>
        <form action="">
          <select 
            style={selectStyle}
            className={classes.Select}
            id="type"
            value={this.state.type} 
            name="type" 
            onChange={this.formChangeHandler}>
          <option value="deduct">-</option>
          <option value="append">+</option>
          </select>
          <div className={classes.Field}>
            <label>Сумма: </label><Input value={this.state.value} type="text" id="value" name="value" changed={this.formChangeHandler}/>
          </div>
          <div className={classes.Field}>
            <label>Назавание: </label><Input value={this.state.name} type="text" id="name" name="name" changed={this.formChangeHandler}/>
          </div>
          <div className={classes.Field}>
            <label>Категория: </label><Input value={this.state.category} type="text" id="category" name="category" changed={this.formChangeHandler}/>
          </div>
          <Button dis={!this.state.valid} click={(e) => this.addHandler(e)}>Добавить</Button>
        </form>
        <FormErrorMessage>{this.state.formErrorMessages.value}</FormErrorMessage>
        <FormErrorMessage>{this.state.formErrorMessages.name}</FormErrorMessage>
        <FormErrorMessage>{this.state.formErrorMessages.category}</FormErrorMessage>
      </div>
     );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddItem: (name, itemType, category, value, key) => dispatch(actions.addItem(name, itemType, category, value, key))
  }
}
 
export default connect(null, mapDispatchToProps)(Adder);