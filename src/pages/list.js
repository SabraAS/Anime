import React, {useState} from "react";
import {faDragon} from "@fortawesome/free-solid-svg-icons";

//components import
import Navbar from "../global/navbar";
import SideNavBar from "../global/sideNavBar";
import Footer from "../global/footer";
import EmptyScreen from "../global/emptyScreen"

function List () {
    return (
        <div className="list">
            <EmptyScreen text="Minha Lista" icon={faDragon}/>
        </div>
    )
}

export default List