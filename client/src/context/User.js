import { createContext, useState, useEffect } from "react"

const UserContext=createContext()

function UserProvider({ children }) {
    const [user,setUser]=useState(null)

    useEffect(() => {
        // auto-login
        fetch("/me").then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
          }
        });
      }, []);

    const value=[user,setUser]
    
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}


export { UserContext,UserProvider }