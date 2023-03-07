import React, { useContext } from "react";
import { UserContext } from "../context/User";
import {Grid, Typography} from '@mui/material'
import UserFollowCard from '../components/UserFollowCard'
import UserSearch from "../components/UserSearch";

const Following = () => {

    const [user, setUser]=useContext(UserContext)

  return (
    <Grid 
        container spacing={4}
        justifyContent='center'
        alignItems="center"
    >
        <Grid item xs={5} textAlign='center'>
            <Typography variant='h4'> Followers</Typography>
            {user.followers.map((follower)=>(
                <UserFollowCard key={follower.id} user={follower}></UserFollowCard>
            ))}
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={5} textAlign='center'>
            <Typography variant='h4'> All Users</Typography>
            <UserSearch></UserSearch>
            {user.followers.map((follower)=>(
                <UserFollowCard key={follower.id} user={follower}></UserFollowCard>
            ))}
        </Grid>
        
      
    </Grid>
  )
}

export default Following
