import React from "react";
import "./home.scss";

import HeroBanner from "../../components/heroBanner/heroBanner";
import Tiles from "../../components/tiles/tiles";
import bgImage from "../../assets/images/homepage/bg_1.jpg";
import restaurantImage from "../../assets/images/homepage/restaurant.jpg";
import foodImage from "../../assets/images/homepage/dessert-5.jpg";
import ButtonMenu from "../../components/button-menu/button-menu";
import About from "../../components/about/about";

const Homepage = () => {
  const bannerText = {
    span: "UZBEGIM",
    text: "delicious middle east cuisine",
    button: "",
  };

  //tiles on hero banner to not to break layout stick with 4 tiles with small description
  const tiles = [
    {
      title: "Food Name",
      image: foodImage,
      description: "some text which describes the food and how delicios it is",
    },
    {
      title: "Food Name",
      image: foodImage,
      description: "some text which describes the food and how delicios it is",
    },
    {
      title: "Food Name",
      image: foodImage,
      description: "some text which describes the food and how delicios it is",
    },
    {
      title: "Food Name",
      image: foodImage,
      description: "some text which describes the food and how delicios it is",
    },
  ];

  const tilesSpecialties = [
    {
      title: "Food Name",
      image: foodImage,
      description: "some text which describes the food and how delicios it is",
    },
    {
      title: "Food Name",
      image: foodImage,
      description: "some text which describes the food and how delicios it is",
    },
    {
      title: "Food Name",
      image: foodImage,
      description: "some text which describes the food and how delicios it is",
    },
    {
      title: "Food Name",
      image: foodImage,
      description: "some text which describes the food and how delicios it is",
    },
  ];

  const tilesSpeacialtiesTitle = {
    subhead: "Specialties",
    title: "Our menu",
  };

  return (
    <div className="content home">
      <header>
        <HeroBanner bgImage={bgImage} bannerText={bannerText} />
      </header>
      <Tiles tiles={tiles} tilesTitle="" theme="theme-1" />
      <Tiles
        tiles={tilesSpecialties}
        tilesTitle={tilesSpeacialtiesTitle}
        theme="theme-2"
      />
      <ButtonMenu buttonText={"See Full Menu"} buttonLink={"/menu"} />
      <About image={restaurantImage} />
    </div>
  );
};

export default Homepage;
