import React from "react";
import Loader from "../loader/loader";

import "./dishInfo.scss";

const DishInfo = (props) => {
  if (!props.info) {
    return <Loader />;
  }

  return (
    <>
      <div className="modal-header">
        <h2 className="modal-title">{props.info[0].name}</h2>
      </div>
      <div className="modal-body">
        <div>
          <img
            alt="placeholder"
            src="../../assets/images/homepage/dessert-5.jpg"
          />
          <p>
            Ingridients: <br /> {props.info[0].ingredients}
          </p>
          <p>
            Description: <br /> some text to describe the food.
          </p>
          <p>
            Allergens: <br /> the list of allergens.
          </p>
        </div>
      </div>
    </>
  );
};

export default DishInfo;
