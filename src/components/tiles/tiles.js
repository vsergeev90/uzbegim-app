import React, { useEffect } from "react";

import ButtonMenu from "../../components/button-menu/button-menu";
import "./tiles.scss";

const Tiles = ({ tiles, theme, tilesTitle }) => {
  useEffect(() => {
    addEvent();
    checkVisible();

    return () => {
      addEvent();
      checkVisible();
    };
  });

  let debounce = (func, wait = 10, immediate = true) => {
    let timeout;

    return function () {
      let context = this,
        args = arguments;
      let later = function () {
        timeout = null;

        if (!immediate) func.apply(context, args);
      };

      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  let addEvent = () => {
    window.addEventListener("scroll", debounce(checkSlide));
  };

  let checkPosition = (element) => {
    let rect = element.getBoundingClientRect();
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let position = rect.top + scrollTop;

    return position;
  };

  let checkVisible = () => {
    let elements = Array.from(document.querySelectorAll(".theme-2 .tile"));

    elements.forEach((element) => {
      let position = checkPosition(element);

      if (window.innerHeight + window.scrollY > position) {
        element.classList.add("fadeInUp");
      }
    });
  };

  let checkSlide = () => {
    let sliderElement = Array.from(document.querySelectorAll(".theme-2 .tile"));
    sliderElement.forEach((element) => {
      const slideInAt =
        window.scrollY + window.innerHeight - element.offsetHeight / 2;

      const position = checkPosition(element);

      if (slideInAt > position && slideInAt < position + element.offsetHeight) {
        element.classList.add("fadeInUp");
      }
    });
  };

  let onClickAction = (e) => {
    e.preventDefault();
    let arr =
      window.localStorage.getItem("chosen_food") != null
        ? JSON.parse(window.localStorage.getItem("chosen_food"))
        : [];
    let t = e.target;
    let dataId = t.getAttribute("data-label");

    arr.push(dataId);
    window.localStorage.setItem("chosen_food", JSON.stringify(arr));
  };

  let tilesMarkup = tiles.map((item, index) => {
    let { image, title, price, description, button, id } = item;

    let priceBlock = price ? <p>{price}</p> : null;

    let buttonBlock = button ? (
      <ButtonMenu
        buttonText={"Order"}
        buttonLink={"#"}
        id={id}
        onClickAction={onClickAction}
      />
    ) : null;

    return (
      <div className="tile" key={index}>
        <div
          className="tile-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="tile-text">
          <div>
            <span className="tile-heading">
              <h3>{title}</h3>
              {priceBlock}
            </span>
            <p>{description}</p>
            {buttonBlock}
          </div>
        </div>
      </div>
    );
  });

  let tilesTitleMarkup = tilesTitle ? (
    <div className="tiles-title">
      <h2>
        <span className="subheading">{tilesTitle.subhead}</span>
        {tilesTitle.title}
      </h2>
    </div>
  ) : null;

  return (
    <div className="tiles">
      {tilesTitleMarkup}
      <div className={theme} onScroll={checkSlide}>
        {tilesMarkup}
      </div>
    </div>
  );
};

export default Tiles;
