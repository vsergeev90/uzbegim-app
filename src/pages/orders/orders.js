import React, { useState, useEffect } from "react";

import Loader from "../../components/loader/loader";
import uzbegim from "../../utils/uzbegim-service";
import "./orders.scss";

const server = new uzbegim();
const { getOrders } = server;

const Order = () => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    order();
    hideNav();

    return () => {};
  }, []);

  const hideNav = () => {
    const nav = document.querySelector("#navbar");
    const footer = document.querySelector(".footer");

    nav.style.display = "none";
    footer.style.display = "none";
  };

  const order = async () => {
    try {
      const orderList = await getOrders();
      setOrders(orderList);
    } catch (err) {
      console.log(err);
    }
  };

  if (!orders) {
    return <Loader />;
  }

  const orderMount = orders.map((el, i) => {
    console.log(el);
    let list = el.cart.map((el, i) => {
      return (
        <li key={i}>
          <p>
            {el.name} X {el.count}
          </p>
        </li>
      );
    });

    return (
      <li key={i}>
        <div className="order">
          <div>
            <ol>{list}</ol>
          </div>
          <div>
            <p>{el.address}</p>
            <p>{el.name}</p>
          </div>
          <div>
            <p>{el.paymentMethod}</p>
          </div>
          <div>
            <p>{el.total} kč</p>
          </div>
          <button>CONFIRMED</button>
          <button>SENT</button>
          <button>DONE</button>
        </div>
      </li>
    );
  });

  return (
    <div className="order-wrapper">
      <ol>{orderMount}</ol>
    </div>
  );
};

export default Order;
