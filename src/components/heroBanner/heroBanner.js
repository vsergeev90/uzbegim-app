import React from "react";
import "./heroBanner.scss";

const HeroBanner = ({ bgImage, bannerText }) => {
  const bannerImage = {
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <div className="hero-banner fadeIn" style={bannerImage}>
      <h1>
        {bannerText.span ? (
          <span className="subheading">{bannerText.span}</span>
        ) : null}{" "}
        {bannerText.text ? bannerText.text : null}{" "}
        {bannerText.button ? (
          <button className="banner-button">{bannerText.button}</button>
        ) : null}
      </h1>
      <div className="overlay"></div>
    </div>
  );
};

export default HeroBanner;
