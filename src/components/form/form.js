import React from 'react';

import './form.scss';

const Form = ({ handleChange, id = null, label, ...props }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        {...props}
        onChange={handleChange}
        id={id}
      />
      {label ? <label className="form-input-label">{label}</label> : null}
    </div>
  );
};

export default Form;
