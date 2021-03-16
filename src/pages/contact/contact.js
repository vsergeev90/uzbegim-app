import React from "react";
import "./contact.scss";
import Map from "../../components/map/map";
import HeroBanner from "../../components/heroBanner/heroBanner";
import bgImage from "../../assets/images/contact/city-map-bw.png";

const Contact = () => {
  const bannerText = {
    text: "Contact Info",
  };

  return (
    <div>
      <header>
        <HeroBanner bgImage={bgImage} bannerText={bannerText} />
      </header>
      <h1>Contact Info</h1>
      <div className="container contact-info">
        <div>
          <Map />
        </div>
        <div>
          <p>
            <strong>Address</strong>: Konevova 945/75, 130 00, Praha 3 - Zizkov
            <br />
            <strong>Telephone</strong>: 702 869 389 <br />
            If you would like to make an order please call, or check the bolt
            <br />
            app on you phone: two buttons with app links <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
