import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

function Carrossel (props) {
    let itemsProp = JSON.parse(JSON.stringify(props.items))
    if (itemsProp.length === 2) {
        itemsProp.push(itemsProp[0])
        itemsProp.push(itemsProp[1])
    }
    const [items, setItems] = useState([...itemsProp]);

    function rearrangeItemsLeft () {
        let arr = JSON.parse(JSON.stringify(items))
        const arrSize = arr.length
        let first = arr[0]
        for (let i = 0; i <arrSize-1; i++) {
            arr[i] = arr[i+1]
        }
        arr[arrSize-1] = first
        setItems(arr)
    }

    function rearrangeItemsRight (){
        let arr = JSON.parse(JSON.stringify(items))
        const arrSize = arr.length
        let last = arr[arrSize-1]
        for (let i = arrSize-1; i > 0; i--) {
            arr[i] = arr[i-1]
        }
        arr[0] = last
        setItems(arr)
    }

    function moveLeft () {
        const swipeLeft = [
            {transform: 'translateX(0)'},
            {transform: 'translateX(-30%)'}
        ]
        const ul = document.getElementById('ul')
        if(ul) {
            ul.animate(
                swipeLeft,
                2000).onfinish = rearrangeItemsLeft
        }
    }

    function moveRight () {
        const swipeLeft = [
            {transform: 'translateX(0)'},
            {transform: 'translateX(30%)'}
        ]
        const ul = document.getElementById('ul')
        if(ul) {
            ul.animate(
                swipeLeft,
                2000).onfinish = rearrangeItemsRight
        }
    }

    function interval () {
        setInterval(moveLeft, 6000)

        const car = document.getElementById("carrossel")
        if(car) {
            const resize = function () {
                const slideWidth = document.getElementById("carrossel").getElementsByTagName("li")[1].offsetWidth
                const slideCount = document.getElementById("carrossel").getElementsByTagName("li").length
                const slideHeight = document.getElementById("carrossel").getElementsByTagName("li")[1].offsetHeight
                const carrosselUlWidth = slideCount * slideWidth
                document.getElementById("carrossel").style.width = slideWidth.toString()
                document.getElementById("carrossel").style.height = slideHeight.toString()
                document.getElementById("ul").style.width = carrosselUlWidth.toString()
                const ml = -slideWidth + 'px'
                document.getElementById("ul").style.marginLeft = ml.toString()
            }
            resize()
            window.addEventListener('resize', resize, true)
        }
    }

    useEffect( () => {
        interval()
    })

    return (
        <div id="carrossel" className="carrossel">
            <button type="button" className="carrossel__buttons--prev" onClick={moveRight}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="wrapper">
                <ul id="ul">
                    {items.map( (item, index) => (
                        <li  key={index}>
                            <p>{item}</p>
                        </li>
                    ))}x
                </ul>
            </div>
            <button type="button" className="carrossel__buttons--next" onClick={moveLeft}>
                <FontAwesomeIcon id="faRight" icon={faChevronRight} />
            </button>
        </div>
    )
}

export default Carrossel;