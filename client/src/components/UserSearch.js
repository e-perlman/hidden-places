import React from 'react'
import {Paper, IconButton, InputBase} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const UserSearch = () => {
  return (
    <Wrap>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <AccountCircleIcon/>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search All Users"
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </Wrap>
  )
}

export default UserSearch

const Wrap=styled.div`
padding: 20px
`
