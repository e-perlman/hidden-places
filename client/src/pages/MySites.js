import React, { useContext } from "react";
import { UserContext } from "../context/User";
import {Box, Grid, Typography} from '@mui/material'
import MySiteCard from '../components/MySiteCard'

const MySites = () => {
  const [user, setUser]=useContext(UserContext)

  console.log(user)

  // if (!user | user.campsites.length<1) return <Typography> No Campsites!</Typography>
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
              <Typography variant='h4'>My Sites</Typography>
              {user.campsites.map((campsite)=>(
                  <MySiteCard key={campsite.id} campsite={campsite}></MySiteCard>
              ))}
            </Box>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default MySites
