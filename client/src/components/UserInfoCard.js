import React, { useContext } from "react";
import { UserContext } from "../context/User";
import {Card, CardHeader, Avatar, Typography, CardContent} from '@mui/material'

const UserInfoCard = () => {
    const [user, setUser]=useContext(UserContext)
  return (
    <Card xs={2}>
        <CardHeader
        avatar={<Avatar alt={user.first_name} src={user.profile_pic} sx={{ width: 75, height: 75 }}></Avatar>}
        titleTypographyProps={{variant:'h4' }}
        title={`${user.first_name} ${user.last_name}`}
        subheader={
            <>
            @{user.username}
            <br/> 
            Following:   Followers:
            <br/>
            Sites:
            </>
            }>   
        </CardHeader>
        <CardContent>
        <Typography component='h2'> {user.bio}</Typography>
        </CardContent>

    </Card>
  )
}

export default UserInfoCard
