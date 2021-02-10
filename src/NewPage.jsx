import React from "react";
import Nav_again from "./Nav_again";
import Bottom_Again from "./Bottom_Again";
const NewPage=(props)=>{
return(
    <>
    <Nav_again name={props.name} img_urll={props.img_urll}/>
    <Bottom_Again link1={props.link1} link2={props.link2} link3={props.link3} link4={props.link4}/>
    </>
    )
}
export default NewPage;