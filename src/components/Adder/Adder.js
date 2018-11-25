import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Adder.module.sass';

import * as actions from '../../store/actions/index';
class Adder extends Component {
  state = {
    type: 'deduct',
    category: '',
    value: 0,
    name: ''

  }
  addhandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.onAddIngredient(this.state.name, this.state.type, this.state.category, this.state.value)
    
  }

  formChangeHandler = (event) => {    
    switch (event.target.id) {
      case 'type':
        this.setState({type: event.target.value});
        break;
      case 'category':
        this.setState({category: event.target.value});
        break;
      case 'value':
        this.setState({value: +event.target.value});
        break;
      case 'name':
        this.setState({name: event.target.value});
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
            <label>Сумма: </label><input value={this.state.value} type="text" id="value" onChange={this.formChangeHandler}/>
          </div>
          <div className={classes.Field}>
          <label>Назавание: </label><input value={this.state.name} type="text" id="name" onChange={this.formChangeHandler}/>
          </div>
          <div className={classes.Field}>
          <label>Категория: </label><input value={this.state.category} type="text" id="category" onChange={this.formChangeHandler}/>
          </div>
          <button onClick={this.addhandler}>Добавить</button>
        </form>
      </div>
     );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddIngredient: (name, itemType, category, value) => dispatch(actions.addItem(name, itemType, category, value)),
  }
}
 
export default connect(null, mapDispatchToProps)(Adder);