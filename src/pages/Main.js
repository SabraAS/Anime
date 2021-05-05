import React, { useEffect } from 'react';
import logo from '../assets/logo.svg';
import logoWhite from '../assets/logo white.svg';
import { faBell, faSearch, faFire, faBars, faArrowDown, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Main.scss';

function Head() {
  return <div className="header__container">
    <img src={logo} alt="" className="logo"/>
    <div className="container container__buttons">
      <button type="button" className="button">
        <FontAwesomeIcon icon={faBell} />
      </button>
      <button type="button" className="button">
        <FontAwesomeIcon icon={faFire} />
      </button>
      <button type="button" className="button">
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <button type="button" className="button">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  </div>
}

function Banner() {
  return <div className="banner">
    <div className="banner__container">
      <img src={logoWhite} alt="" className="logo__white"/>
      <div className="banner__container--text">
        <p className="banner__container--text text">monitore os seus animes</p>
        <p className="banner__container--text text">preferidos, e não perca mais</p>
        <p className="banner__container--text text">nenhum episódio</p>
      </div>
    </div>
    <FontAwesomeIcon icon={faArrowDown} className="banner--arrow"/>
  </div>
}



function moveLeft() {
    const swipeLeft = [
        {transform: 'translateX(0)'},
        {transform: 'translateX(-30%)'}
    ];
    const ul = document.getElementById('ul');
    const li_first = ul.firstElementChild;
    ul.animate(
        swipeLeft,
        1000).onfinish = function () {
        ul.appendChild(li_first);
    };
};

function moveRight() {
    const swipeLeft = [
        {transform: 'translateX(0)'},
        {transform: 'translateX(30%)'}
    ];
    const ul = document.getElementById('ul');
    const li_last = ul.lastElementChild;
    ul.animate(
        swipeLeft,
        1000).onfinish = function () {
        ul.prepend(li_last);
    };
};


function Slider() {
    setInterval(function () {
       // moveLeft();
    }, 4000);

    const slideCount = document.getElementById("slider").getElementsByTagName("li").length;
    const slideWidth = document.getElementById("slider").getElementsByTagName("li")[0].offsetWidth;
    const slideHeight = document.getElementById("slider").getElementsByTagName("li")[0].offsetHeight;
    const sliderUlWidth = slideCount * slideWidth;

    document.getElementById("slider").style.width = slideWidth.toString();
    document.getElementById("slider").style.height = slideHeight.toString();

    document.getElementById("ul").style.width = sliderUlWidth.toString();
    const ml = -slideWidth+'px'
    document.getElementById("ul").style.marginLeft = ml.toString();

}

function Carrossel() {
  return <div id="slider" className="slider">
      <button type="button" className="slider__buttons--prev"  onClick={moveRight}>
          <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="wrapper">
          <ul id="ul">
              <li><p>HOJE: MY HERO ACADEMIA</p></li>
              <li><p>HOJE: JUJUTSU KAISEN</p></li>
              <li><p>HOJE: BOKU NO HERO</p></li>
              <li><p>HOJE: NARUTO</p></li>
          </ul>
     </div>
      <button type="button" className="slider__buttons--next"  onClick={moveLeft}>
          <FontAwesomeIcon icon={faChevronRight} />
      </button>
  </div>
}


function Main() {
  useEffect(() => {
    Slider();
  });

  return (
      <div className="App">
        <header className="header">
          <Head/>
        </header>
        <div className="body">
        <Banner/>
        <Carrossel/>
        </div>
      </div>
  );
}

export default Main;
