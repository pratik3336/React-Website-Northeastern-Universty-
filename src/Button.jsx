import React from 'react';
import './button.css';

function Button({ type, visual, onClick, disabled, children }) {
  return (
    <button className={`button-${visual}`} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
