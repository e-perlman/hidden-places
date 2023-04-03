// import '../App.css';
import React, { useEffect, useState, useContext } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import { UserContext } from '../context/User'
import Auth from '../pages/Auth';
import Home from '../pages/Home';
import NavBar from './NavBar';
import MyProfile from '../pages/MyProfile';
import Following from '../pages/Following'
import MySites from '../pages/MySites';
import NewCampsite from '../pages/NewCampsite';
import Feed from '../pages/FeedPage'
import NewState from '../pages/NewState'
import UserSitePage from "../pages/UserSitePage";

function App() {
  const [user, setUser]=useContext(UserContext)

  const match=useRouteMatch();


  if (!user) return <Auth/>


  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route exact path='/following/:user_id'>
            <UserSitePage></UserSitePage>
          </Route>
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
          <Route path="/new_state">
            <NewState></NewState>
          </Route>
          <Route path="/my_feed">
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
