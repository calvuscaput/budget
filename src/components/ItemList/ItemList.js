import React from 'react';

import Item from '../Item/Item';

import classes from './ItemList.module.sass';

const itemList = (props) => {
  let items = <p>Добавьте приход/расход</p>;
  if (props.items.length !== 0) {
    items = props.items.map((item, index) => (
      <Item
        key={index}
        name={item.name}
        type={item.type}
        category={item.category}
        value={item.value}
         />
        )
      )
  }
  return (
    <ul className={[classes.ItemList, 'Block'].join(' ')}>
      {items}
    </ul>    
  );
}
 
export default itemList;