import React from 'react';
import classes from './InputForm.module.css'

const InputForm = (props) => {
  return (
    <input 
      className={classes.inputForm}
      {...props}
    />
  );
};

export default InputForm;
