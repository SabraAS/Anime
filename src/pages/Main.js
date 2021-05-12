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

class Carousel extends React.Component {
    constructor(props) {
        super(props)
        let items = JSON.parse(JSON.stringify(this.props.items))
        if (items.length === 2) {
            items.push(items[0])
            items.push(items[1])
        }
        this.state = {
            items: [...items]
        }
    }

    rearrangeItemsLeft = () => {
        let arr = JSON.parse(JSON.stringify(this.state.items))
        const arrSize = arr.length
        let first = arr[0]
        for (let i = 0; i <arrSize-1; i++) {
            arr[i] = arr[i+1]
        }
        arr[arrSize-1] = first
        this.setState({
            items: arr
        })
    }

    rearrangeItemsRight = () => {
        let arr = JSON.parse(JSON.stringify(this.state.items))
        const arrSize = arr.length
        let last = arr[arrSize-1]
        for (let i = arrSize-1; i > 0; i--) {
            arr[i] = arr[i-1]
        }
        arr[0] = last
        this.setState({
            items: arr
        })
    }

    moveLeft = () => {
        const swipeLeft = [
            {transform: 'translateX(0)'},
            {transform: 'translateX(-30%)'}
        ]
        const ul = document.getElementById('ul')
        ul.animate(
            swipeLeft,
            2000).onfinish = this.rearrangeItemsLeft
    }

    moveRight = () => {
        const swipeLeft = [
            {transform: 'translateX(0)'},
            {transform: 'translateX(30%)'}
        ]
        const ul = document.getElementById('ul')
        ul.animate(
            swipeLeft,
            2000).onfinish = this.rearrangeItemsRight
    }

    interval () {
        setInterval(this.moveLeft, 6000)

        const resize = function () {
           const slideWidth = document.getElementById("slider").getElementsByTagName("li")[1].offsetWidth
           const slideCount = document.getElementById("slider").getElementsByTagName("li").length
           const slideHeight = document.getElementById("slider").getElementsByTagName("li")[1].offsetHeight
           const sliderUlWidth = slideCount * slideWidth
           document.getElementById("slider").style.width = slideWidth.toString()
           document.getElementById("slider").style.height = slideHeight.toString()
           document.getElementById("ul").style.width = sliderUlWidth.toString()
           const ml = -slideWidth+'px'
           document.getElementById("ul").style.marginLeft = ml.toString()
        }
        resize()
        window.addEventListener('resize', resize, true)
    }

    componentDidMount() {
        this.interval()
    }

    render() {
        return (
            <div id="slider" className="slider">
                <button type="button" className="slider__buttons--prev" onClick={this.moveRight.bind(this)}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className="wrapper">
                    <ul id="ul">
                        {this.state.items.map( (item, index) => (
                            <li  key={index}>
                                <p>{item}</p>
                            </li>
                        ))}x
                    </ul>
                </div>
                <button type="button" className="slider__buttons--next" onClick={this.moveLeft.bind(this)}>
                    <FontAwesomeIcon id="faRight" icon={faChevronRight} />
                </button>
            </div>
        )
    }
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
}

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
    render() {
        return (
            <div className="App">
                <header>
                    <Head/>
                </header>
                <div className="body">
                    <Banner/>
                    <Carousel items={['hoje: my hero academia - ep132 ', 'amanhã: my hero academia - ep133', 'Novos episódio disponível: my hero academia']}/>
                    <Bar/>
                    <Details/>
                    <Bottom/>

                </div>
            </div>
        )
    }
}

export default Main
