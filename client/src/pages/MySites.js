import React, { useContext, useState } from "react";
import { UserContext } from "../context/User";
import {Box, Grid, Typography} from '@mui/material'
import MySiteCard from '../components/MySiteCard'
import Map from "../components/Map";
import '../stylesheet.css'
import CampsiteFilter from "../components/CampsiteFilter";

const MySites = () => {
  const [user, setUser]=useContext(UserContext)
  const [filtered,setFiltered]=useState(user.campsites)

  if (!user) return <Typography> Loading...</Typography>
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
            <CampsiteFilter campsites={user.campsites} setFiltered={setFiltered}></CampsiteFilter>
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
        <Grid item xs={1}></Grid>
          <Grid style={{ display: "flex", flex: 1, overflowY: "scroll" }} item xs={5}>
            <Box flex={1}>
              <Typography variant='h4'>My Sites</Typography>
              {filtered.map((campsite)=>(
                  <MySiteCard key={campsite.id} campsite={campsite} setFiltered={setFiltered}></MySiteCard>
              ))}
            </Box>
          </Grid>
          <Grid item xs={5}>
                <Map campsites={filtered}/>
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default MySites
