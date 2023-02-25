import '../App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Auth from '../pages/Auth';
import Home from '../pages/Home';
import NavBar from './NavBar';

function App() {

  const [user,setUser]=useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

   

  if (!user) return <Auth onAuth={setUser}/>


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
