import React from 'react';
import '../stylesheet/BotonClear.css';

const BotonClear = (props) => (
  <div className='boton-clear' onClick={props.makeClear}>
    {props.children}
  </div>
);

export default BotonClear;