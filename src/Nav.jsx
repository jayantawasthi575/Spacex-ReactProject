import React from "react";
import {NavLink} from 'react-router-dom';
const Nav=()=>{
    var img_urll=process.env.PUBLIC_URL+"/assests/images/neb9.gif"
    return(<>
    <div className="box"  style={{backgroundImage: "url("+img_urll+")"}}>
     <div className="nav">
         <p style={{flexGrow:2}} className="p1"><NavLink className="nav_b" to="/">SpaceX</NavLink></p>
         <ul style={{flexGrow:5}}>
             <li><NavLink className="nav_b" to="/blackhole">BlackHole</NavLink></li>
             <li><NavLink className="nav_b" to="/supernova">SuperNova</NavLink></li>
             <li><NavLink className="nav_b" to="/stars">Stars</NavLink></li>
             <li><NavLink className="nav_b" to="/bigbang">BigBang</NavLink></li>
         </ul>
         <button style={{flexGrow:1,alignSelf:"center"}}><a href="#">Login</a></button>
     </div>
     <div className="wwe">
     <p>Welcome to SpaceX</p>
     <p>A home for space blog</p>
     </div>
    </div>
    </>)
}

export default Nav;