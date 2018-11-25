import React from 'react';

import classes from './Amounts.module.sass';

const amounts = (props) => {
  return ( 
    <div className={[classes.Amounts, 'Block'].join(' ')}>
      <p>{props.positiveAmount}</p>
      <p>{props.negativeAmount}</p>
    </div>
   );
}
 
export default amounts;