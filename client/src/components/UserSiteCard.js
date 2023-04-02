import React, {useState} from 'react'
import {Grid, Card, Box, Avatar, Stack, FormControl, FormLabel, FormControlLabel, Button, ButtonGroup,InputLabel,CardContent, Typography, Divider, List, ListItem, Rating, TextField, RadioGroup, Radio, MenuItem, Select, InputAdornment, FormGroup} from '@mui/material'


const UserSiteCard = ({campsite}) => {
    const formatter = new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric"
    });
    
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
                    src={campsite.user.profile_pic}
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
                      {campsite.user.first_name} {campsite.user.last_name}
                    </Typography>
                    <Typography
                      underline="always"
                      variant="body1"
                      sx={{ fontWeight: 500 }}
                    >
                      @{campsite.user.username}
                    </Typography>
                  </Box>
                </Box>
              </Box>
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
                    <ListItem> State: {campsite.state.name}</ListItem>
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
            </Card>
         </Grid>
  )
}

export default UserSiteCard
