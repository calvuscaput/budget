import React from 'react';
import { connect } from 'react-redux';

import Item from '../Item/Item';

import classes from './ItemList.module.sass';
import * as actions from '../../store/actions/index';

const itemList = (props) => {
  let items = <p>Добавьте приход/расход</p>;
  if (props.items.length !== 0) {
    items = props.items.map(item => (
      <Item
        key={item.key}
        name={item.name}
        type={item.type}
        category={item.category}
        value={item.value}
        mobileShow={item.mobileTrigger}
        delClick={() => props.onRemoveItem(item.key)}
        showClick={() => props.onMobileShow(item.key)}
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


const mapDispatchToProps = dispatch => {
  return {
    onRemoveItem: (id) => dispatch(actions.removeItem(id)),
    onMobileShow: (id) => dispatch(actions.mobileShowItem(id))
  }
}
 
 
export default connect(null, mapDispatchToProps)(itemList);