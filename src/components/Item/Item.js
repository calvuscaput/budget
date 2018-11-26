import React from 'react';

import classes from './Item.module.sass';

import Button from '../Button/Button'
const item = (props) => {

  let itemTypeSym = '-';
  let itemTypeClass = classes.Negative
  if (props.type === 'append') {
    itemTypeSym = '+';
    itemTypeClass = classes.Positive
  }  
  const mobileViewElement = window.matchMedia("(max-width: 490px)").matches && props.mobileShow ?  
    <span className={classes.MobileView}>
      <span className={classes.ItemCategory}>{props.category}</span>
      <Button click={props.delClick}>Удалить</Button>
    </span> : null;

  return (
    <li className={[classes.Item, itemTypeClass].join(' ')}>
      <p onClick={props.showClick}>
        <span className={classes.ItemType}>{itemTypeSym}</span>
        <span className={classes.ItemValue}>{+props.value}</span>
        <span className={classes.ItemName}>{props.name}</span>
        <span className={classes.DesktopView}>
          <span className={classes.ItemCategory}>{props.category}</span>
          <Button click={props.delClick}>Удалить</Button>
        </span>
      </p>
      {mobileViewElement}
    </li>    
  );
}
 
export default item;