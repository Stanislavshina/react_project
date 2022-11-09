import React from 'react';
import classes from './ButtonForm.module.css'

const ButtonForm = ({children, ...props}) => {
  return (
    <button 
      {...props}
      className={classes.btnForm}
    >
      {children}
    </button>
  );
}

export default ButtonForm;
