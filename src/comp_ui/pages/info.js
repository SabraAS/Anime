import React, {PureComponent} from "react";
import {connect} from 'react-redux'
import {getAnimes, getTop10Animes} from '../store/actions/animes'

//components import
import One from "../../assets/One Piece.png"
import Kimetsu from "../../assets/Kimetsu no Yaiba.png"
import Yu from "../../assets/Yu Yu Hakusho.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfinity, faSearch, faSort, faSortDown, faSortUp} from "@fortawesome/free-solid-svg-icons";

class Info extends PureComponent {
    state = {
        top10: [],
        currentPage: 1
    }
    moveLeft = () => {
        const list = [...this.state.top10]
        let first = list.shift()
        list.push(first)
        this.setState({top10: list})
    }
    moveRight = () => {
        const list = [...this.state.top10]
        let last = list.pop()
        list.unshift(last)
        this.setState({top10: list})
    }

    removePage = () => {
        console.log('remove')
        const newIndex = this.state.currentPage - 1
        this.setState({ currentPage: newIndex })
        this.props.getAnimes(this.state.currentPage);
    }
    addPage = () => {
        console.log('add')
        const newIndex = this.state.currentPage + 1
        this.setState({currentPage: newIndex})
        this.props.getAnimes(this.state.currentPage);
    }

    async componentDidMount() {
        await this.props.getTop10Animes();
        this.props.getAnimes(this.state.currentPage);
        this.setState({top10: this.props.top10.top10Anime})
        //load all images, this way we have then in cache when user decides to click the button, so they load fast
        this.state.top10.forEach((anime) => {
            const img = new Image();
            img.src = anime.path;
        });
    }

    render () {
        return (
            <div className="info">
                <div className="info__content">
                    <div className="info__content--images">
                        <div className="images">
                            {this.state.top10.length ?
                                <div className="images__container">
                                    <div className="images__container--name">
                                        <div className="name">
                                            <span className="name__text">{this.state.top10[0].name}</span>
                                        </div>
                                    </div>
                                    <img className="images__container--first-image" src={this.state.top10[0].path}/>
                                    <div className="images__container--images">
                                        <img className="images__image" src={this.state.top10[1].path}/>
                                        <img className="images__image" src={this.state.top10[2].path}/>
                                    </div>
                                </div>
                                : ''
                            }
                            <div className="images__buttons">
                                <button type="button" className="images__buttons--prev" onClick={this.moveLeft}>
                                    <FontAwesomeIcon icon={faSortUp} />
                                </button>
                                <button type="button" className="images__buttons--next" onClick={this.moveRight}>
                                    <FontAwesomeIcon icon={faSortUp} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="info__content--search-bar">
                        <div className="search-bar">
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
                                <div className="search-bar__ending--icons">
                                    <button type="button" className="icons">
                                        <FontAwesomeIcon className="icons__item" icon={faSortUp} onClick={this.removePage} />
                                    </button>
                                    <button type="button" className="icons">
                                        <FontAwesomeIcon className="icons__item" icon={faSortDown}/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="info__content--list">
                        <div className="list">
                            <div className="list__item">
                                <img className="list__item--img" src="img"/>
                                <span className="list__item--name">Nome</span>
                                <div className="list__item--separator"/>
                                <div className="list__item--info">
                                    <div className="info">
                                        <span className="info--ep">
                                            Epsódios: {"qntd ep"}
                                        </span>
                                        <span className="info--stars">
                                            Estrelas: {"*"}
                                        </span>
                                    </div>
                                </div>
                                <button>favoritar</button>
                                <FontAwesomeIcon className="search-bar__ending--icon" icon={faSortUp} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps  = (state) => ({top10:state.top10})

export default connect(mapStateToProps, {getTop10Animes, getAnimes})(Info)