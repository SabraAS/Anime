import React from "react";

//components import
import EmptyScreen from "../global/emptyScreen"
import {faChevronLeft, faChevronRight, faSortDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Categories () {
    return (
        <div className="categories">
            <EmptyScreen text="Categorias" icon={faSortDown}/>
        </div>
    )
}

export default Categories