import React, {PureComponent} from "react";
import {connect} from 'react-redux'
import {addFavorite, getAnimes, getTop10Animes} from '../../comp_config/store/actions/animes'

//components import
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInfinity, faSort, faSortUp} from "@fortawesome/free-solid-svg-icons";
import {bindActionCreators} from "redux";
import Search from "../global/search";

class Info extends PureComponent {
    state = {
        top10Anime: [],
        currentPage: 1,
        currentAnime: {},
        popup: false
    }

    moveLeft = () => {
        const list = [...this.state.top10Anime]
        let first = list.shift()
        list.push(first)
        this.setState({top10Anime: list})
    }
    moveRight = () => {
        const list = [...this.state.top10Anime]
        let last = list.pop()
        list.unshift(last)
        this.setState({top10Anime: list})
    }

    addPage = () => {
        const newIndex = this.state.currentPage + 1
        this.setState({currentPage: newIndex})
        this.props.getAnimes(newIndex);
    }
    addToFavorites = async (payload) => {
        const id = payload.id
        const name = payload.name
        const path = payload.path
        await this.props.addFavorite({id, name, path})
        console.log('Favorites', this.props.favorites)
    }
    popup = (payload) => {
        this.setState({currentAnime: payload})
        const now = this.state.popup
        this.setState({popup: !now})
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
                                    <img className="images__container--first-image" src={this.state.top10Anime[0].path} alt="anime"/>
                                    <div className="images__container--images">
                                        <img className="images__image" src={this.state.top10Anime[1].path} alt="anime"/>
                                        <img className="images__image" src={this.state.top10Anime[2].path} alt="anime"/>
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
                                <FontAwesomeIcon className="search-bar__ending--icon" icon={faSort} onClick={this.addPage}/>
                            </div>
                        </div>
                    </div>
                    <div className="info__content--list">
                        <div className="list">
                            {list && list.length &&
                                list.map((anime, index) => {
                                    return <div className="list__item" key={index}>
                                        <img className="list__item--image" src={anime.path} alt="anime"/>
                                        <span className="list__item--name">{anime.name}</span>
                                        <div className="list__item--separator"/>
                                        <div className="list__item--info">
                                            <div className="info">
                                                <div className="info__text">
                                                        <span>
                                                            Epsódios: {anime.ep}
                                                        </span>
                                                    <span>
                                                            Popularidade: {anime.popularity}
                                                        </span>
                                                </div>
                                                <div className="info__actions">
                                                    <button className="info__actions--fav" onClick={() => {this.addToFavorites(anime)}}>
                                                        favoritar
                                                    </button>
                                                    <FontAwesomeIcon className="info__actions--icon" icon={faSortUp} onClick={() => {this.popup(anime)}}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
                {this.state.popup ?
                    <div className="info__popup">
                        <p>Name: {this.state.currentAnime.name}</p>
                        <p>Number of Ep: {this.state.currentAnime.ep}</p>
                        <p>Popularity: {this.state.currentAnime.popularity}</p>
                        <p>Average Score: {this.state.currentAnime.averageScore}</p>
                    </div>
                    : ''
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        top10Anime: state.animes.top10Anime,
        list: state.animes.animeList,
        favorites: state.animes.favorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getAnimes, getTop10Animes, addFavorite }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)