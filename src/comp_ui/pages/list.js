import React from "react";
import {faDragon} from "@fortawesome/free-solid-svg-icons";

//components import
import EmptyScreen from "../global/emptyScreen"

function List () {
    return (
        <div className="list">
            <EmptyScreen text="Minha Lista" icon={faDragon}/>
        </div>
    )
}

export default List