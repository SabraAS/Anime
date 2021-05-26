import React, {useState} from "react";
import {faHotjar} from "@fortawesome/free-brands-svg-icons";

//components import
import Navbar from "../global/navbar";
import SideNavBar from "../global/sideNavBar";
import Footer from "../global/footer";
import EmptyScreen from "../global/emptyScreen"

function Top10 () {
    return (
        <div className="top">
                <EmptyScreen text="Top 10" icon={faHotjar}/>
        </div>
    )
}

export default Top10