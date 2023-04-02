import React, {useState, useContext, useEffect} from 'react'
import { UserContext } from "../context/User";
import { StatesContext } from '../context/States';
import {Grid, Card, Box, Avatar, Stack, FormControl, FormLabel, FormControlLabel, Button, ButtonGroup,InputLabel,CardContent, Typography, Divider, List, ListItem, Rating, TextField, RadioGroup, Radio, MenuItem, Select, InputAdornment, FormGroup} from '@mui/material'
import Error from '../styles/Error'

const MySiteCard = ({campsite, setFiltered}) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "2-digit",
    year: "numeric"
  });
  const [user, setUser]=useContext(UserContext)
  const [states, setStates]=useContext(StatesContext)
  const [editCampsite,setEditCampsite]=useState(false)
  const [errors,setErrors]=useState([])
  const [campsiteInfo, setCampsiteInfo]=useState(campsite)

  const campsiteState=states.find(state=>state.id===campsite.state_id)
  
  const handleCampsiteDelete = ()=>{
    fetch(`/campsites/${campsite.id}`, {
        method: "DELETE",
        }).then((r) => {
        if (r.ok) {
          const updatedCampsites=user.campsites.filter(site=>site.id!==campsite.id)
          const updatedStates=updateStates(updatedCampsites)
          setUser({...user, campsites:updatedCampsites, states:updatedStates, campsites_number:user.campsites_number-1})
          setFiltered(updatedCampsites)
        } else {
            r.json().then((err) => setErrors(err.errors));
        }
    });
  }
  const handleChange= e =>{
    setCampsiteInfo({
        ...campsiteInfo,
        [e.target.name]:e.target.value
    })
  }

  const updateStates=(updatedCampsites)=> {
    const campsiteStateIds=updatedCampsites.map(site=>site.state_id)
    return states.filter(state=>campsiteStateIds.includes(state.id))
  }
  
  const handleCampsiteEdit= (e) =>{
    e.preventDefault();
    setErrors([]);
    fetch(`/campsites/${campsite.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(campsiteInfo),
        }).then((r) => {
        if (r.ok) {
            r.json().then((campsite) => {
              handleUpdateCampsite(campsite)
            });
        } else {
            r.json().then((err) => setErrors(err.errors));
        }
    });
  } 

  const handleUpdateCampsite = (updatedCampsite) => {
    const updatedCampsites = user.campsites.map((campsite) => {
      if (campsite.id === updatedCampsite.id) {
        return updatedCampsite;
      } else {
        return campsite;
      }
    });
    const updatedStates=updateStates(updatedCampsites)
    setUser({...user, campsites:updatedCampsites, states:updatedStates})
    setEditCampsite(false)
    setFiltered(updatedCampsites)
  }
  

  return (
    <Grid item xs={12} p={2} sx={{ width: "100%" }}>
            <Card sx={{ borderRadius: 4, p: 3 }}>
              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                  }}
                >
                  <Avatar
                    sx={{ bgcolor: 'lime', width: 60, height: 60, mr: 2 }}
                    src={user.profile_pic}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start"
                    }}
                  >
                    <Typography
                      variant="body1"
                      color="text.primary"
                      sx={{ fontWeight: 600 }}
                    >
                      {user.first_name} {user.last_name}
                    </Typography>
                    <Typography
                      underline="always"
                      variant="body1"
                      sx={{ fontWeight: 500 }}
                    >
                      @{user.username}
                    </Typography>
                  </Box>
                </Box>
                <ButtonGroup variant='contained' size='small' orientation='vertical'>
                  <Button onClick={()=>setEditCampsite(!editCampsite)} > 
                      {editCampsite?("Cancel Edit"):("Edit Campsite")}
                  </Button>
                  {editCampsite?(
                    null
                  ):(
                    <Button color='error' onClick={handleCampsiteDelete}>Delete Campsite</Button>
                  )}
                </ButtonGroup>
              </Box>
              {editCampsite? (
                <>
                  <Stack spacing={3} direction="column">
                  <TextField id='campsite-name'
                      variant="standard"
                      label="Campsite Name"
                      name="name"
                      onChange={handleChange}
                      value={campsiteInfo.name}
                      required
                  />
                  <TextField id='latitude'
                      variant="standard"
                      label="Latitude"
                      name="latitude"
                      onChange={handleChange}
                      value={campsiteInfo.latitude}
                      required
                  />
                  <TextField id='longitude'
                      variant="standard"
                      label="Longitude"
                      name="longitude"
                      onChange={handleChange}
                      value={campsiteInfo.longitude}
                      required
                  />
                  <FormControl id='state'>
                      <InputLabel>State</InputLabel>
                      <Select
                      label="State"
                      name='state_id'
                      value={campsiteInfo.state_id}
                      onChange={handleChange}
                      > 
                          {states.map((state) => (
                              <MenuItem key={state.id} value={state.id}>
                              {state.name}
                              </MenuItem>
                          ))}
                      </Select>
                  </FormControl>
                  <FormControl id='access_type'>
                      <FormLabel> Access Type </FormLabel>
                      <RadioGroup
                      row
                      name="access_type"
                      required
                      value={campsiteInfo.access_type}
                      onChange={handleChange}
                      >
                          <FormControlLabel
                              value="Drive_In"
                              control={<Radio />}
                              label="Drive-In"
                          />
                          <FormControlLabel
                              value="Hike_In"
                              control={<Radio />}
                              label="Hike-In"
                          />
                          <FormControlLabel
                              value="Boat_In"
                              control={<Radio />}
                              label="Boat-In"
                          />
                      </RadioGroup>
                  </FormControl>
                  <FormControl id='land_type'>
                      <FormLabel> Land Type </FormLabel>
                      <RadioGroup
                      row
                      name="land_type"
                      required
                      value={campsiteInfo.land_type}
                      onChange={handleChange}
                      >
                          <FormControlLabel
                              value="Private"
                              control={<Radio />}
                              label="Private"
                          />
                          <FormControlLabel
                              value="Public"
                              control={<Radio />}
                              label="Public"
                          />
                          <FormControlLabel
                              value="BLM"
                              control={<Radio />}
                              label="BLM"
                          />
                      </RadioGroup>
                  </FormControl>
                  <Box id='ratings'>
                      <FormControl id='safety'>
                          <Typography component="legend">Safety</Typography>
                          <Rating
                              name="safety"
                              size="large"
                              value={campsiteInfo.safety}
                              onChange={(event, newValue) => {
                                  setCampsiteInfo({...campsiteInfo, safety: newValue});
                              }}
                          />
                      </FormControl>
                      <FormControl id='quietness'>
                          <Typography component="legend">Quietness</Typography>
                          <Rating
                              name="quietness"
                              size="large"
                              value={campsiteInfo.quietness}
                              onChange={(event, newValue) => {
                                  setCampsiteInfo({...campsiteInfo, quietness: newValue});
                              }}
                          />
                      </FormControl>
                      <FormControl id='privacy'>
                          <Typography component="legend">Privacy</Typography>
                          <Rating
                              name="privacy"
                              size="large"
                              value={campsiteInfo.privacy}
                              onChange={(event, newValue) => {
                                  setCampsiteInfo({...campsiteInfo, privacy: newValue});
                              }}
                          />
                      </FormControl>
                      <FormControl id='scenery'>
                          <Typography component="legend">Scenery</Typography>
                          <Rating
                              name="scenery"
                              size="large"
                              value={campsiteInfo.scenery}
                              onChange={(event, newValue) => {
                                  setCampsiteInfo({...campsiteInfo, scenery: newValue});
                              }}
                          />
                      </FormControl>
                      <FormControl id='accessibility'>
                          <Typography component="legend">Accessibility</Typography>
                          <Rating
                              name="accessibility"
                              size="large"
                              value={campsiteInfo.accessibility}
                              onChange={(event, newValue) => {
                                  setCampsiteInfo({...campsiteInfo, accessibility: newValue});
                              }}
                          />
                      </FormControl>
                  </Box>
                  <Button onClick={handleCampsiteEdit} variant='outlined'> Submit Campsite</Button>
                  </Stack>
                  <FormGroup>
                    {errors.map((err) => (
                    <Error key={err}>{err}</Error>
                    ))}
                  </FormGroup>
                </>
              ):(
                <CardContent sx={{ p: 0, mb: 1, mt:1 }}>
                  <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                    {campsite.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {formatter.format(Date.parse(campsite.created_at))}
                  </Typography>
                  <Box display='flex'>
                  <List sx={{mt:1}}>
                    <ListItem> Latitude: {campsite.latitude} </ListItem>
                    <ListItem> Longitude: {campsite.longitude} </ListItem>
                    <ListItem> State: {campsiteState.name}</ListItem>
                    <ListItem> Access Type: {campsite.access_type}</ListItem>
                    <ListItem> Land Type: {campsite.land_type}</ListItem>
                  </List>
                  <List>
                    <ListItem> 
                      Safety: 
                      <Rating name="disabled" value={campsite.safety} readOnly />
                    </ListItem>
                    <ListItem> 
                      Quietness: 
                      <Rating name="disabled" value={campsite.quietness} readOnly />
                    </ListItem>
                    <ListItem> 
                      Privacy: 
                      <Rating name="disabled" value={campsite.privacy} readOnly />
                    </ListItem>
                    <ListItem> 
                      Accessibility: 
                      <Rating name="disabled" value={campsite.accessibility} readOnly />
                    </ListItem>
                  </List>
                  </Box>
                </CardContent>
              )}
            </Card>
         </Grid>

  )
}

export default MySiteCard
