import React from 'react';

import NavItem from '../NavItem/NavItem';

import classes from './NavItems.module.sass'
const navItems = () => {
  return ( 
    <header className={[classes.NavItems, 'Block'].join(' ')}>
      <ul>
        <NavItem link="/" exact>Бюджет</NavItem>
        <NavItem link="/stats">Статистика</NavItem>
        <NavItem link="/auth">Авторизация</NavItem>
      </ul>
    </header>
   );
}
 
export default navItems;