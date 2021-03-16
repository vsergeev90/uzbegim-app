import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  useEffect(() => {
    addEvent();

    return () => {
      addEvent();
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

  let updatePosition = () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let navbar = document.getElementById("navbar");

    if (
      scrollTop >= 100 &&
      scrollTop < 300 &&
      navbar.classList.contains("fadeInDown")
    ) {
      navbar.classList.remove("fadeInDown");
    }

    if (scrollTop > 500 && !navbar.classList.contains("fixed")) {
      navbar.classList.add("fadeInDown");
      navbar.classList.add("fixed");

      setTimeout(() => {
        navbar.classList.remove("fadeInDown");
      }, 100);
    }

    if (scrollTop < 500 && navbar.classList.contains("fixed")) {
      navbar.classList.add("fadeOutUp");

      setTimeout(() => {
        navbar.classList.remove("fixed", "fadeOutUp");
        navbar.classList.add("fadeInDown");
      }, 100);
    }
  };

  let addEvent = () => {
    window.addEventListener("scroll", debounce(updatePosition));
  };

  let toggleMenu = () => {
    const dropdown = document.querySelector(".navbar-collapse");
    const burger = document.querySelector(".navbar-burger");

    dropdown.style.display = "block";
    burger.classList.toggle("active");

    if (burger.classList.contains("active")) {
      setTimeout(() => {
        dropdown.classList.add("active");
      }, 0);
    } else {
      dropdown.classList.remove("active");
      setTimeout(() => {
        dropdown.style.display = "none";
      }, 300);
    }
  };

  return (
    <nav id="navbar" className="navbar fadeInDown">
      <div className="container">
        <div className="navbar-mobile">
          <p className="navbar-brand">UZBEGIM</p>
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <div className="navbar-burger">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            <span>Menu</span>
          </button>
        </div>
        <div className="navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <p className="nav-link">
                <NavLink exact to="/">
                  Home
                </NavLink>
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link">
                <NavLink to="/menu">Menu</NavLink>
              </p>
            </li>
            <li className="nav-item">
              <p className="nav-link">
                <NavLink to="/contact">Contact</NavLink>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
