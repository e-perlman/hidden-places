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
          <Grid item xs={7} border='2px solid red'>
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
          <Grid style={{ display: "flex", flex: 1, overflowY: "scroll" }} item xs={6}>
            <Box flex={1} border='2px solid red'>
              <Typography variant='h4'>My Sites</Typography>
              {filtered.map((campsite)=>(
                  <MySiteCard key={campsite.id} campsite={campsite}></MySiteCard>
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

export default MySites
