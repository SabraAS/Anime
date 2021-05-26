import React, {useState} from 'react';

import logoWhite from '../assets/logo white.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHotjar } from '@fortawesome/free-brands-svg-icons';
import {faArrowDown, faDragon, faInfinity} from "@fortawesome/free-solid-svg-icons";

//components import
import Carrossel from "../global/carrossel";
import Footer from "../global/footer";
import Navbar from "../global/navbar";
import SideNavBar from "../global/sideNavBar";

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

function Bar () {
    return <div className="bar"></div>
}

function Item (props) {
    return <div className="item">
        <div className="item__logo">
            <FontAwesomeIcon className="item__logo--image" icon={props.image} style={{color: props.imageColor}}/>
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
                <Item image={faHotjar} imageColor="#C64750" title="Os Melhores" text="Veja o que esta pegando fogo, no mundo dos animes. Os animes mais bem avaliados pela galera!" />
                <Item image={faInfinity} imageColor="#FE9800" title="Informações" text="Procure informações dos seus animes  preferidos."/>
                <Item image={faDragon} title="Sua Lista" text="Comece agora mesmo a montar sua lista de animes preferidos, e seja notificado quando um episódio novo for ao ar!"/>
            </div>
        </div>
    </div>
}

function Homepage () {
    return (
        <div className="homepage">
            <div className="homepage__content">
                <Banner/>
                <Carrossel items={['hoje: my hero academia - ep132 ', 'amanhã: my hero academia - ep133', 'Novos episódio disponível: my hero academia']}/>
                <Bar/>
                <Details/>
            </div>
        </div>
    )
}

export default Homepage
