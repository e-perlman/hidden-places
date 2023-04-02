import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/User";
import {Box,Grid, Typography} from '@mui/material'
import UserFollowCard from '../components/UserFollowCard'
import UserSearch from "../components/UserSearch";

const Following = () => {
    const [user, setUser]=useContext(UserContext)
    const [followingSearch,setFollowingSearch]=useState('')
    const [allSearch,setAllSearch]=useState('')


    function handleFollowingSearchChange(event){
        setFollowingSearch(event.target.value)
    }

    function handleAllSearchChange(event){
        setAllSearch(event.target.value)
    }

    const shownFollowing= user.followees
    .filter(followee=>followee.first_name.toLowerCase().includes(followingSearch.toLowerCase())||followee.last_name.toLowerCase().includes(followingSearch.toLowerCase())|| followee.username.toLowerCase().includes(followingSearch.toLowerCase()))
    
    const shownAll= user.not_following
    .filter(user=>user.first_name.toLowerCase().includes(allSearch.toLowerCase())||user.last_name.toLowerCase().includes(allSearch.toLowerCase())|| user.username.toLowerCase().includes(allSearch.toLowerCase()))

    return (
    <Box
    overflow="auto"
    height="80vh"
    flexDirection="column"
    display="flex"
    >
    <Grid container spacing={4} style={{ display: "flex", flex: 1 }}>
        <Grid item xs={1}></Grid>
        <Grid style={{ flex: 1, overflowY: "scroll" }} item xs={4} textAlign='center'>
            <Typography variant='h4'> Following</Typography>
            <UserSearch search={followingSearch} onSearchChange={handleFollowingSearchChange}></UserSearch>
            <Box height="65vh" overflow='auto'>
                {shownFollowing.map((user)=>(
                    <UserFollowCard key={user.id} user={user}></UserFollowCard>
                ))}
            </Box>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={4} textAlign='center'>
            <Typography variant='h4'> All Users</Typography>
            <UserSearch search={allSearch} onSearchChange={handleAllSearchChange}></UserSearch>
            <Box height="65vh" overflow='auto'>
                {shownAll.map((user)=>(
                    <UserFollowCard key={user.id} user={user}></UserFollowCard>
                ))}
            </Box>
        </Grid>
        <Grid item xs={1}></Grid>
        
      
    </Grid>
    </Box>
  )
}

export default Following
