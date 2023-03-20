import React, {useContext,useEffect} from 'react'
import { FeedContext } from '../context/Feed'
import { UserContext } from '../context/User'

const Home = ({user}) => {
  const [feed,setFeed]=useContext(FeedContext)

  // useEffect(() => {
        
  //   fetch("/feed").then((r) => {
  //     if (r.ok) {
  //       r.json().then((feed) => setFeed(feed));
  //     }
  //   });
  // }, []);

  return (
    <div>
        {/* <h1>Welcome</h1> */}
        <h1> Welcome {user.first_name}!</h1>
    </div>
  )
}

export default Home
