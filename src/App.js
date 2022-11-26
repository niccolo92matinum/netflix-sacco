import React from 'react';
import './App.css';
import HomeScreen from './screen/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import LoginScreen from './screen/LoginScreen';




function App() {

  const user = null

  return (
    <div className="app">
    

      <Router>
        {!user ? (
          <LoginScreen/>
        ):(
          <Switch>
          <Route path="/">
          <HomeScreen/>
          </Route>
        </Switch>
        )

        }
       
     
     </Router>


    </div>
  );
}

export default App;
