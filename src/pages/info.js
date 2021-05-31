import React, {useState} from "react";

//components import
import One from "../assets/One Piece.png"
import Kimetsu from "../assets/Kimetsu no Yaiba.png"
import Yu from "../assets/Yu Yu Hakusho.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfinity, faSearch, faSort, faSortUp} from "@fortawesome/free-solid-svg-icons";

function ImagesGroup (props) {
    const [images, setImages] = useState(props.images)

    function moveLeft () {
        const imgs = [...images]
        let first = imgs.shift()
        imgs.push(first)
        setImages(imgs)
    }
    function moveRight () {
        const imgs = [...images]
        let last = imgs.pop()
        imgs.unshift(last)
        setImages(imgs)
    }

    return <div className="images">
        <div className="images__container">
            <img className="images__container--first-image" key={images[0].name.toString()} src={images[0].path}/>
            <div className="images__container--images">
                <img className="images__image" key={images[1].name.toString()} src={images[1].path}/>
                <img className="images__image" key={images[2].name.toString()} src={images[2].path}/>
            </div>
        </div>
        <div className="images__buttons">
            <button type="button" className="images__buttons--prev" onClick={moveLeft}>
                <FontAwesomeIcon icon={faSortUp} />
            </button>
            <button type="button" className="images__buttons--next" onClick={moveRight}>
                <FontAwesomeIcon id="faRight" icon={faSortUp} />
            </button>
        </div>
    </div>
}

function SearchBar() {
    return <div className="search-bar">
        <div className="search-bar__beginning">
            <FontAwesomeIcon className="search-bar__beginning--icon" icon={faInfinity} />
            <span className="search-bar__beginning--text">Veja Animes</span>
        </div>
        <div className="search-bar__ending">
            <div className="search-bar__ending--search">
                <form className="search" id="search">
                    <input className="search__input" type="text"/>
                    <FontAwesomeIcon className="search__icon" icon={faSearch}/>
                </form>
            </div>
            <FontAwesomeIcon className="search-bar__ending--icon" icon={faSort} />
        </div>
    </div>
}

function Items () {
    return <div className="items">
        <div className="item">
            <img className="item__img" src="img"/>
            <span className="item__name">Nome</span>
            <div className="item__separator"/>
            <div className="item__info">
                <span className="info--ep">
                    Epsódios: {"qntd ep"}
                </span>
                <span className="info--stars">
                    Estrelas: {"*"}
                </span>
            </div>
            <button>favoritar</button>
            <FontAwesomeIcon className="search-bar__ending--icon" icon={faSort} />
        </div>
    </div>
}

function Info () {
    return (
        <div className="info">
            <div className="info__content">
                <ImagesGroup images={[{name: 'Yu Yu Hakusho', path: Yu}, {name: 'Kimetsu no Yaiba', path: Kimetsu}, {name: 'One Piece', path: One}]}/>
                <SearchBar/>
            </div>
        </div>
    )
}

export default Info