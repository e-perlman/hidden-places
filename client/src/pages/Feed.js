import React, { useEffect, useState } from "react";
import { UserContext } from "../context/User";
import {Box, Grid, Typography} from '@mui/material'
import MySiteCard from '../components/MySiteCard'
import UserSiteCard from "../components/UserSiteCard";

const Feed = () => {
    const [campsites, setCampsites]=useState([])

    useEffect(() => {
        fetch("/feed").then((r) => {
          if (r.ok) {
            r.json().then((campsites) => setCampsites(campsites));
          }
        });
    }, []);

    if (campsites.length<1) return <Typography> No Campsites!</Typography>

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
        <Grid item xs={10}>
          {/* filter */}
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
            {campsites.map((campsite)=>(
                <UserSiteCard key={campsite.id} campsite={campsite}></UserSiteCard>
            ))}
          </Box>
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Box>
  </Box>
  )
}

export default Feed
