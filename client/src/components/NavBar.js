import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import Button from "../styles/Button"
import Logo from '../styles/Logo';
import { UserContext } from "../context/User";
import {Tab, Tabs} from "@mui/material"

const NavBar = () => {
  const [user, setUser]=useContext(UserContext)
  
  const location=useLocation()

  const [val, setVal] = useState(false);
  
  const paths=[ '/','/my_profile', '/my_sites','/my_feed','/following']



  useEffect(() => {
        if (paths.includes(location.pathname)){
          setVal(location.pathname)
        }
        else setVal(false)
  }, []);
  
  const handleTab = (e, newVal) => {
      setVal(newVal);
  };

  const handleLogout=() => {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setVal(false);
          setUser(null)
        }
      });
  }

  return (
    <>
    <Wrapper>
    <NavLeft>
        <Button onClick={()=>setVal(false)} as={Link} to="/new_state"> Add New State or Territory</Button>
      </NavLeft>
      <Logo>Hidden Places</Logo>
      <Nav>
        <Button onClick={()=>setVal(false)} color="primary" as={Link} to="/new_site"> Add New Campsite</Button>
        <Button color="secondary" onClick={handleLogout} as={Link} to="/"> Logout</Button>
      </Nav>
    </Wrapper>
    <TabWrap>
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
        <Tab value ='/' component={Link} label='Home' to="/"/>
        <Tab value='/my_profile' component={Link} label='My Profile' to="/my_profile"/>
        <Tab value='/my_sites' component={Link} label='My Sites' to="/my_sites"/>
        <Tab value='/my_feed' component={Link} label='Sites Feed' to="/my_feed"/>
        <Tab value='/following' component={Link} label='Following' to="/following"/>
      </Tabs>
      </TabWrap>
    </>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const NavLeft = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  left: 8px;
`;


const Nav = styled.nav`
  display: flex;
  gap: 20px;
  position: absolute;
  right: 8px;
`;

const TabWrap = styled.div`
  padding: 20px;
`;

export default NavBar
