import React from 'react';

import classes from './Button.module.sass'
const button = (props) => {

  const btnClasses = [classes.Button]
  props.inItem ? btnClasses.push(classes.inItem) : (() => {})();

  return ( 
    <button onClick={props.click} className={btnClasses.join(' ')}>{props.children}</button>
   );
}
 
export default button;