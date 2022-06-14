import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material'

const buttons = { margin: '8px 0', backgroundColor: "#E26639"}
const text={ padding: 2}
const Signup = () => {
    const paperStyle = { padding: 20, width: 600, margin: "0 auto"}
    const headerStyle = { margin: 0 }

    return (
        <Grid sx={{
          padding: 5,
          height: 800
        }}
        >
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField style={text} fullWidth label='Name' placeholder="Enter your name" />
                    <TextField style={text} fullWidth label='Email' placeholder="Enter your email" />
                    <TextField  style={text} fullWidth label='Phone Number' placeholder="Enter your phone number" />
                    <TextField style={text} fullWidth label='Password' placeholder="Enter your password"/>
                    <TextField style={text} fullWidth label='Confirm Password' placeholder="Confirm your password"/>
            
                    <Button style={buttons} type='submit' variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;