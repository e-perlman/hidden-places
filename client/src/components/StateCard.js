import React from 'react'
import {Card, CardMedia, Button, Typography, CardContent, Box} from '@mui/material'
import styled from "styled-components";

const StateCard = ({state}) => {

  return (
    <Wrap>
        <Card sx={{ display: 'flex'}}>
            <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={state.state_pic}
            alt={state.name}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {state.name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Climate: {state.climate}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        Known For: {state.known_for}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    </Wrap>
  )
}

export default StateCard

const Wrap=styled.div`
padding: 10px;
`
