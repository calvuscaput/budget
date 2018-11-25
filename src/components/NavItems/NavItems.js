import React from 'react';

import NavItem from '../NavItem/NavItem';

import classes from './NavItems.module.sass'
const navItems = () => {
  return ( 
    <header className={[classes.NavItems, 'Block'].join(' ')}>
      <ul>
        <NavItem>Бюджет</NavItem>
        <NavItem>Категории</NavItem>
        <NavItem>Авторизация</NavItem>
      </ul>
    </header>
   );
}
 
export default navItems;