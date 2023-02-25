import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../styles/Button"
import Logo from '../styles/Logo';

const NavBar = ({user, setUser}) => {

    const handleLogout=() => {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }
  return (
    <Wrapper>
      <NavCart>
        <Button as={Link} to="/my_orders"> My Orders</Button>
        <Button as={Link} to="/my_products"> My Products</Button>
      </NavCart>
      <Logo>Hidden Places</Logo>
      <Nav>
        <Button as={Link} to="/new_product">
          New Product
        </Button>
        <Button color="secondary" onClick={handleLogout}> Logout</Button>
      </Nav>
      
    </Wrapper>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;


const Nav = styled.nav`
  display: flex;
  gap: 4px;
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
