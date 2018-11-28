import React, { Component } from 'react';
import { connect } from 'react-redux';
import StatItemList from '../../components/StatItemList/StatItemList';

import classes from './Stats.module.sass';
class Stats extends Component {
  state= {
    categories:{}
  }

  static getDerivedStateFromProps(props) {
    const categories = {
      positive: {},
      negative: {}
    };
    
    props.items.map(item => {
      let amount = 0;
      item.category = item.category.toLowerCase();
      if(item.type === 'append') {
        amount = props.positiveAmount
        if (categories.positive[item.category]) {
          categories.positive[item.category].value += item.value;
          categories.positive[item.category].percent = ((categories.positive[item.category].value / amount) * 100).toFixed(2)
        } else {
          categories.positive[item.category] = {value: item.value};
          categories.positive[item.category].type = item.type;
          categories.positive[item.category].percent = ((categories.positive[item.category].value / amount) * 100).toFixed(2)
        }
      } else {
        amount = props.negativeAmount
        if (categories.negative[item.category]) {
          categories.negative[item.category].value += item.value;
          categories.negative[item.category].percent = ((categories.negative[item.category].value / amount) * 100).toFixed(2)
        } else {
          categories.negative[item.category] = {value: item.value};
          categories.negative[item.category].type = item.type;
          categories.negative[item.category].percent = ((categories.negative[item.category].value / amount) * 100).toFixed(2)
        }
      }      
      return item
    })

    return {categories: categories}
  }

  render() {
    return ( 
      <div>
        <h2 className={classes.Header}>Статистика по категориям:</h2>
        <StatItemList 
          items={this.state.categories.positive}
          type='positive'/>
        <StatItemList 
          items={this.state.categories.negative}
          type='negative'/>
      </div>
     );
  }
}


const mapStateToProps = state => {
  return {
    items: state.budget.items,
    positiveAmount: state.budget.positiveAmount,
    negativeAmount: state.budget.negativeAmount,
  }
}
 
export default connect(mapStateToProps)(Stats);