import React from "react";
import Nav from './Nav';
import Card_Import from './Card_Import';
import Bottom from "./Bottom";
import {Route,Switch,useLocation} from "react-router-dom";
import NewPage from "./NewPage";
const arrv=[
  {
      pathname:"/blackhole",image_val:"/assests/images/black9.jpg",link1:"https://www.youtube.com/embed/e-P5IFTqB98",link2:"https://www.youtube.com/embed/FoExPq04OQQ",link3:"https://www.youtube.com/embed/P5_Msrdg3Hk",link4:"https://www.youtube.com/embed/3Py4aQv1L9o",
  },
  {
      pathname:"/supernova",image_val:"/assests/images/super3.jpg",link1:"https://www.youtube.com/embed/2-O8W1M_nYw",link2:"https://www.youtube.com/embed/QfNqBKAvkpw",link3:"https://www.youtube.com/embed/Lr6yqqaTZjA",link4:"https://www.youtube.com/embed/QfNqBKAvkpw",
  },
  {
      pathname:"/bigbang",image_val:"/assests/images/big3.jpg",link1:"https://www.youtube.com/embed/ptfU1Kkf8Kg",link2:"https://www.youtube.com/embed/Tz8ithgTBj4",link3:"https://www.youtube.com/embed/HdPzOWlLrbE",link4:"https://www.youtube.com/embed/gup4Cc0Ube0",
  },
  {
      pathname:"/stars",image_val:"/assests/images/stars5.jpg",link1:"https://www.youtube.com/embed/EFO_bsg1sw8",link2:"https://www.youtube.com/embed/ljkUCJgixd4",link3:"https://www.youtube.com/embed/i93Z7zljQ7I",link4:"https://www.youtube.com/embed/tJV_XTDtKgM",
  }
]

const App=()=>{
    const location=useLocation();
    console.log(location);
    <Switch>
            <Route exact path="/blackhole" render={()=><NewPage name="BlackHole"/>}/>
            <Route exact path="/supernova" render={()=><NewPage name="SuperNova"/>}/>
            <Route exact path="/bigbang" render={()=><NewPage name="BigBang"/>}/>
            <Route exact path="/stars" render={()=><NewPage name="Stars"/>}/>
    </Switch>
    if(location.pathname==="/")
    {
        return(<>
   
            <Nav/>
            <Bottom/>
               
            </>)
    }
    else{
        console.log(String(location.pathname))
        function myfunction(val){
            if(String(location.pathname)==val.pathname)
            return val
        }
        var image_vall=arrv.find(myfunction)
        console.log(image_vall)
        return(
            <>
            <NewPage name={location.pathname} img_urll={image_vall.image_val} link1={image_vall.link1} link2={image_vall.link2} link3={image_vall.link3} link4={image_vall.link4}/>
            </>
        )
    }
}

export default App;