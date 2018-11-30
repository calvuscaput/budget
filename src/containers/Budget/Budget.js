import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import classes from './Budget.module.sass';

import LineLoader from '../../components/UI/LineLoader/LineLoader';

import Adder from '../../components/Adder/Adder';
import Amounts from '../../components/Amounts/Amounts';
import ItemList from '../../components/ItemList/ItemList';

class Budget extends Component {
  
  
  componentDidMount() {
    this.props.onSetItems(this.props.userId, this.props.token);
  }

  render() { 
    const textColorClass = this.props.amount >= 0 ? classes.Positive : classes.Negative;
    
    let loader = null;
    if (this.props.loading) {
      loader = <LineLoader />
    }

    return (
      <div className={classes.Budget}>
      <p className={[classes.Amount, 'Block'].join(' ')}>Остаток: <span className={[classes.Strong, textColorClass].join(' ')}>{this.props.amount}</span></p>
      <Adder user={this.props.userId} token={this.props.token}/>
      <Amounts
      positiveAmount={this.props.positiveAmount}
      negativeAmount={this.props.negativeAmount} />
      {loader}
      <ItemList items={this.props.items} />

      </div>
    );
  }
}


const mapStateToProps = state => {
  
  return {
    amount: state.budget.amount,
    positiveAmount: state.budget.positiveAmount,
    negativeAmount: state.budget.negativeAmount,
    items: state.budget.items,
    loading: state.budget.loading,
    userId: state.auth.userId,
    token: state.auth.token
  }
} 

const mapDispatchToProps = dispatch => {
  return {
    onSetItems: (userId, token) => dispatch(actions.setItems(userId, token))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Budget);