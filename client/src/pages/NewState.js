import React,{useState, useContext} from 'react'
import { StatesContext } from '../context/States';
import { Grid, Stack, FormControl, FormLabel, FormControlLabel, Typography, RadioGroup, Radio, MenuItem, Select, Rating, Paper, Button,TextField,InputAdornment,InputLabel, FormGroup, Box} from '@mui/material'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Error from '../styles/Error'

const darkTheme = createTheme({ palette: { mode: 'dark' } });

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    lineHeight: '60px',
  }));

const NewState = () => {
    const [states, setStates]=useContext(StatesContext)
    const [errors,setErrors]=useState([])
    const [stateInfo, setStateInfo]=useState({
        name:'',
        climate:'',
        known_for:'',
        state_pic: ''
    })

    const handleChange= e =>{
        setStateInfo({
            ...stateInfo,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit= e =>{
        e.preventDefault()
        setErrors([]);
        fetch("/states", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(stateInfo),
          }).then((r) => {
            if (r.ok) {
              r.json().then((newState) => {
                setStates([...states,newState])
                setStateInfo({
                    name:'',
                    climate:'',
                    known_for:'',
                    state_pic: ''
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
                <Item elevation={6} sx={{p:2, width: '100%'}}>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing={3} direction="column">
                            <TextField id='campsite-name'
                                variant="standard"
                                label="State Name"
                                name="name"
                                onChange={handleChange}
                                value={stateInfo.name}
                                required
                            />
                            <TextField id='climate'
                                variant="standard"
                                label="Climate"
                                name="climate"
                                onChange={handleChange}
                                value={stateInfo.climate}
                                required
                            />
                            <TextField id='known_for'
                                variant="standard"
                                label="Known For"
                                name="known_for"
                                onChange={handleChange}
                                value={stateInfo.known_for}
                                required
                            />
                            <TextField id='state_pic'
                                variant="standard"
                                label="Picture"
                                name="state_pic"
                                onChange={handleChange}
                                value={stateInfo.state_pic}
                                // required
                            />
                            <Button type='submit' variant='outlined'> Create State/Territory</Button>
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

export default NewState
