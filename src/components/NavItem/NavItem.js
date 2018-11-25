import React from 'react';

import classes from './NavItem.module.sass'

const navItem = (props) => {
  return (
    <li className={classes.ListItem}>
    <a className={classes.NavItem} href="/">{props.children}</a>
    </li>
  );
}
 
export default navItem;