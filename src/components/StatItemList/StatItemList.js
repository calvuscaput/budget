import React from 'react';

import StatItem from '../StatItem/StatItem';

import classes from './StatItemList.module.sass';
const statItemList = (props) => {
  const items = Object.keys(props.items).map(key => (
    <StatItem
      category={key}
      key={key}
      percent={props.items[key].percent + '%'}
      value={props.items[key].value}
      type={props.items[key].type} />        
  ))
  const headerType = props.type === 'positive' ? 'приходов' : 'расходов'
  return ( 
    <div className={[classes.StatItemList, 'Block'].join(' ')}>
      <h4 className={classes.Header}>Статистика {headerType}</h4>
      <ul>
        {items}
      </ul>
    </div>
   );
}
 
export default statItemList;