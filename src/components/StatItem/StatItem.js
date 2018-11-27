import React from 'react';

import Progress from '../UI/Progress/Progress';
import classes from './StatItem.module.sass';
const statItem = (props) => {
  return (
    <li className={classes.Item}>
      <span className={classes.Category}>{props.category}</span>
      <Progress type={props.type}>{props.percent}</Progress>
      <span className={classes.Value}>{props.value}</span>
    </li>
  );
}
 
export default statItem;