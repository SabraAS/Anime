import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

function EmptyScreen(props) {
    return <div className="empty">
        <FontAwesomeIcon className="empty__icon" icon={props.icon}/>
        <span className="empty__text">{props.text}</span>
    </div>
}

export default EmptyScreen;