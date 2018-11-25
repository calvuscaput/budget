import React from 'react';

import classes from './Item.module.sass';

const item = (props) => {
  let itemTypeSym = '-';
  let itemTypeClass = classes.Negative
  if (props.type === 'append') {
    itemTypeSym = '+';
    itemTypeClass = classes.Positive
  }
  return (
    <p className={[classes.Item, itemTypeClass].join(' ')}>
      <span className={classes.ItemType}>{itemTypeSym}</span>
      <span className={classes.ItemValue}>{+props.value}</span>
      <span className={classes.ItemName}>{props.name}</span>
      <span className={classes.ItemCategory}>{props.category}</span>
    </p>
   
  );
}
 
export default item;