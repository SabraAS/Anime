import React from "react";
import {faInfinity} from "@fortawesome/free-solid-svg-icons";

//components import
import EmptyScreen from "../global/emptyScreen"

function Info () {
    return (
        <div className="info">
            <EmptyScreen text="Informações" icon={faInfinity}/>
        </div>
    )
}

export default Info