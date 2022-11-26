import React, { useEffect, useState } from "react";
import "./Nav.css";



function Nav() {

const [show, handleShow] = useState(false);

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
            src="final.png" 
             alt=""
             className="nav__logo" 
           />
           <img 
             src="iconNet.jpeg" 
              alt=""
             className="nav__avatar"
            />
        
        
        </div>
        
        
        
       
        
        </div>
        )
    }
    
    export default Nav