import React from 'react'
import {useParams} from 'react-router-dom'
import { useState, useEffect } from "react"
import {Box, Grid, Typography} from '@mui/material'
import UserSiteCard from "../components/UserSiteCard";
import Map from "../components/Map"
import CampsiteFilter from "../components/CampsiteFilter";



const UserSitePage = () => {
    const [userCampsites,setUserCampsites]=useState(null)
    const [filtered, setFiltered]=useState(null)

    const {user_id}=useParams()

    useEffect(() => {
        fetch(`/mysites/${user_id}`).then((r) => {
          if (r.ok) {
            r.json().then((campsites) => setUserCampsites(campsites));
          }
        });
    }, []);


    let campsites=[]
    if (!filtered){
      campsites=userCampsites
    }
    else campsites=filtered

    if (!userCampsites) return <Typography> Loading</Typography>

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
        <CampsiteFilter campsites={userCampsites} setFiltered={setFiltered}></CampsiteFilter>
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
        <Grid style={{ display: "flex", flex: 1, overflowY: "scroll" }} item xs={5}>
          <Box flex={1} height="80vh" overflow='auto' >
            <Typography variant='h4'> {campsites.length>0? null:'No campsites!'} </Typography>
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

export default UserSitePage
