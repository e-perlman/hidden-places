// import '../App.css';
import React, { useEffect, useState, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContext } from '../context/User'
import Auth from '../pages/Auth';
import Home from '../pages/Home';
import NavBar from './NavBar';
import MyProfile from '../pages/MyProfile';
import Following from '../pages/Following'
import MySites from '../pages/MySites';
import NewCampsite from '../pages/NewCampsite';
import Feed from '../pages/Feed'

function App() {

  const [user, setUser]=useContext(UserContext)

  if (!user) return <Auth/>


  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/my_profile">
            <MyProfile></MyProfile>
          </Route>
          <Route path="/following">
            <Following></Following>
          </Route>
          <Route path="/my_sites">
            <MySites></MySites>
          </Route>
          <Route path="/new_site">
            <NewCampsite></NewCampsite>
          </Route>
          <Route path="/feed">
            <Feed></Feed>
          </Route>
          <Route path='/'>
            <Home user={user}></Home>
          </Route>
        </Switch>
      </main>
      
    </>
  );
}

export default App;
