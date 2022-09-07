import React, { Component } from 'react'
import axios from 'axios'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@mui/material'
import Snackbar from '@mui/material/Snackbar';
const buttons = { margin: '8px 0', backgroundColor: "#E26639" }
const text = { padding: 2 }
const paperStyle = { padding: 20, width: 600, margin: "0 auto" }
const headerStyle = { margin: 0 }

class Signup extends Component {

    constructor(props) {
        super(props)
        //console.log("constructor");
        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
            confirm: '',
        }
    }

    changeHandler = (event) => {
        console.log("change handler");
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (e) => {
        if (this.state.confirm == this.state.password) {
            e.preventDefault()
            const newstate = {
                name: this.state.name,
                user_name: this.state.username,
                email: this.state.email,
                password: this.state.password,
            }
            console.log(newstate);
            axios
                .post("https://rcoem-overflow-backend.herokuapp.com/register", newstate)
                .then(response => {
                    console.log(response)

                })
                .catch(error => {
                    console.log(error.response)
                })

        }
    }


    render() {

        const { name, username, email, password, confirm } = this.state
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
                    <form onSubmit={this.submitHandler}>
                        <TextField style={text} name="name" value={name} fullWidth label='Name' placeholder="Enter your name" onChange={this.changeHandler} />
                        <TextField style={text} name="username" value={username} fullWidth label='Username' placeholder="Enter your Username" onChange={this.changeHandler} />
                        <TextField style={text} name="email" value={email} fullWidth label='Email' placeholder="Enter your email" onChange={this.changeHandler} />
                        <TextField style={text} name="password" value={password} fullWidth label='Password' placeholder="Enter your password" onChange={this.changeHandler} />
                        <TextField style={text} name="confirm" value={confirm} fullWidth label='Confirm Password' placeholder="Confirm your password" onChange={this.changeHandler} />

                        <Button style={buttons} type='submit' variant='contained' color='primary' onClick={e => window.location.href = '/login'}>Sign up</Button>
                        {/* <Snackbar
                            open={open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                            message="Note archived"
                            action={action}
                        /> */}
                    </form>
                </Paper>
            </Grid>
        )
    }

}

export default Signup