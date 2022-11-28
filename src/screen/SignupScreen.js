import React , {useRef}from 'react';
import "./SignupScreen.css";
import {auth} from '../firebase'


function SignupScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);


const register = (e) =>{
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
    ).then((authUser)=>{
        console.log(authUser,'ciao')

    }).catch((error)=>{
        alert(error.message);
        })
}

const signIn = (e) =>{
    e.preventDefault();
}


  return (
    <div className='signupScreen'>
        <form>
            <h1>Sign In</h1>
            <input  ref={emailRef} placeholder='Email' type="email"></input>
            <input ref={passwordRef} placeholder='password' type="password"></input>
            <button onClick={signIn} type='submit'>Sign In</button>

            <h4>
                <span className='signupScreen__gray'>New to Netflix? </span>
                <span onClick={register} className='signupScreen__link'>Sign Up now </span> 
            </h4>
          
        </form>

    
    </div>
  )
}

export default SignupScreen