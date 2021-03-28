import React from 'react';
import './custom-button.scss';

const CustomButton = ({ children, onClick = null, ...otherProps }) => {
  return (
    <button className="button" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
