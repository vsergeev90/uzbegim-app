import React from "react";
import Menu from "../../components/menu/menu";
import HeroBanner from "../../components/heroBanner/heroBanner";
import bgImage from "../../assets/images/homepage/bg_1.jpg";

import "./menuPage.scss";

const MenuPage = () => {
  const bannerText = {
    span: "",
    text: "Menu",
    button: "",
  };

  return (
    <div>
      <header>
        <HeroBanner bgImage={bgImage} bannerText={bannerText} />
      </header>
      <div className="container">
        <Menu />
      </div>
    </div>
  );
};

export default MenuPage;
