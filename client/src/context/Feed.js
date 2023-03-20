import { createContext, useState, useEffect } from "react"

const FeedContext=createContext()

function FeedProvider({ children }) {
  
    const [feed,setFeed]=useState(null)

    useEffect(() => {
        
      fetch("/feed").then((r) => {
        if (r.ok) {
          r.json().then((feed) => setFeed(feed));
        }
      });
    }, []);

    const value=[feed,setFeed]
    
    return (
        <FeedContext.Provider value={value}>
            {children}
        </FeedContext.Provider>
    )
}


export { FeedContext,FeedProvider }