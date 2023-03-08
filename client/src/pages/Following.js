import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/User";
import {Grid, Typography} from '@mui/material'
import UserFollowCard from '../components/UserFollowCard'
import UserSearch from "../components/UserSearch";

const Following = () => {
    const [allUsers, setAllUsers]=useState([])

    useEffect(() => {
        fetch("/users").then((r) =>{
          if (r.ok) {
            r.json().then((users)=>setAllUsers(users))
          }
        })
      }, []);

    const [user, setUser]=useContext(UserContext)

  return (
    <Grid 
        container spacing={4}
    >
        <Grid item xs={1}></Grid>
        <Grid item xs={4} textAlign='center'>
            <Typography variant='h4'> Followers</Typography>
            <UserSearch></UserSearch>
            {user.followers.map((follower)=>(
                <UserFollowCard key={follower.id} user={follower}></UserFollowCard>
            ))}
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={4} textAlign='center'>
            <Typography variant='h4'> All Users</Typography>
            <UserSearch></UserSearch>
            {allUsers.map((follower)=>(
                <UserFollowCard key={follower.id} user={follower}></UserFollowCard>
            ))}
        </Grid>
        <Grid item xs={1}></Grid>
        
      
    </Grid>
  )
}

export default Following
