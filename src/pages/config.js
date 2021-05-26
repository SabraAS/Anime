import React, {useState} from "react";
import {faCog} from "@fortawesome/free-solid-svg-icons";

//components import
import Navbar from "../global/navbar";
import SideNavBar from "../global/sideNavBar";
import Footer from "../global/footer";
import EmptyScreen from "../global/emptyScreen"

function Info () {
    return (
        <div className="config">
            <EmptyScreen text="Configurações" icon={faCog}/>
        </div>
    )
}

export default Info