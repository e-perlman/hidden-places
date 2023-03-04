import React, { useContext } from "react";
import { UserContext } from "../context/User";
import Grid from "@mui/material"

import styled from 'styled-components'

const MyProfile = () => {
    const [user, setUser]=useContext(UserContext)
  return (
    <div>
        <Grid></Grid>
    </div>
    // <Grid container spacing={2}>
    //     <Grid item xs={8}>

    //     </Grid>
    //     <Grid item xs={6}></Grid>
    //     <Grid item xs={6}></Grid>
    //     <Main>
    //         <UserInfoCard>
    //             {/* <h1>{user.first_name} {user.last_name}</h1>
    //             <p>{user.bio}</p>
    //             <img src={user.profile_pic}></img> */}
    //         </UserInfoCard>
    //     </Main>
    //     <ContentBox>
    //     </ContentBox>
      
    // </Grid>
  )
}

export default MyProfile



const UserInfoCard = styled.article`
    border-radius: 6px;
    box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
    padding: 16px;
    height: 100%;
    width : 75%;
    margin: auto;
`;

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 0.5fr 1fr;
  grid-template-areas:
    "main main"
    "content content ";
  text-align: center;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      "main"
      "content";
  }
  color: white;
`;
const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const Main = styled.main`
  color: white;
  grid-area: main;
  padding: 0.25rem;
`;

const List = styled.div`
  background: #a6b8b9;
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;
