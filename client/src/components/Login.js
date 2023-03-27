import React, { useState, useContext,useEffect } from "react";
import Error from "../styles/Error"
import Button from "../styles/Button"
import { FormGroup, Label, Input, Message } from "../styles/Forms"
import { useHistory } from "react-router";
import { UserContext } from "../context/User";
import { FeedContext } from "../context/Feed";
import { StatesContext } from "../context/States";


const Login = () => {
    const [user, setUser]=useContext(UserContext)
    const [feed,setFeed]=useContext(FeedContext)
    const [states,setStates]=useContext(StatesContext)
    const [loggedIn, setLoggedIn]=useState(false)
    const [userInfo, setUserInfo]=useState({
        username:'',
        password:''
    })
    const [errors,setErrors]=useState([])
    const history = useHistory();

    useEffect(() => {
        if (loggedIn)
          fetch("/feed").then((r) => {
            if (r.ok) {
              r.json().then((feed) => {
                console.log(feed)
                setFeed(feed)});
            }
          });
          fetch("/states").then((r) => {
            if (r.ok) {
              r.json().then((states) => setStates(states));
            }
          });
    }, [loggedIn]);

    const handleSubmit= e =>{
        e.preventDefault()
        setErrors([]);
        fetch("/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: userInfo.username,
              password: userInfo.password,
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((user) => {
                setLoggedIn(true)
                setUser(user)
                history.push("/");
              });
            } else {
              
              r.json().then((err) => {
                setErrors(err.errors)});
            }
          });
    }

    const handleChange= e =>{
        setUserInfo({
            ...userInfo,
            [e.target.id]:e.target.value
        })
    }
  return (
    <form onSubmit={handleSubmit}>
        <h2> Login</h2>
        <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input
                type="text"
                id="username"
                autoComplete="off"
                value={userInfo.username}
                onChange={handleChange}
            />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
                type="password"
                id="password"
                autoComplete="off"
                value={userInfo.password}
                onChange={handleChange}
            />
        </FormGroup>
        <FormGroup>
          <Button type="submit">Login</Button>
        </FormGroup>
        <FormGroup>
            {errors.map((err) => (
            <Error key={err}>{err}</Error>
            ))}
        </FormGroup>
    </form>
  )
}

export default Login
