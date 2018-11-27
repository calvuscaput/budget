import React from 'react';

import classes from './Progress.module.sass';

const progress = (props) => {
  const progressStyle = {width: props.children}  
  props.type === 'append' ? progressStyle.backgroundColor = '#28a745' : progressStyle.backgroundColor = '#ff3c65';
  return (
    <span className={classes.Progress}>
      <span className={classes.Bar} style={progressStyle}>{props.children}</span>
    </span>
  );
}
 
export default progress;