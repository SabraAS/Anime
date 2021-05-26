// import React from "react";
// import { useHistory } from 'react-router-dom';
//
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import { faHotjar, faGoogle } from '@fortawesome/free-brands-svg-icons';
// import {faSortDown, faCog, faDragon, faInfinity} from "@fortawesome/free-solid-svg-icons";
//
// function ListItem(props) {
//     const history = useHistory();
//     return <dt className="list__item" onClick={() => history.push(props.route)}>
//             <span className="list__item--text">{props.text}</span>
//             <div className="list__item--icon">
//                 <FontAwesomeIcon className="icon" icon={props.icon} />
//             </div>
//     </dt>
// }
//
// function SideNavBar (props) {
//     if (props.visible) {
//         return <div className="sideNavBar">
//             <div className="sideNavBar__container">
//                 <dl className="sideNavBar__container--list">
//                     <ListItem text="Minha Lista" icon={faDragon} route="/list"/>
//                     <ListItem text="Informações" icon={faInfinity} route="/info"/>
//                     <ListItem text="Top 10" icon={faHotjar} route="/top10"/>
//                     <ListItem text="Configurações" icon={faCog} route="/config"/>
//                     <ListItem text="Categorias" icon={faSortDown} route="/categories"/>
//                 </dl>
//                 <button type="button" className="sideNavBar__container--google-button">
//                     <FontAwesomeIcon className="google-button__icon" icon={faGoogle}/>
//                     <p className="google-button__text">Entrar com o google</p>
//                 </button>
//             </div>
//         </div>;
//     }
//     return '';
// }
//
// export default SideNavBar;