import React, {PureComponent} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

class Search extends PureComponent {
    state = {
        visible: false
    }

    setVisibility = () => {
        if (this.props.stayVisible) {
            return
        }
        this.setState({visible: !this.state.visible})
    }

    componentDidMount() {
        if (this.props.stayVisible) {
            this.setState({visible: true})
        }
    }

    render() {
        return <div className="search">
            {this.state.visible
                ? <form className="search__form" id="search">
                    <input className="search__form--input" type="text" placeholder={this.props.placeholder}/>
                    <FontAwesomeIcon className="search__form--icon" icon={faSearch} onClick={this.setVisibility}/>
                </form>
                : <button type="button" className="search__button" onClick={this.setVisibility}>
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
            }
        </div>
    }
}

export default Search;