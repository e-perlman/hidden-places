import React, { useState } from 'react'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Button from "../styles/Button"
import styled from "styled-components";

const Auth = ({onAuth}) => {
    const [seeLogin,setSeeLogin]=useState(true)
  return (
    <Wrapper>
        {seeLogin? (
            <>
                <Login onAuth={onAuth}></Login>
                <Divider/>
                <Button color="secondary" onClick={()=>setSeeLogin(false)}>Don't have a profile?</Button>
            </>

        ):(
            <>
                <SignUp onAuth={onAuth}></SignUp> 
                <Divider/>
                <Button color="secondary" onClick={()=>setSeeLogin(true)}>Already have a profile?</Button> 
            </>
        )}
      
    </Wrapper>
  )
}
const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

export default Auth
