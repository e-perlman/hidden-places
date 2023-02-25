import React, {useContext} from 'react'
import { UserContext } from '../context/User'

const Home = ({user}) => {
  // const [user, setUser]=useContext(UserContext)

  return (
    <div>
        {/* <h1>Welcome</h1> */}
        <h1> Welcome {user.first_name}!</h1>
    </div>
  )
}

export default Home
