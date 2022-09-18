import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link, useParams } from 'react-router-dom';
import { Component } from 'react'
import axios from 'axios'
import { TextField, } from '@mui/material'
import getCookie from '../../../hooks/getCookie';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const buttons = { height: 40, margin: '5px', backgroundColor: "#E26639", fontSize: 15 }
const quickAccBar = ["Home", "Questions", "Trending"];
const queTags = ["Tags", "Tags", "Tags", "Tags"];
const paperStyle = { padding: 40 }
var flag = false



class postques extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: JSON.parse(getCookie('login')).email,
            password: JSON.parse(getCookie('login')).password,
            question: 'How to be a full stack developer?',
            answer: '',
        }
    }

    getQues = () => {
        const { quest } = useParams();
        console.log(quest);
        return quest;
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        var username = this.state.username;
        var newusername = "";
        for (var i = 0; i < username.length; i++) {
            if (username.charAt(i) === '@') {
                break;
            }
            var chars = username.charAt(i);
            newusername += chars;
        }
        var newstate = {
            username: newusername,
            password: this.state.password,
            question: this.state.question,
            answer: this.state.answer
        }
        console.log(newstate);
        axios
            .post("https://rcoem-overflow-backend.herokuapp.com/add_answer", newstate)
            .then(response => {
                flag = true
                console.log("Answer added Successfully")
            })
            .catch(error => {
                flag = false
                console.log(error.response)
            })
    }

    render(props) {
        const { answer } = this.state;
        //console.log(this.props.match.params.que);
        return (
            <Box sx={{ flexGrow: 1, backgroundColor: "#d9d9d9", padding: 2 }}>

                {/* ----------------------------QUICK ACCESS------------------------------ */}
                <Grid container spacing={2}>
                    <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
                        <Item>Quick Access
                            {quickAccBar.map((content) => (
                                <Grid sx={{
                                    padding: 2,
                                    '@media (max-width:780px)': {
                                        padding: '0 ,0, 0, 0'
                                    }
                                }}>
                                    <Button sx={{
                                        fontSize: 15,
                                        backgroundColor: "#E26639",
                                        width: 130,
                                        height: 35,
                                        borderRadius: 5,
                                        "&:hover": {
                                            backgroundColor: "#41D450",
                                            opacity: 10,
                                        },
                                        '@media (max-width:1000px)': {
                                            fontSize: 12,
                                            width: 100,
                                            height: 20,
                                        },
                                        '@media (max-width:900px)': {
                                            fontSize: 10,
                                            width: 90,
                                            height: 20,
                                        },
                                        '@media (max-width:800px)': {
                                            fontSize: 8,
                                            width: 70,
                                            height: 20,
                                        }
                                    }}
                                        variant="contained" disableElevation>

                                        <Link style={{ textDecoration: "None", color: "white" }} to={`/${content}`}>
                                            {content}
                                        </Link>
                                    </Button>
                                </Grid>
                            ))}
                        </Item>
                    </Grid>


                    {/* ------------------------------------Answers------------------------------------- */}


                    <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
                        <Grid >
                            <Paper style={paperStyle}>
                                <Grid align='center'>
                                    <h2>Post an Answer</h2>
                                </Grid >

                                <Grid align='center'>
                                    <h2>{this.getQues}</h2>
                                </Grid >

                                <form onSubmit={this.submitHandler}>
                                    {/* <TextField multiline rows={6} label='Question' value={question} placeholder='Enter Question' type='text' onChange={ this.changeHandler } fullWidth required /> */}
                                    <TextField multiline rows={6} label='Answer' type="text" name="answer" value={answer} placeholder="Answer" onChange={this.changeHandler} fullWidth required />
                                    {/* <Grid alig sx={{ padding: 1, alignContent: 'center' }}> <input type="text" name="username" value={username} placeholder="Username" onChange={ this.changeHandler } />
                                        <input type="text" name="password" value={password} placeholder="Password" onChange={ this.changeHandler } /></Grid> */}
                                    <Grid> <Button style={buttons} type='submit' variant='contained' color='primary' >Post</Button>
                                        <Button style={buttons} type='submit' variant='contained' color='primary'>Post Anonymously</Button></Grid>
                                </form>
                                {/* {flag ? <h2>Question added Successfully</h2> : <h2></h2>} */}
                            </Paper>
                        </Grid>
                    </Grid>

                    {/* --------------------------------TAGS SECTION--------------------------------------------*/}

                    <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
                        <Item> Tags {queTags.map((content) => (
                            <Grid sx={{ padding: 1 }}>
                                <Button sx={{
                                    backgroundColor: "#E26639",
                                    width: 100,
                                    height: 25,
                                    borderRadius: 5,
                                    "&:hover": {
                                        backgroundColor: "#41D450",
                                        opacity: 10
                                    }
                                }}
                                    variant="contained" disableElevation>
                                    {content}
                                </Button>
                            </Grid>
                        ))}


                        </Item>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default postques;