import React from 'react';
import logo from '../assets/logo.svg';
import logoWhite from '../assets/logo white.svg';
import dragon from '../assets/dragon.svg';
import infinite from '../assets/infinite.svg';
import fire from '../assets/fire.svg';
import { faBell, faSearch, faFire, faBars, faArrowDown, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Main.scss';

function Head() {
  return <div className="header">
    <div className="header__container">
        <div className="header__container--logo">
            <button type="button" className="button">
              <FontAwesomeIcon icon={faBars} />
            </button>
            <img src={logo} alt="" className="image"/>
        </div>
        <div className="header__container--buttons">
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
  </div>
}

function Banner() {
  return <div className="banner">
    <div className="banner__container">
      <img src={logoWhite} alt="" className="banner__container--logo"/>
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
    const slideCount = document.getElementById("slider").getElementsByTagName("li").length;
    const arr = document.getElementById("slider").getElementsByTagName("li")
    for (let i = 0; i < 3; i++) {
        arr[i].style.display = 'flex';
    }
    const swipeLeft = [
        {transform: 'translateX(0)'},
        {transform: 'translateX(-30%)'}
    ];
    const ul = document.getElementById('ul');
    const li_first = ul.firstElementChild;
    ul.animate(
        swipeLeft,
        1500).onfinish = function () {
        ul.appendChild(li_first);
    };
    for (let i = 3; i < slideCount; i++) {
        arr[i].style.display = 'none';
    }
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
        moveLeft();
    }, 5000);

    const resize = function () {
        const slideWidth = document.getElementById("slider").getElementsByTagName("li")[1].offsetWidth;
        const slideCount = document.getElementById("slider").getElementsByTagName("li").length;
        const slideHeight = document.getElementById("slider").getElementsByTagName("li")[1].offsetHeight;
        const sliderUlWidth = slideCount * slideWidth;
        document.getElementById("slider").style.width = slideWidth.toString();
        document.getElementById("slider").style.height = slideHeight.toString();
        document.getElementById("ul").style.width = sliderUlWidth.toString();
        const ml = -slideWidth+'px'
        document.getElementById("ul").style.marginLeft = ml.toString();
    }
    resize();
    window.addEventListener('resize', resize, true);
}

function Carousel() {
  return <div id="slider" className="slider">
      <button type="button" className="slider__buttons--prev"  onClick={moveRight}>
          <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="wrapper">
          <ul id="ul">
              <li><p>HOJE: MY HERO ACADEMIA</p></li>
              <li><p>amanhã: my hero academia - ep133 </p></li>
              <li><p>Novos episódio disponível: my hero academia </p></li>
          </ul>
     </div>
      <button type="button" className="slider__buttons--next"  onClick={moveLeft}>
          <FontAwesomeIcon id="faRight" icon={faChevronRight} />
      </button>
  </div>
}

function Bar () {
    return <div className="bar"></div>
}

function Item (props) {
    return <div className="item">
        <div className="item__logo">
            <img className="item__logo--image" src={props.image} alt="icon"/>
        </div>
        <div className="item__text">
            <p className="item__text--title">{props.title}</p>
            <p className="item__text--description">{props.text}</p>
        </div>
    </div>
};

function Details () {
    return <div className="details">
        <span className="details__title">O QUE FAZER AQUI POR AQUI?</span>
        <div className="details__items">
            <div className="details__items--wrapper">
                <Item image={fire} title="Os Melhores" text="Veja o que esta pegando fogo, no mundo dos animes. Os animes mais bem avaliados pela galera!" ></Item>
                <Item image={infinite} title="Informações" text="Procure informações dos seus animes  preferidos." ></Item>
                <Item image={dragon} title="Sua Lista" text="Comece agora mesmo a montar sua lista de animes preferidos, e seja notificado quando um episódio novo for ao ar!" ></Item>
            </div>
        </div>
    </div>
}

function Bottom () {
    return <div className="bottom">
        <img className="bottom__image" src={logoWhite} alt="icon"/>
    </div>
}

class Main extends React.Component {
    componentDidMount() {
        Slider();
    }
    render() {
        return (
            <div className="App">
                <header>
                    <Head/>
                </header>
                <div className="body">
                    <Banner/>
                    <Carousel/>
                    <Bar/>
                    <Details/>
                    <Bottom/>
                </div>
            </div>
        );
    }
}

export default Main;
