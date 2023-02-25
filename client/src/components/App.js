import '../App.css';
import React, { useEffect, useState, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContext } from '../context/User'
import Auth from '../pages/Auth';
import Home from '../pages/Home';
import NavBar from './NavBar';

function App() {

  const [user, setUser]=useContext(UserContext)


  if (!user) return <Auth/>


  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path='/'>
            <Home user={user}></Home>
          </Route>
        </Switch>
      </main>
      
    </>
  );
}

export default App;
