import React, { useEffect, useState } from "react";
import Loader from "../loader/loader";
import Tabs from "../tabs/tabs";
import Modal from "../modal/modal.js";
import DishInfo from "../dishInfo/dishInfo";
import Cart from "../cart/cart";
import MenuCard from "../menuCard/menuCard";
import uzbegimService from "../../utils/uzbegim-service";

const uzbegim = new uzbegimService();

const Menu = () => {
  const [menu, setMenu] = useState(null);
  const [menuSorted, setMenuSorted] = useState(null);
  const [info, setInfo] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    getData();
    return () => {
      getData();
    };
  }, []);

  useEffect(() => {
    const checkOrder = () => {
      let totalOrder = [];
      const local = checkLocal();
      let dishes = [];
      let prices = [];
      let slug = [];

      menu.forEach((el) => {
        dishes = [...dishes, ...el.dishes];
        prices = [...prices, ...el.price];
        slug = [...slug, ...el.slug];
      });

      const dishesObj = { dishes, prices, slug };

      local.forEach((el) => {
        const orderObj = {};
        const i = dishesObj.slug.indexOf(el);
        orderObj.name = dishesObj.dishes[i];
        orderObj.price = +dishesObj.prices[i];
        orderObj.slug = dishesObj.slug[i];

        const checkDuplicate = totalOrder.find(
          (el) => el.name === orderObj.name
        );

        if (checkDuplicate) {
          checkDuplicate.count++;
          return;
        }

        orderObj.count = 1;
        totalOrder.unshift(orderObj);
      });

      setMenuSorted(dishesObj);
      setCart(totalOrder);
    };

    if (menu) {
      checkOrder();
    }

    return () => {};
  }, [menu]);

  const checkLocal = () => {
    const data = JSON.parse(window.localStorage.getItem("chosen_food")) || [];

    if (data.length < 1) {
      return [];
    }

    setShowCart(true);
    return data;
  };

  const getData = async () => {
    try {
      const data = await uzbegim.getMenuSorted();
      setMenu(data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!menu) {
    return <Loader />;
  }

  const updateCart = (item) => {
    const arr = [...cart];
    const i = arr.findIndex((el) => el.slug === item);

    if (i !== -1) {
      arr[i].count++;
    } else {
      let newDish = {};
      const i = menuSorted.slug.findIndex((el) => el === item);

      newDish.name = menuSorted.dishes[i];
      newDish.price = +menuSorted.prices[i];
      newDish.slug = menuSorted.slug[i];
      newDish.count = 1;

      arr.push(newDish);
    }

    setCart(arr);
    setShowCart(true);
  };

  const increaseCount = (e) => {
    const arr = [...cart];
    const local = JSON.parse(window.localStorage.getItem("chosen_food"));
    const tObj = arr.find(
      (el) => el.slug === e.target.getAttribute("data-slug")
    );

    tObj.count++;
    local.push(tObj.slug);

    setCart(arr);
    window.localStorage.setItem("chosen_food", JSON.stringify(local));
  };

  const decreaseCount = (e) => {
    const t = e.target.getAttribute("data-slug");
    const arr = [...cart];
    const local = JSON.parse(window.localStorage.getItem("chosen_food"));
    const localIndex = local.indexOf(t);
    const tObj = arr.find((el) => el.slug === t);
    if (tObj.count > 1) {
      tObj.count--;
    } else {
      const i = arr.indexOf(tObj);
      arr.splice(i, 1);
      if (arr.length < 1) {
        setCart([]);
        setShowCart(false);
      }
    }

    setCart(arr);
    local.splice(localIndex, 1);
    window.localStorage.setItem("chosen_food", JSON.stringify(local));
  };

  const getDishInfo = async (e) => {
    const slug = e.target.getAttribute("data-course");
    setShowInfo(true);

    try {
      const data = await uzbegim.getInfo(slug);
      setInfo(data);
    } catch (err) {
      console.log(err);
    }
  };

  const onTabClick = (e) => {
    const clickedTab = e.target;
    const value = clickedTab.getAttribute("data-category").toString();
    const foodTitle = Array.from(document.querySelectorAll(".category-title"));

    foodTitle.forEach((el) => {
      if (value === el.getAttribute("data-title-category")) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  const tabsMount = menu.map((el, index) => (
    <Tabs key={index} category={el._id} onTabchange={onTabClick} />
  ));

  const menuMount = menu.map((el, index) => {
    return (
      <div key={index}>
        <h2 data-title-category={el._id} className="category-title">
          {el._id}
        </h2>
        <MenuCard menu={el} getDishInfo={getDishInfo} updateCart={updateCart} />
      </div>
    );
  });

  return (
    <>
      <div className="tabs-wrapper">{tabsMount}</div>
      <div>{menuMount}</div>
      <Modal
        closeModal={() => {
          setShowInfo(null);
          setInfo(null);
        }}
        isShown={showInfo}
      >
        <DishInfo info={info} />
      </Modal>
      <Cart
        cart={cart}
        closeModal={() => {
          setShowCart(null);
        }}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
        isShown={showCart}
        resetCart={() => {
          setCart([]);
          window.localStorage.removeItem("chosen_food");
          setShowCart(false);
        }}
      />
    </>
  );
};

export default Menu;
