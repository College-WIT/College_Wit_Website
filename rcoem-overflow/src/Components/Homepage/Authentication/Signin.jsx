import React from 'react'
import { Grid, Paper, TextField, Button, Typography, Link } from '@mui/material'

const buttons = { margin: '8px 0', backgroundColor: "#E26639"}
const Signin = () => {

  const paperStyle = { padding: 40, height: '70vh', width: 400, margin: "0 auto" }

  return (
    
    <Grid sx={{
      padding: 10,
      height: 600
    }}>
      <Paper style={paperStyle}>
        <Grid align='center'>
          <h2>Sign In</h2>
        </Grid>
        <TextField label='Username' placeholder='Enter username' fullWidth required />
        <TextField label='Password' placeholder='Enter password' type='password' fullWidth required />
        <Button style={buttons} type='submit' variant='contained' color='primary'>Sign up</Button>
        <Typography >
          <Link href="#" >
            Forgot password ?
          </Link>
        </Typography>
        <Typography > Do you have an account ?
          <Link style={{ textDecoration: "None" }} to={`/signup`} >
            Sign Up
          </Link>
        
        </Typography>
      </Paper>
    </Grid>
  )
}

export default Signin