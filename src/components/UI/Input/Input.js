import React from 'react';

import classes from './Input.module.sass'

const input = (props) => {
  return ( 
    <input
    className={classes.Input}
    type={props.type}
    name={props.name}
    id={props.id}
    onChange={props.changed}
    value={props.value}/>
   );
}
 
export default input;