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
    const [user,setUser]=useContext(UserContext)
    const [feed, setFeed]=useContext(FeedContext)
    const [filtered,setFiltered]=useState(feed)

    if (!feed) return <Typography> Loading</Typography>

  return (
    <Box
    overflow="auto"
    height="100vh"
    flexDirection="column"
    display="flex"
    border='2px solid red'
  >
    <Box p={2}>
      <Grid container justifyContent='center'>
        <Grid item xs={7}>
        <CampsiteFilter campsites={feed} setFiltered={setFiltered}></CampsiteFilter>
        </Grid>
      </Grid>
    </Box>
    <Box
      overflow="auto"
      flex={1}
      // border="2px solid red"
      flexDirection="column"
      display="flex"
      p={4}
    >
      <Grid container spacing={3} style={{ display: "flex", flex: 1 }}>
        <Grid tyle={{ display: "flex", flex: 1, overflowY: "scroll" }} item xs={6}>
          <Box flex={1} border='2px solid red'>
            <Typography variant='h4'>Feed</Typography>
            {filtered.map((campsite)=>(
                <UserSiteCard key={campsite.id} campsite={campsite}></UserSiteCard>
            ))}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Map campsites={filtered}/>
        </Grid>
      </Grid>
    </Box>
  </Box>
  )
}

export default Feed
