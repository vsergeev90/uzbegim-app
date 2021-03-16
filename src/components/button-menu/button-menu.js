import React from 'react';
import { Link } from 'react-router-dom';
import './button-menu.scss';

const ButtonMenu = ({ buttonText, buttonLink, id, onClickAction=null}) => {
  return (
    <div className="button">
      <Link to={buttonLink} data-label={id} onClick={onClickAction}>
        {buttonText}
      </Link>
    </div>
  );
};

export default ButtonMenu