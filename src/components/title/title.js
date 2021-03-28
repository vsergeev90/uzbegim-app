import React from 'react';

import './title.scss';

const Title = (props) => {
  return (
    <div>
      <h2>
        <span className="subheading">{props.subhead}</span>
        {props.title}
      </h2>
    </div>
  );
};

export default Title;
