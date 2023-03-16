import React,{useState, useEffect} from 'react'
import { Grid, Stack, FormControl, FormLabel, FormControlLabel, Typography, RadioGroup, Radio, MenuItem, Select, Rating, Paper, Button,TextField,InputAdornment,InputLabel, FormGroup, Box} from '@mui/material'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Error from '../styles/Error'


const darkTheme = createTheme({ palette: { mode: 'dark' } });

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    lineHeight: '60px',
  }));

const NewCampsite = () => {
    const [states, setStates]=useState([])
    const [errors,setErrors]=useState([])
    const [campsiteInfo, setCampsiteInfo]=useState({
        name:'',
        latitude:'',
        longitude:'',
        state_id: '',
        access_type:'None',
        land_type: 'None',
        safety: 1,
        quietness: 1,
        privacy: 1,
        scenery:1,
        accessibility:1
    })

    const handleChange= e =>{
        setCampsiteInfo({
            ...campsiteInfo,
            [e.target.name]:e.target.value
        })
    }
    useEffect(() => {
        fetch("/states").then((r) =>{
          if (r.ok) {
            r.json().then((states)=>setStates(states))
          }
        })
    }, []);

    const handleSubmit= e =>{
        e.preventDefault()
        setErrors([]);
        fetch("/campsites", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(campsiteInfo),
          }).then((r) => {
            if (r.ok) {
              r.json().then((campsite) => {
                console.log(campsite)
                setCampsiteInfo({
                    name:'',
                    latitude:'',
                    longitude:'',
                    state_id: '',
                    access_type:'None',
                    land_type: 'None',
                    safety: 1,
                    quietness: 1,
                    privacy: 1,
                    scenery:1,
                    accessibility:1
                })
              });
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          });
    }


  return (
      <Grid container sx={{justifyContent: 'center'}}>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
            <ThemeProvider theme={darkTheme}>
                <Item elevation={6} sx={{p:2}}>
                    <form onSubmit={handleSubmit}>
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
                            <FormControl>
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
                            <FormControl>
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
                            <Box>
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
                                <FormControl>
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
                                <FormControl>
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
                                <FormControl>
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
                                <FormControl>
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
                            <Button type='submit' variant='outlined'> Create Campsite</Button>
                        </Stack>
                        <FormGroup>
                            {errors.map((err) => (
                            <Error key={err}>{err}</Error>
                            ))}
                        </FormGroup>                        
                    </form>
                </Item>
            </ThemeProvider>
        </Grid>
    </Grid>
  )
}

export default NewCampsite

