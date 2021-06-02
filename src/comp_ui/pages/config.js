import React from "react";
import {faCog} from "@fortawesome/free-solid-svg-icons";

//components import
import EmptyScreen from "../global/emptyScreen"

function Info () {
    return (
        <div className="config">
            <EmptyScreen text="Configurações" icon={faCog}/>
        </div>
    )
}

export default Info