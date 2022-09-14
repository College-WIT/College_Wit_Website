import React, { Component } from 'react'
import axios from 'axios'
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import { useLocation, useParams } from "react-router-dom";
import { fontSize } from '@mui/system';
import { GoArrowRight } from 'react-icons/go'
import {RiQuestionnaireFill} from 'react-icons/ri'
import './Answers.css'
import getCookie from '../../../hooks/getCookie';
// ------------------------------------------------------------------------------------------

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

var cookie=getCookie('login');
var red_link='/Post-a-question';
var red_link2='/Post-an-answer';
if(cookie==null){
    red_link='/login';
    red_link2='/login';
    console.log(red_link);
}

const quickAccBar = ["Home", "Questions", "Answered", "Unanswered", "Trending"];
const queTags = ["Tags", "Tags", "Tags", "Tags", "Tags"];
const dummyQue = [
    {
        que: "Create a class TimeZone which will add functionality to convert the time from one time zone to another time zone.Note: Class Time zone  uses the TIme Object and uses the Add and Subtract methods of Time Class.",
        // ans: ["Answers1","Answer2"],
        upvotes: 10,
        ans: 20,
        views: 300,
        answers: []
    }
]

const Ans = () => {
    const { que } = useParams();
    //console.log(que)
    var qq = que + "?";
    var questionD = "";
    var get = 0;
    const [quest, setquest] = useState([]);
    const [author, setauthor] = useState([]);
    const [views, setviews] = useState([]);
    const [upvotes, setupvotes] = useState([]);
    const [answers, setanswers] = useState([]);
    const arr = [];

    const handleQuest = async (e) => {
        const obj = {
            question: qq
        };

        const question = await axios.post(
            `https://rcoem-overflow-backend.herokuapp.com/view_specific_question`,
            obj
        );
        questionD = question.data.question;
        setquest(question.data.question);
        setauthor(question.data.author);
        setupvotes(question.data.upvotes);
        setviews(question.data.views);
        const n = question.data.answers.length;
        for (var i = 0; i < n; i++) {
            arr.push(question.data.answers[i].answer);
        }
        //setanswers(question.data.answers[0].answer);
        setanswers(arr);
        //console.log(question.data);
        //console.log(questionD);
        //console.log(answers);
        get = 1;
    };

    handleQuest();

// -------------------------------------------------------------------------------------------------------------

    return (
        <Box sx={{ flexGrow: 1, backgroundColor: "#d9d9d9", padding: 2 }}>

           <Grid container spacing={2}>

          {/* --------------------- Left Quick Access Bar ------------------------------------ */}
                <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>
                    <Item sx={{ border: 1 }}>
                        Quick Access
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
                                    borderRadius: 1,
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
                                }} ><Link style={{ textDecoration: "None", color: "white" }} to={`/${content}`}>
                                        {/* {quickAccBar} */}
                                        {content}
                                    </Link>
                                </Button>
                            </Grid>
                        ))}
                    </Item>
                </Grid>
{/* -------------------------------------------------------------------------------------------------------------- */}



{/* -----------------------------------Middle Section (Questions) ------------------------------------------------ */}

                <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                    <Grid item >
                        <Item >
                            {dummyQue.map((content) => (
                                <Box component="span" sx={{ p: 2 }} >
                                    <Typography variant="h6" sx={{ color: "black", textAlign: "center", padding: 2 }}>
                                      <RiQuestionnaireFill></RiQuestionnaireFill>  {quest}
                                    </Typography>
                                    <Button sx={{
                                        backgroundColor: "#20D867",
                                        width: 200,
                                        height: 60,
                                        border: 1,
                                        borderRadius: 5,
                                        fontSize: 15,
                                        "&:hover": {
                                            backgroundColor: "#E26639",
                                            opacity: 10,
                                        }
                                    }} variant="contained" disableElevation>
                                        <Link style={{ textDecoration: "None", color: "white" }} to={red_link2}>
                                            Post an Answer
                                        </Link>
                                    </Button>
                                    <Stack direction="row" spacing={2} >

                                        <Stack direction="row" spacing={2} sx={{
                                            paddingLeft: 32,
                                            '@media (max-width:1000px)': {
                                                paddingLeft: 20
                                            },
                                            '@media (max-width:850px)': {
                                                paddingLeft: 1
                                            },
                                        }}>
                                            <Item elevation={0}>
                                                <Typography variant="subtitle1" color='black'>{views}</Typography>
                                                <Typography variant="subtitle2" color="black">Views</Typography>
                                            </Item>
                                            <Item elevation={0}>
                                                <Typography variant="subtitle1" color='black'>{upvotes}</Typography>
                                                <Typography variant="subtitle2" color="black">Upvotes</Typography>
                                            </Item>
                                            <Item elevation={0}>
                                                <Typography variant="subtitle1" color='black'>{answers.length}</Typography>
                                                <Typography variant="subtitle2" color="black">Answers</Typography>
                                            </Item>
                                        </Stack>
                                    </Stack>

                                    {answers.map(answer => {
                                        return (
                                            <Typography variant="subtitle1" color='black' sx={{
                                                padding: 2,
                                                textAlign: 'left',
                                                fontSize: 15
                                            }}>
                                                <GoArrowRight /> {answer}</Typography>
                                        )
                                    })}

                                    {/* <h5>{answers[0]}</h5> */}
                                    {/* <h1>{answers[1]}</h1>
                                    <h1>{answers[2]}</h1> */}
                                </Box>

                            ))}
                        </Item>
                    </Grid>


                </Grid>
                <Grid item xl={2} lg={2} md={2} sm={2} xs={12}>

                    <Item sx={{ border: 1 }}>Tags
                        {queTags.map((content) => (
                            <Grid sx={{ padding: 1 }}>
                                <Button sx={{
                                    backgroundColor: "#E26639",
                                    width: 100,
                                    height: 25,
                                    padding: 2,
                                    borderRadius: 1,
                                    "&:hover": {
                                        backgroundColor: "#637081",
                                        opacity: 10,
                                    }
                                }}
                                    variant="contained" disableElevation>
                                    {content}
                                </Button>
                            </Grid>
                        ))}

                        <Grid sx={{ paddingTop: 10 }}>
                            <Button sx={{
                                backgroundColor: "#20D867",
                                width: 150,
                                height: 60,
                                borderRadius: 5,
                                fontSize: 15,
                                "&:hover": {
                                    backgroundColor: "#637081",
                                    opacity: 10,
                                }
                            }} variant="contained" disableElevation>
                                <Link style={{ textDecoration: "None", color: "white" }} to={`/Post-a-question`}>
                                    Post a question
                                </Link>
                            </Button>
                        </Grid>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Ans;