import React from "react";
import "./menuCard.scss";

const MenuCard = ({ menu, getDishInfo, updateCart }) => {
  const onOrderClick = (e) => {
    e.preventDefault();
    const t = e.target;
    const dataId = t.getAttribute("data-course");
    const arr =
      window.localStorage.getItem("chosen_food") != null
        ? JSON.parse(window.localStorage.getItem("chosen_food"))
        : [];

    arr.push(dataId);
    window.localStorage.setItem("chosen_food", JSON.stringify(arr));
    updateCart(dataId);
  };

  const menuBlock = menu.dishes.map((el, index) => {
    return (
      <figure key={index} className="card" data-category={el._id}>
        <div className="card__title-box">
          <h2 className="card__title">{el}</h2>
        </div>

        <div className="card__details">
          <div className="card__detail-box">
            <h6 className="card__detail card__detail--price">
              {menu.price[index]}kč
            </h6>
          </div>
        </div>

        <button
          className="card__order-button"
          data-course={menu.slug[index]}
          onClick={onOrderClick}
        >
          Order
        </button>

        <button
          className="card__link"
          onClick={getDishInfo}
          data-course={menu.slug[index]}
        >
          Detail
        </button>
      </figure>
    );
  });

  return <div>{menuBlock}</div>;
};

export default MenuCard;
