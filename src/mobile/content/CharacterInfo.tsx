import React from 'react';
import Slider from 'react-slick';

import title from '../../img/en/mobile/character-info/character-info-title.png';
import kamisatoAyaka from '../../img/en/mobile/character-info/kamisato-ayaka.png';
import kamisatoAyakaText from '../../img/en/mobile/character-info/kamisato-ayaka-text.png';
import playButton from '../../img/en/mobile/character-info/play-button.png';
import sliderButton from '../../img/en/mobile/slider-button.png';

function CharacterInfo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };

  return (
    <div className="character-info">
      <img src={title} alt="" className="title" />
      <Slider className="slider" {...settings}>
        <div className="slider-item">
          <img src={kamisatoAyaka} alt="kamisato ayaka" className="image" />
          <img src={playButton} alt="play button" className="play-button" />
          <img
            alt="kamisato ayaka introduction"
            src={kamisatoAyakaText}
            className="stars"
          />
          <p className="intro">
            "Daughter of the Yashiro Commission's Kamisato Clan. Dignified and
            elegant, as well as wise and strong."
          </p>
        </div>
      </Slider>
      {/* <img src={sliderButton} alt="" className="button left" />
      <img src={sliderButton} alt="" className="button" /> */}
    </div>
  );
}

export default CharacterInfo;

function PreviousArrow({ className, style, onClick }: any) {
  return (
    <img
      src={sliderButton}
      className={className}
      style={{ ...style }}
      alt="previous arrow"
      // className="button left"
      onClick={onClick}
    />
  );
}

function NextArrow({ className, style, onClick }: any) {
  return (
    <img
      src={sliderButton}
      className={className}
      style={{ ...style }}
      alt="next arrow"
      // className="button"
      onClick={onClick}
    />
  );
}
