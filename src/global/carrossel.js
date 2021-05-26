import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

class Carrossel extends React.Component {
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
        if(ul) {
            ul.animate(
                swipeLeft,
                2000).onfinish = this.rearrangeItemsLeft
        }
    }

    moveRight = () => {
        const swipeLeft = [
            {transform: 'translateX(0)'},
            {transform: 'translateX(30%)'}
        ]
        const ul = document.getElementById('ul')
        if(ul) {
            ul.animate(
                swipeLeft,
                2000).onfinish = this.rearrangeItemsRight
        }
    }

    interval () {
        setInterval(this.moveLeft, 6000)

        const resize = function () {
            if(document.getElementById("carrossel")) {
            const slideWidth = document.getElementById("carrossel").getElementsByTagName("li")[1].offsetWidth
            const slideCount = document.getElementById("carrossel").getElementsByTagName("li").length
            const slideHeight = document.getElementById("carrossel").getElementsByTagName("li")[1].offsetHeight
            const carrosselUlWidth = slideCount * slideWidth
            document.getElementById("carrossel").style.width = slideWidth.toString()
            document.getElementById("carrossel").style.height = slideHeight.toString()
            document.getElementById("ul").style.width = carrosselUlWidth.toString()
            const ml = -slideWidth+'px'
            document.getElementById("ul").style.marginLeft = ml.toString()
            }
        }
        resize()
        window.addEventListener('resize', resize, true)
    }

    componentDidMount() {
        this.interval()
    }

    render() {
        return (
            <div id="carrossel" className="carrossel">
                <button type="button" className="carrossel__buttons--prev" onClick={this.moveRight.bind(this)}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className="wrapper">
                    <ul id="ul">
                        {this.state.items.map( (item, index) => (
                            <li  key={index}>
                                <p>{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <button type="button" className="carrossel__buttons--next" onClick={this.moveLeft.bind(this)}>
                    <FontAwesomeIcon id="faRight" icon={faChevronRight} />
                </button>
            </div>
        )
    }
}

export default Carrossel;