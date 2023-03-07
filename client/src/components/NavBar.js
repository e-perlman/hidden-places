import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../styles/Button"
import Logo from '../styles/Logo';
import { UserContext } from "../context/User";
import {Tab, Tabs} from "@mui/material"

const NavBar = () => {
  const [user, setUser]=useContext(UserContext)

  const [val, setVal] = useState('one');
  
  const handleTab = (e, newVal) => {
      setVal(newVal);
  };

  const handleLogout=() => {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
  }

  return (
    <>
    <Wrapper>
      <Logo>Hidden Places</Logo>
      <Nav>
        <Button color="primary"> Add New Site</Button>
        <Button color="secondary" onClick={handleLogout}> Logout</Button>
      </Nav>
    </Wrapper>
      <Tabs 
        value={val}
        onChange={handleTab}
        textColor="inherit"
        variant="fullWidth"
        centered
        TabIndicatorProps={{
          style: {
            backgroundColor: "#006600"
          }}}
      >
        <Tab value ='one' component={Link} label='Home' to="/"/>
        <Tab value='two' component={Link} label='My Profile' to="/my_profile"/>
        <Tab value='three' component={Link} label='My Sites' to="/my_sites"/>
        <Tab value='four' component={Link} label='Sites Feed' to="/feed"/>
        <Tab value='five' component={Link} label='Following' to="/following"/>
      </Tabs>
    </>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;


const Nav = styled.nav`
  display: flex;
  gap: 20px;
  position: absolute;
  right: 8px;
`;

const NavCart = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  left: 8px;
`;

export default NavBar
