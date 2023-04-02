import React, { useEffect, useState,useContext } from "react";
import { UserContext } from "../context/User";
import { FeedContext } from "../context/Feed";
import {Box, Grid, Typography} from '@mui/material'
import MySiteCard from '../components/MySiteCard'
import UserSiteCard from "../components/UserSiteCard";
import UserSearch from "../components/UserSearch";
import Map from "../components/Map"
import CampsiteFilter from "../components/CampsiteFilter";

const Feed = () => {
    const [feed, setFeed]=useContext(FeedContext)
    const [filtered, setFiltered]=useState(null)

    let campsites=[]
    if (!filtered){
      campsites=feed
    }
    else campsites=filtered
     
    if (!feed) return <Typography> Loading</Typography>
    
  return (
    <Box
    overflow="auto"
    height="100vh"
    flexDirection="column"
    display="flex"
  >
    <Box p={2}>
      <Grid container justifyContent='center'>
        <Grid item xs={7}>
        <CampsiteFilter campsites={feed} setFiltered={setFiltered}></CampsiteFilter>
        </Grid>
      </Grid>
    </Box>
    <Box
      flex={1}
      flexDirection="column"
      display="flex"
      p={4}
    >
      <Grid container spacing={3} style={{ display: "flex", flex: 1 }}>
        <Grid item xs={1}></Grid>
        <Grid style={{ display: "flex", flex: 1, overflowY: "scroll"}} item xs={5}>
          <Box flex={1} height="80vh" overflow='auto'>
            <Typography style={{textAlign:'center', position:'sticky', top: '0px', background: '#282c34',zIndex: 1}} variant='h4'>Feed</Typography>
            {campsites.map((campsite)=>(
                <UserSiteCard key={campsite.id} campsite={campsite}></UserSiteCard>
            ))}
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Map campsites={campsites}/>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </Box>
  </Box>
  )
}

export default Feed
