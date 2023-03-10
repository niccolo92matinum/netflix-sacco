//import { isRejectedWithValue } from '@reduxjs/toolkit';

import './LoginScreen.css'
import React, { useState } from 'react'
import SignupScreen from './SignupScreen';

function LoginScreen() {

    const [signIn, setSignIn] = useState(false);

    console.log(signIn)
  return (
    <div className='loginScreen'> 
   
        <div className='loginScreen__background'>
            <img
              className='loginScreen__logo'
              src='sfondo.png'
              alt=''
            />
           
           <button 
              onClick={()=>setSignIn(true)}
              className='loginScreen__button'>
              Sign In
            </button>
            
            <div className='loginScreen__gradient'/>

        </div>

        <div className='loginScreen__body'>
            {signIn ? (
                <SignupScreen/>
            ): (

                <>
                <h1>Unlimited films, TV programmes and Nicola Sacco</h1>
                <h2>All you need is here</h2>
                <h3>Ready to watch? Enter your email to create or restart you membership.</h3>

                <div className='loginScreen__input'>
                    <form>
                        <input
                        type="email"
                        placeholder='Email Address'
                        />
                        <button 
                         onClick={()=>setSignIn(true)}
                         className='loginScreen__getStarted'>
                            Get Started
                        </button>
                       
                    </form>
                </div>
                </>

            )}
               
         </div>
     
            
    </div>
  )
}

export default LoginScreen