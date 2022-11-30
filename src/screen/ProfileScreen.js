import React from 'react';
import "./ProfileScreen.css";
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import {auth} from "../firebase"
import {selectUser} from "../features/counter/userSlice"
import PlansScreen from './PlansScreen';

function ProfileScreen() {


const user = useSelector(selectUser);

  return (
  
    <div className='profileScreen'>
          <Nav/>
      
        <div className='profileScreen__body'>
            <h1>Edit profile</h1>
            <div className='profileScreen__info'>
                <img
                src="iconNet.jpeg"
                alt=''
                 />

                 <div className='profileScreen__details'>
                    <h2>{user.email}</h2>
                    <div className='profileScreen__plans'>
                        <h3>
                            Plans
                        </h3>
                        <PlansScreen />
                        <button
                        onClick={()=> auth.signOut()}
                         className='profileScreen__signOut'>Sign out</button>
                    </div>
                 </div>
            </div>
        </div>
       
 
    </div>
  )
}

export default ProfileScreen