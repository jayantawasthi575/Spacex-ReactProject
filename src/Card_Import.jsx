import React from "react";
import Card from './Card';
import sdata from "./sdata";
// const Card_Import=()=>{
//     {sdata.map((val,index)=>
//         {
//     return(
//         <>
//         <div className="ard">

        
         
//              <Card imgsrc="/assests/images/super1.jpg" name_d="Blackhole"/>
    
//         {/* <img src={process.env.PUBLIC_URL + "/assests/images/black1.jpg"} alt="mypic"/> */}
//         </div>
//         </>)})

    
// }}

const Card_Import=()=>{
    return(
        <>
        <div className="ard">
        <Card imgsrc="/assests/images/black1.jpg" name_d="Blackhole" uloc="/blackhole"/>
        <Card imgsrc="/assests/images/super1.jpg" name_d="SuperNova" uloc="/supernova"/>
        <Card imgsrc="/assests/images/star2.jpg" name_d="Stars" uloc="/stars"/>
        <Card imgsrc="/assests/images/big1.jpg" name_d="BigBang" uloc="/bigbang"/>
        </div>
        </>
    )
}
export default Card_Import;