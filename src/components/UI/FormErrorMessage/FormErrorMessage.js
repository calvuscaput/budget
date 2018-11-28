import React from 'react';

import classes from  './FormErrorMessage.module.sass'

const formErrorMessage = (props) => {

  const errorMessage = props.children ? <p className={classes.FormErrorMessage}>{props.children}</p> : null

  return (errorMessage);
}
 
export default formErrorMessage;