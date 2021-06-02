import React from "react";

//components import
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