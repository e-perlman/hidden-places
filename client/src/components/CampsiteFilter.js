import React, {useContext, useState} from 'react'
import { StatesContext } from '../context/States';
import { Button,Box, Typography, Rating,TextField,InputAdornment,FormControl,InputLabel,Select,MenuItem, Paper } from '@mui/material'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const darkTheme = createTheme({ palette: { mode: 'dark' } });

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  lineHeight: '60px',
}));

const CampsiteFilter = ({setFiltered,campsites}) => {
  const [states, setStates]=useContext(StatesContext)
  const [campsiteFilter,setCampsiteFilter]=useState({
    search: '',
    access_type: 'All',
    land_type: 'All',
    state_id: 'All',
    safety: 1,
    quietness: 1,
    privacy: 1,
    scenery:1,
    accessibility:1
  })
  const handleChange= e =>{
    setCampsiteFilter({
        ...campsiteFilter,
        [e.target.name]:e.target.value
    })
  }
  
  const handleFilter=()=>{ 
    const filtered = campsites
      .filter(campsite=>campsite.name.toLowerCase().includes(campsiteFilter.search.toLowerCase()))
      .filter(campsite=>{
        if(campsiteFilter.access_type==='All') return true;
        return campsite.access_type===campsiteFilter.access_type
      })
      .filter(campsite=>{
        if(campsiteFilter.land_type==='All') return true
        return campsite.land_type===campsiteFilter.land_type
      })
      .filter(campsite=>{
        if(campsiteFilter.state_id==='All') return true
        return campsite.state_id===campsiteFilter.state_id
      })
    setFiltered(filtered)
  }

  const handleClearFilter =() =>{
    setCampsiteFilter({
      search: '',
      access_type: 'All',
      land_type: 'All',
      state_id: 'All',
      safety: 1,
      quietness: 1,
      privacy: 1,
      scenery:1,
      accessibility:1
      }
    )
    setFiltered(campsites)
  } 

  return (
    <ThemeProvider theme={darkTheme}>
      <Item elevation={6} sx={{p:0.5, textAlign:'center'}}>
        <FormControl sx={{p:2}}>
          <TextField 
            variant='outlined'
            label='Search Name'
            name="search"  
            value={campsiteFilter.search} 
            onChange={handleChange} 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonSearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        <FormControl variant="outlined" sx={{ m: 2, minWidth: 120 }} id='state'>
              <InputLabel>State</InputLabel>
              <Select
              label="State"
              name='state_id'
              value={campsiteFilter.state_id}
              onChange={handleChange}
              > 
                  <MenuItem value='All'><em>All</em></MenuItem>
                  {states.map((state) => (
                      <MenuItem key={state.id} value={state.id}>
                      {state.name}
                      </MenuItem>
                  ))}
              </Select>
        </FormControl>
        <FormControl variant="outlined" sx={{ m: 2, minWidth: 120 }} id='access-type'>
              <InputLabel>Access-Type</InputLabel>
              <Select
              label="Acess-Type"
              name='access_type'
              value={campsiteFilter.access_type}
              onChange={handleChange}
              > 
                <MenuItem value='All'><em>All</em></MenuItem>
                <MenuItem value='Drive_In'>Drive-In</MenuItem>
                <MenuItem value='Hike_In'>Hike-In</MenuItem>
                <MenuItem value='Boat_In'>Boat-In</MenuItem>
              </Select>
        </FormControl>
        <FormControl variant="outlined" sx={{ m: 2, minWidth: 120 }} id='land-type'>
              <InputLabel>Land-Type</InputLabel>
              <Select
              label="Land-Type"
              name='land_type'
              value={campsiteFilter.land_type}
              onChange={handleChange}
              > 
                <MenuItem value='All'><em>All</em></MenuItem>
                <MenuItem value='Private'>Private</MenuItem>
                <MenuItem value='Public'>Public</MenuItem>
                <MenuItem value='BLM'>BLM</MenuItem>
              </Select>
        </FormControl>
        <Box>
              <FormControl id='safety'>
                  <Typography component="legend">Safety</Typography>
                  <Rating
                      name="safety"
                      size="large"
                      value={campsiteFilter.safety}
                      onChange={(event, newValue) => {
                          setCampsiteFilter({...campsiteFilter, safety: newValue});
                      }}
                  />
              </FormControl>
              <FormControl>
                  <Typography component="legend">Quietness</Typography>
                  <Rating
                      name="quietness"
                      size="large"
                      value={campsiteFilter.quietness}
                      onChange={(event, newValue) => {
                          setCampsiteFilter({...campsiteFilter, quietness: newValue});
                      }}
                  />
              </FormControl>
              <FormControl>
                  <Typography component="legend">Privacy</Typography>
                  <Rating
                      name="privacy"
                      size="large"
                      value={campsiteFilter.privacy}
                      onChange={(event, newValue) => {
                          setCampsiteFilter({...campsiteFilter, privacy: newValue});
                      }}
                  />
              </FormControl>
              <FormControl>
                  <Typography component="legend">Scenery</Typography>
                  <Rating
                      name="scenery"
                      size="large"
                      value={campsiteFilter.scenery}
                      onChange={(event, newValue) => {
                          setCampsiteFilter({...campsiteFilter, scenery: newValue});
                      }}
                  />
              </FormControl>
              <FormControl>
                  <Typography component="legend">Accessibility</Typography>
                  <Rating
                      name="accessibility"
                      size="large"
                      value={campsiteFilter.accessibility}
                      onChange={(event, newValue) => {
                          setCampsiteFilter({...campsiteFilter, accessibility: newValue});
                      }}
                  />
              </FormControl>
        </Box>
        <Button onClick={handleFilter}>Search</Button>
        <Button onClick={handleClearFilter}>Clear Filter</Button>
      </Item>
    </ThemeProvider>
  )
}

export default CampsiteFilter
