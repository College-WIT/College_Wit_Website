import React, { Component } from 'react'
import axios from 'axios'

import { Grid, Paper, TextField, Button, Typography, Link } from '@mui/material'

import setCookie from '../../../hooks/setCookie'
import getCookie from '../../../hooks/getCookie'
import removeCookie from '../../../hooks/removeCookie'
import { Routes, Route, useNavigate } from 'react-router-dom';

const buttons = { margin: '8px 0', backgroundColor: "#E26639" }
const text = { padding: 2 }

const paperStyle = { padding: 40, height: '60vh', width: 400, margin: "10px" }

class Signin extends Component {

  constructor(props) {
    super(props)
    //console.log("constructor");
    this.state = {
      email: '',
      password: '',
    }
  }

  changeHandler = (event) => {
    console.log("change handler");
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    const newstate = {
      email: this.state.email,
      password: this.state.password,
    }
    console.log(newstate);
    axios
      .post("https://rcoem-overflow-backend.herokuapp.com/login", newstate)
      .then(response => {
        console.log(response);
        console.log("LOGGED IN")
        removeCookie('login');
        setCookie('login', JSON.stringify(newstate));
        // window.location = this.href;
        // const navigate = useNavigate();
        // navigate(-1);
        //console.log(JSON.parse(getCookie('login')).email);
        //  var username=JSON.parse(getCookie('login')).email;
        //  var newusername="";
        //  for (var i = 0; i<username.length; i++){
        //       if ( username.charAt(i) == '@' ) {
        //       break;
        //     }
        //       var chars=username.charAt(i);
        //          newusername+=chars;
        //  }
        //var datacheck=JSON.parse(getCookie('login'));
        //console.log(newusername);
        //onClick={e => window.location.href = '/Questions'}
      })
      .catch(error => {
        // console.log(error.response)
        //console.log("ERROR")
        alert(error.response.data);
      })
    e.preventDefault()
  }


  render() {
    const { email, password } = this.state
    return (

      <Grid container sx={{
        padding: "20px",
        height: "auto",
        justifyContent: "center",

      }}>
        <Paper style={paperStyle}>
          <Grid align='center'>
            <h2>Sign In</h2>
          </Grid>
          <form onSubmit={this.submitHandler}>
            <TextField style={text} name="email" value={email} fullWidth label='Email' placeholder="Enter your email" onChange={this.changeHandler} />
            <TextField style={text} type="password" name="password" value={password} fullWidth label='Password' placeholder="Enter your password" onChange={this.changeHandler} />
            <Button style={buttons} type='submit' variant='contained' color='primary'>Login</Button>
          </form>
          <Typography >
            <Link href="#" >
              Forgot password?
            </Link>
          </Typography>
        </Paper>
      </Grid>
    )
  }
}

export default Signin