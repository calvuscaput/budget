import React from 'react';
import { NavLink } from 'react-router-dom'
import classes from './NavItem.module.sass'

const navItem = (props) => {
  return (
    <li className={classes.ListItem}>
      <NavLink to={props.link} className={classes.NavItem}>{props.children}</NavLink>
    </li>
  );
}
 
export default navItem;