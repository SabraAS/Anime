import React, {useState} from "react";
import { useHistory } from 'react-router-dom';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBars,
    faBell,
    faCog,
    faDragon,
    faFire,
    faInfinity,
    faSearch,
    faSortDown
} from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.svg";
import {faGoogle, faHotjar} from "@fortawesome/free-brands-svg-icons";

function ListItem(props) {
    const history = useHistory();
    function clicked() {
        props.setVisibleSideNavbar(false)
        history.push(props.route)
    }
    return <dt className="list__item" onClick={clicked}>
        <span className="list__item--text">{props.text}</span>
        <div className="list__item--icon">
            <FontAwesomeIcon className="icon" icon={props.icon} />
        </div>
    </dt>
}

function SideNavBar (props) {
    if (props.visible) {
        return <div className="sideNavBar">
            <div className="sideNavBar__container">
                <dl className="sideNavBar__container--list">
                    <ListItem text="Minha Lista" icon={faDragon} route="/list" setVisibleSideNavbar={props.setVisibleSideNavbar}/>
                    <ListItem text="Informações" icon={faInfinity} route="/info" setVisibleSideNavbar={props.setVisibleSideNavbar}/>
                    <ListItem text="Top 10" icon={faHotjar} route="/top10" setVisibleSideNavbar={props.setVisibleSideNavbar}/>
                    <ListItem text="Configurações" icon={faCog} route="/config" setVisibleSideNavbar={props.setVisibleSideNavbar}/>
                    <ListItem text="Categorias" icon={faSortDown} route="/categories" setVisibleSideNavbar={props.setVisibleSideNavbar}/>
                </dl>
                <button type="button" className="sideNavBar__container--google-button">
                    <FontAwesomeIcon className="google-button__icon" icon={faGoogle}/>
                    <p className="google-button__text">Entrar com o google</p>
                </button>
            </div>
        </div>;
    }
    return '';
}

function Navbar() {
    const [visibleSideNavbar, setVisibleSideNavbar] = useState(false)
    const [search, setSearch] = useState(false)

    function setSideNavbarVisibilityInside () {
        if(visibleSideNavbar) {
            setVisibleSideNavbar(false)
        } else {
            setVisibleSideNavbar(true)
        }
    }

    function setSearchButtonVisibility () {
        setSearch(!search)
    }
    const handleKeyPress = (event) => {
        console.log('procurando');
    }

    const history = useHistory();
    return <div className="navbar">
        <div className="navbar__container">
            <div className="navbar__container--logo">
                <button type="button" className="button">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <img src={logo} alt="" className="image" onClick={() => history.push('/')}/>
            </div>
            <div className="navbar__container--buttons">
                <button type="button" className="button">
                    <FontAwesomeIcon icon={faBell} />
                </button>
                <button type="button" className="button">
                    <FontAwesomeIcon icon={faFire} />
                </button>
                {!search &&
                    <button type="button" className="button" onClick={setSearchButtonVisibility}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                }
                {search &&
                    <form className="form" id="search">
                        <input className="form__input" type="text" placeholder="Procure seu anime"  onKeyPress={handleKeyPress}/>
                        <FontAwesomeIcon className="form__icon" icon={faSearch} onClick={setSearchButtonVisibility}/>
                    </form>
                }
                <button type="button" className="button" onClick={setSideNavbarVisibilityInside}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </div>
        <SideNavBar setVisibleSideNavbar={setVisibleSideNavbar} visible={visibleSideNavbar}/>
    </div>
}

export default Navbar;