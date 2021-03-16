import React from "react";
import server from "../../utils/uzbegim-service";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./cart.scss";

const uzbegim = new server();

const CartOverlay = (props) => {
  const { cart, resetCart, isShown, decreaseCount, increaseCount } = props;

  if (!isShown) {
    return null;
  }

  const toggleContent = () => {
    const content = document.querySelector(".cart");

    content.classList.contains("is-active")
      ? content.classList.remove("is-active")
      : content.classList.add("is-active");
  };

  const packOrder = () => {
    let order = {
      cart,
      total: totalPrice,
      payed: true,
      paymentMethod: "cash",
      name: document.querySelector("#name").value,
      address: document.querySelector("#address").value,
      email: document.querySelector("#email").value,
      phone: document.querySelector("#phone").value,
      comment: document.querySelector("#comment").value,
      status: "pending",
    };

    uzbegim.putOrder(order);
    resetCart();
  };

  let totalPrice = 0,
    amount = 0,
    delivery = 45,
    freeDelivery = 600;

  const itemList = cart.map((el, index) => {
    const price = el.price * el.count;
    totalPrice = totalPrice + price;
    amount = amount + el.count;

    // const minusButton =
    //   el.count > 1 ? `-` : <FontAwesomeIcon icon={faTrashAlt} />;

    return (
      <li key={index} data-slug={el.slug}>
        <h3>{el.name}</h3>
        <div className="count">
          <span
            className="increase-count"
            onClick={decreaseCount}
            data-slug={el.slug}
          >
            -
          </span>
          <p>{el.count}</p>
          <span
            className="decrease-count"
            onClick={increaseCount}
            data-slug={el.slug}
          >
            +
          </span>
        </div>
        {price} Kč
      </li>
    );
  });

  if (totalPrice > freeDelivery) {
    delivery = 0;
  }

  totalPrice = totalPrice + delivery;

  return (
    <div className="cart">
      <div className="cart-content" onClick={(e) => e.stopPropagation()}>
        <div className="cart-summary">
          <div className="cart-summary-header">
            <h2>Your Order</h2>
          </div>
          <div className="cart-summary-content">
            <ul>{itemList}</ul>
          </div>
          <div className="cart-summary-footer">
            <div>delivery {delivery}</div>
            <div>total: {totalPrice}</div>
          </div>
          <div className="cart-contact">
            <h2>Contact Info</h2>
            <form>
              <input
                type="text"
                placeholder="Jmeno a Prijmeni"
                id="name"
              ></input>
              <input
                type="email"
                placeholder="Email"
                id="email"
                required
              ></input>
              <input
                type="tel"
                placeholder="Phone Number"
                id="phone"
                required
              ></input>
              <input
                type="text"
                placeholder="Address"
                id="address"
                required
              ></input>
              <input type="text" placeholder="Poznamka" id="comment"></input>
            </form>
            <button onClick={packOrder}>GO TO CHECKOUT</button>
          </div>
        </div>
        <div className="cart-footer">
          <button onClick={toggleContent} className="button">
            Close
          </button>
          <button onClick={resetCart} className="button">
            Clear Order
          </button>
        </div>
      </div>
      <div className="icon-wrapper" onClick={toggleContent}>
        <p className="amount">{amount}</p>
        <i className="gg-shopping-cart"></i>
      </div>
    </div>
  );
};

export default CartOverlay;
