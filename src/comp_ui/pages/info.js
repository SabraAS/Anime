import React, {PureComponent} from "react";
import {connect} from 'react-redux'
import {getAnimes, getTop10Animes} from '../store/actions/animes'

//components import
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfinity, faSearch, faSortDown, faSortUp} from "@fortawesome/free-solid-svg-icons";
import {bindActionCreators} from "redux";
import Search from "../global/search";

class Info extends PureComponent {
    state = {
        top10Anime: [],
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
        if(this.state.currentPage > 1) {
            const newIndex = this.state.currentPage - 1
            this.setState({ currentPage: newIndex })
            this.props.getAnimes(newIndex);
        }
    }
    addPage = () => {
        const newIndex = this.state.currentPage + 1
        this.setState({currentPage: newIndex})
        this.props.getAnimes(newIndex);
    }

    async componentDidMount() {
        await this.props.getAnimes(this.state.currentPage);
        await this.props.getTop10Animes();
        this.setState({top10Anime: this.props.top10Anime})
        //load all images, this way we have then in cache when user decides to click the button, so they load fast
        this.state.top10Anime.forEach((anime) => {
            const img = new Image();
            img.src = anime.path;
        });
    }
    render () {
        const list = this.props.list || []
        return (
            <div className="info">
                <div className="info__content">
                    <div className="info__content--images">
                        <div className="images">
                            {this.state.top10Anime.length ?
                                <div className="images__container">
                                    <div className="images__container--name">
                                        <div className="name">
                                            <span className="name__text">{this.state.top10Anime[0].name}</span>
                                        </div>
                                    </div>
                                    <img className="images__container--first-image" src={this.state.top10Anime[0].path}/>
                                    <div className="images__container--images">
                                        <img className="images__image" src={this.state.top10Anime[1].path}/>
                                        <img className="images__image" src={this.state.top10Anime[2].path}/>
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
                                <Search stayVisible/>
                                <FontAwesomeIcon className="search-bar__ending--icon" icon={faSortDown} onClick={this.addPage}/>
                            </div>
                        </div>
                    </div>
                    <div className="info__content--list">
                        <div className="list">
                            {list && list.length &&
                            list.map((anime, index) => {
                                return <div className="list__item" key={index}>
                                    <img className="list__item--image" src={anime.path}/>
                                    <span className="list__item--name">{anime.name}</span>
                                    <div className="list__item--separator"/>
                                    <div className="list__item--info">
                                        <div className="info">
                                            <div className="info__text">
                                                    <span>
                                                        Epsódios: {anime.ep}
                                                    </span>
                                                <span>
                                                        Estrelas: {"*"}
                                                    </span>
                                            </div>
                                            <div className="info__actions">
                                                <button className="info__actions--fav">favoritar</button>
                                                <FontAwesomeIcon className="info__actions--icon" icon={faSortUp} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        top10Anime: state.animes.top10Anime,
        list: state.animes.animeList
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getAnimes, getTop10Animes }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)