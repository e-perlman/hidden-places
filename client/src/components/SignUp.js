import React, { useState } from "react";
import Error from "../styles/Error"
import Button from "../styles/Button"
import { FormGroup, Input, Label, Textarea } from "../styles/Forms";
import { useHistory } from "react-router";

const SignUp = ({onAuth}) => {
    const [userInfo, setUserInfo]=useState({
        username:'',
        firstName:'',
        lastName:'',
        password:'',
        passwordConfirmation:'',
        bio:'',
        profilePic:''
    })
    const [errors,setErrors]=useState([])
    const history = useHistory();

    const handleSubmit= e =>{
        e.preventDefault()
        setErrors([]);
        fetch("/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: userInfo.username,
              first_name:userInfo.firstName,
              last_name: userInfo.lastName,
              password: userInfo.password,
              password_confirmation: userInfo.passwordConfirmation,
              profile_pic: userInfo.profilePic,
              bio: userInfo.bio,
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((user) => onAuth(user));
              history.push("/");
            } else {
              r.json().then((err) => setErrors(err.errors));
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
        <h2> SignUp</h2>
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
            <Label htmlFor="firstName">First Name</Label>
            <Input
                type="text"
                id="firstName"
                autoComplete="off"
                value={userInfo.firstName}
                onChange={handleChange}
            />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="lastName">LastName</Label>
            <Input
                type="text"
                id="lastName"
                autoComplete="off"
                value={userInfo.lastName}
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
            <Label htmlFor="password">Password Confirmation</Label>
            <Input
                type="password"
                id="passwordConfirmation"
                autoComplete="off"
                value={userInfo.passwordConfirmation}
                onChange={handleChange}
            />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="profilePic">Profile Picture Link</Label>
            <Input
                type="text"
                id="profilePic"
                value={userInfo.profilePic}
                onChange={handleChange}
            />
        </FormGroup>
        <FormGroup>
            <Label htmlFor="bio">Bio</Label>
            <Textarea
                rows="3"
                id="bio"
                value={userInfo.bio}
                onChange={handleChange}
            />
        </FormGroup>
        <Button type="submit">Sign Up</Button>
        <FormGroup>
            {errors.map((err) => (
            <Error key={err}>{err}</Error>
            ))}
        </FormGroup>

    </form>
  )
}

export default SignUp
