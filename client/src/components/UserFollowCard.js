import React, { useContext } from "react";
import { UserContext } from "../context/User";
import {Card, CardMedia, CardHeader, Avatar, Typography, CardContent, Box, IconButton} from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

const UserFollowCard = ({user}) => {
    // const [user, setUser]=useContext(UserContext)
  return (
    <Card sx={{ display: 'flex' }}>
        <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={user.profile_pic}
        alt={user.first_name}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
                {user.first_name} {user.last_name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                @{user.username}
            </Typography>
            </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            <PersonAddIcon/>
          </IconButton>
          <IconButton aria-label="play/pause">
            <PersonRemoveIcon/>
          </IconButton>
        </Box>
        </Box>
    </Card>
  )
}

export default UserFollowCard
