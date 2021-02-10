import React from "react";
import {NavLink} from 'react-router-dom';
const Card=(props)=>{
    console.log({props})
    return(
        <>
        <div className="card_render">
            <NavLink className="nav_bb" to={props.uloc}>
        <img src={process.env.PUBLIC_URL+props.imgsrc} alt="mypic"/>
        <div className="card_data">
            {props.name_d}<br/>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, error. Nesciunt qui saepe blanditiis, adipisci dolorum amet eius porro fuga debitis consequatur recusandae, facilis ad unde expedita exercitationem ipsam assumenda.

        </div>
        </NavLink>
        </div>
       </>
    )
}
export default Card;