import { createContext, useState, useEffect } from "react"

const StatesContext=createContext()

function StatesProvider({ children }) {
    const [states,setStates]=useState(null)

    useEffect(() => {
        fetch("/states").then((r) => {
          if (r.ok) {
            r.json().then((states) => setStates(states));
          }
        });
      }, []);

    const value=[states,setStates]
    
    return (
        <StatesContext.Provider value={value}>
            {children}
        </StatesContext.Provider>
    )
}


export { StatesContext,StatesProvider }