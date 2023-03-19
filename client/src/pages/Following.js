import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/User";
import {Grid, Typography} from '@mui/material'
import UserFollowCard from '../components/UserFollowCard'
import UserSearch from "../components/UserSearch";

const Following = () => {

    const [user, setUser]=useContext(UserContext)

  return (
    <Grid 
        container spacing={4}
    >
        <Grid item xs={1}></Grid>
        <Grid item xs={4} textAlign='center'>
            <Typography variant='h4'> Following</Typography>
            <UserSearch></UserSearch>
            {user.followees.map((user)=>(
                <UserFollowCard key={user.id} user={user}></UserFollowCard>
            ))}
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={4} textAlign='center'>
            <Typography variant='h4'> All Users</Typography>
            <UserSearch></UserSearch>
            {user.not_following.map((user)=>(
                <UserFollowCard key={user.id} user={user}></UserFollowCard>
            ))}
        </Grid>
        <Grid item xs={1}></Grid>
        
      
    </Grid>
  )
}

export default Following
