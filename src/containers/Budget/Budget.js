import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Budget.module.sass';

import Adder from '../../components/Adder/Adder';
import Amounts from '../../components/Amounts/Amounts';
import ItemList from '../../components/ItemList/ItemList';

class Budget extends Component {
  render() { 
    const textColorClass = this.props.amount >= 0 ? classes.Positive : classes.Negative;

    return (
      <div className={classes.Budget}>
      <p className={[classes.Amount, 'Block'].join(' ')}>Остаток: <span className={[classes.Strong, textColorClass].join(' ')}>{this.props.amount}</span></p>
      <Adder />
      <Amounts
      positiveAmount={this.props.positiveAmount}
      negativeAmount={this.props.negativeAmount} />
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
    items: state.budget.items
  }
}
 
export default connect(mapStateToProps)(Budget);