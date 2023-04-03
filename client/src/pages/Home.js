import React, {useContext,useEffect} from 'react'
import { FeedContext } from '../context/Feed'
import { UserContext } from '../context/User'
import {Paper, Typography} from '@mui/material'
import camping_2 from '../images/camping_2.jpeg'
import { borderRadius } from '@mui/system'

const Home = ({user}) => {
  const [feed,setFeed]=useContext(FeedContext)

  const styles = {
    paperContainer: {
        // backgroundImage: `url(${camping_2})`,
        height: "80vh",
        position: 'relative',
        // overflow: 'hidden'
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        // placeItems: 'center',
        // display: 'grid',
    },
    image:{
      objectFit: "cover",
      width: "100%",
      height: "100%",
      opacity: 0.8
    },
    header:{
      color: 'white',
      position: 'absolute',
      fontSize: "80px",
      height: "fit-content",
      margin: 'auto',
      textAlign: 'center',
      top: 0,
      left: 0,
      right:0,
      textShadow: "2px 4px 3px rgba(0,0,0,0.8)"
    },
    body:{
      color: 'white',
      width: '80%',
      position: 'absolute',
      height: "fit-content",
      margin: 'auto',
      top: "200px",
      left: 0,
      right:0,
      background: "rgba(0,0,0,0.9)",
      borderRadius: 4,
      padding:6,
      opacity: 0.8,
      lineHeight: "35px",
      textShadow: "2px 4px 3px rgba(0,0,0,0.8)"
    }
  };

  

  return (
    <Paper elevation={3} style={styles.paperContainer}>
        <img
        style={styles.image}
        src={camping_2}
        alt='background'
        />
        <h1 style={styles.header}> Welcome {user.first_name}!</h1>
        <Typography variant='h6' style={styles.body}>
        In the Pacific Northwest people love to camp, but finding the ideal place to camp is hard. Often people don't want to camp in designated campsites with reservations and  lots of other people and want more a secluded spot. This has lead to the increased popularity in disperse camping, or camping on public land other than in designated campsites. The benefits of disperse camping are no reservations or fees to hold your spot or calling around to campgrounds. The difficult part about disperse camping is finding a good spot in terms of safety and comfort. Here's where Hidden Places comes in, post your camping spots and follow your friends!
        </Typography>
    </Paper>
  )
}

export default Home
