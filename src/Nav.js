import React, { useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";



function Nav() {

const [show, handleShow] = useState(false);
const history = useHistory()

const transitionNavBar = () => {
    if(window.scrollY < 100){
        handleShow(true)
    }else{
        handleShow(false)
    }
}

// with scroll it call transiction navbar
useEffect(()=>{
window.addEventListener("scroll",transitionNavBar);
//clean up
return ()=> window.removeEventListener('scroll', transitionNavBar)
}, [])



    return(
        //it means show the black navbar only when variable show is true 
        <div className={`nav ${show && "nav__black"}`}>
         < div className="nav__contents">
        
        
          <img 
             onClick={()=>history.push("/")}
            src="final.png" 
             alt=""
             className="nav__logo" 
           />
           <img 
             onClick={()=>history.push("/profile")}
             src="iconNet.jpeg" 
              alt=""
             className="nav__avatar"
            />
        
        
        </div>
        
        
        
       
        
        </div>
        )
    }
    
    export default Nav