import React from "react";
import {NavLink} from "react-router-dom";
const arrvv=[
    {
        pathname:"/blackhole",nam:"BlackHole",
    },
    {
        pathname:"/supernova",nam:"SuperNova",
    },
    {
        pathname:"/bigbang",nam:"BigBang",
    },
    {
        pathname:"/stars",nam:"Stars",
    }
  ]

const Nav_again=(props)=>{
    var img_urll=process.env.PUBLIC_URL+props.img_urll
    function  myfunction(val){
        if(String(props.name)==val)
        var a="nav_bbb"
        else
           var a="nav_b"
        return a
    }
    function myyy(val){
        if(String(props.name)==val.pathname)
        return val.nam
    }

    const nam=arrvv.find(myyy)
    console.log(nam.nam)
    console.log(arrvv.find(myfunction))
    return(
        <>
        <div className="boxx" style={{backgroundImage: "url("+img_urll+")"}}>
        <div className="nav">
         <p style={{flexGrow:2}} className="p1"><NavLink className="nav_b" to="/">SpaceX</NavLink></p>
         <ul style={{flexGrow:5}}>
             <li><NavLink className={myfunction("/blackhole")} to="/blackhole">BlackHole</NavLink></li>
             <li><NavLink className={myfunction("/supernova")}  to="/supernova">SuperNova</NavLink></li>
             <li><NavLink className={myfunction("/stars")}  to="/stars">Stars</NavLink></li>
             <li><NavLink className={myfunction("/bigbang")}  to="/bigbang">BigBang</NavLink></li>
         </ul>
         <button style={{flexGrow:1,alignSelf:"center"}}><a href="#">Login</a></button>
     </div>
     <div className="wwee">
     <p>{nam.nam}</p>
     </div>
     </div>
        </>
    )
}

export default Nav_again;