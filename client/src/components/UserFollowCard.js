import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/User";
import {Card, CardMedia, Button, Typography, CardContent, Box} from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import styled from "styled-components";


const UserFollowCard = ({user}) => {
    const [currentUser, setCurrentUser]=useContext(UserContext)

    const [isFollowing, setIsFollowing] = useState(false)

    
    useEffect(() => {
        if (currentUser.followees.find(followee => followee.id === user.id)) {
            setIsFollowing(true)
          }
        else {
            setIsFollowing(false)
        }
    }, []);

    const handleFollow = (e)=>{
        isFollowing ? (
            fetch(`/relationships/${user.id}`, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                }
              })
                .then((r) => {
                  setIsFollowing(false)
                  onUnfollow(user)
                }
            )
        ):(
            fetch("/relationships", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({followee_id: user.id})
              })
                .then((r) => {
                  if (r.ok) {
                    r.json().then((data) => {
                      setIsFollowing(true)
                      onFollow(user)
                    })
                  } else {
                    r.json().then((err) => console.log(err.errors))
                  }
            })
        )
    }

    const onFollow = (user) => {
        const notFollowing=currentUser.not_following.filter(followee=>followee.id!==user.id)
        setCurrentUser({...currentUser, followees:[...currentUser.followees,user],not_following:notFollowing})
    }

    const onUnfollow= (user) => {
        const updatedFollowees=currentUser.followees.filter(followee=>followee.id!==user.id)
        setCurrentUser({...currentUser, followees:updatedFollowees, not_following:[...currentUser.not_following,user]})
    }

  return (
    <Wrap>
        <Card sx={{ display: 'flex'}}>
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
                    <Button color='success' size='small'>{user.first_name}'s Sites</Button>
                </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <Button variant="contained" onClick={handleFollow}> {isFollowing ? "Unfollow" : "Follow"}</Button>
                </Box>
            </Box>
        </Card>
    </Wrap>
  )
}

export default UserFollowCard

const Wrap=styled.div`
padding: 10px;
`