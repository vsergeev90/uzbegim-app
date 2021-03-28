import React from 'react';
import './home.scss';

import HeroBanner from '../../components/heroBanner/heroBanner';
import Tiles from '../../components/tiles/tiles';
import bgImage from '../../assets/images/homepage/bg_1.jpg';
import restaurantImage from '../../assets/images/homepage/restaurant.jpg';
import ButtonMenu from '../../components/button-menu/button-menu';
import About from '../../components/about/about';
import Title from '../../components/title/title';
import HERO_TILES from './hero_tiles.js';
import SPECIALTIES_TILES from './specailties_tiles';

const Homepage = () => {
  const bannerText = {
    span: 'UZBEGIM',
    text: 'delicious middle east cuisine',
    button: '',
  };

  const tilesSpeacialtiesTitle = {
    subhead: 'Specialties',
    title: 'Our menu',
  };

  return (
    <div className="content home">
      <header>
        <HeroBanner bgImage={bgImage} bannerText={bannerText} />
        <Tiles tiles={HERO_TILES} tilesTitle="" theme="theme-1" />
      </header>
      <section>
        <Title title={'Our menu'} subhead={'Specialties'} />
        <Tiles
          tiles={SPECIALTIES_TILES}
          tilesTitle={tilesSpeacialtiesTitle}
          theme="theme-2"
        />
        <ButtonMenu buttonText={'See Full Menu'} buttonLink={'/menu'} />
      </section>
      <section>
        <Title title={'About'} subhead={'About'} />
        <About image={restaurantImage} />
      </section>
    </div>
  );
};

export default Homepage;
