import React, {useState} from "react";
import Navbar from "../global/navbar";
import SideNavBar from "../global/sideNavBar";
import Footer from "../global/footer";
import EmptyScreen from "../global/emptyScreen"
import {faSortDown} from "@fortawesome/free-solid-svg-icons";

function Categories () {
    return (
        <div className="categories">
            <EmptyScreen text="Categorias" icon={faSortDown}/>
        </div>
    )
}

export default Categories