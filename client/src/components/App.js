import '../App.css';
import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Auth from '../pages/Auth';

function App() {
  const [user,setUser]=useState(null)

  
  if (!user) return <Auth onAuth={setUser}/>

  return (
    <div className="App">
      <main>
        <Switch>
          <Route path='/'>

          </Route>
        </Switch>
      <Auth/>
      </main>
      
    </div>
  );
}

export default App;
