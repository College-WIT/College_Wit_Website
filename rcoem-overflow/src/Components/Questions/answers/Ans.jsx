import React from 'react'
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
import { useParams } from "react-router-dom";
import { GoArrowRight } from 'react-icons/go'
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import './Answers.css'
import getCookie from '../../../hooks/getCookie';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Avatar } from '@mui/material';
import { CardHeader } from '@mui/material';
import Divider from '@mui/material/Divider';
import { Component } from 'react'
import Lottie from 'react-lottie';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

var cookie = getCookie('login');
var red_link = '/Post-a-question';
var red_link2 = '/Post-an-answer';
if (cookie == null) {
    red_link = '/login';
    red_link2 = '/login';
    console.log(red_link);
}

const quickAccBar = ["Home", "Answered", "Unanswered", "Trending"];
const queTags = ["Coding", "Endsem", "React", "NodeJS", "Java"];
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


class Ans extends Component {
    constructor(props) {
        super(props)

        this.state = {
            quest: "",
            author: "",
            views: 0,
            upvotes: 0,
            answers: [],
            errorMsg: ""
        }
    }
    // const { que } = useParams();
    // var qq = que + "?";
    // var questionD = "";
    // var get = 0;
    // const [quest, setquest] = useState([]);
    // const [author, setauthor] = useState([]);
    // const [views, setviews] = useState([]);
    // const [upvotes, setupvotes] = useState([]);
    // const [answers, setanswers] = useState([]);
    // const arr = [];

    componentDidMount() {
        const obj = {
            question: this.props.qq
        };
            /// USING LOCAL STORAGE FOR STORING RECENT QUESTION

        localStorage.removeItem('recentQuest');
        const strJSON= this.props.qq;
        localStorage.setItem('recentQuest', strJSON);

        ///// USING LAST PAGE FOR REDIRECTION
        var rp=window.location.href;
        console.log(rp);
        localStorage.removeItem('RecentPage');
        localStorage.setItem('RecentPage', rp);
        //console.log(window.location.href);

        axios.post("https://rcoem-overflow-backend.herokuapp.com/view_specific_question", obj)
            .then(response => {
                console.log("POST COMPLETE");
                const n = response.data.answers.length;
                var arr= response.data.answers;
                // var arr = [];
                // var check = response.data.answers;
                // console.log(check);
                // for (var i = 0; i < n; i++) {
                //     arr.push(response.data.answers[i].answer);
                // }
                this.setState({
                    quest: response.data.question,
                    author: response.data.author,
                    views: response.data.views,
                    upvotes: response.data.upvotes,
                    answers: arr
                })
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    errorMsg: "Error retrieving data"
                })
            })
    }

    render() {
        const { quest, author, views, upvotes, answers, errorMsg } = this.state;
        return (
            <Box sx={{ flexGrow: 1, backgroundColor: "#d9d9d9", padding: 2 }}>



                {/* ----------------------------QUICK ACCESS------------------------------ */}
                <Grid container spacing={2} >
                    <Grid item xl={2} lg={2} md={2} sm={2} xs={2} >
                        <Item  >
                            <Typography sx={{
                                fontSize: 20,
                                fontWeight: 300,
                                fontFamily: "'urw-din',sans-serif"
                            }}> Quick Access
                            </Typography>
                            <Divider light />
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


                    {/* -----------------------------------Middle Section (Questions) ------------------------------------------------ */}

                    <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
                        <Grid item >
                            <Item >
                                {dummyQue.map((content) => (
                                    <Grid >
                                        {/* ***********HEADING***************** */}
                                        <Typography
                                            sx={{
                                                color: "black",
                                                fontFamily: "'urw-din',sans-serif",
                                                margin: "50px",
                                                fontSize: "40px"
                                                // margin:"10px",

                                            }}>
                                            {/* <HelpCenterIcon sx={{
                                                fontSize: "100px"
                                            }} />   */}
                                            {quest}
                                        </Typography>

                                        {/* ******************************************************** */}

                                        <Grid container sx={{
                                            margin: "20px"
                                        }} >
                                            <Grid container spacing="10px" justifyContent="left" item xs={4} md={4} xl={4} sm={4} lg={4}>
                                                <Button sx={{
                                                    backgroundColor: "#20D867",
                                                    width: 200,
                                                    height: 60,
                                                    border: 1,
                                                    borderRadius: 2,
                                                    fontSize: 15,
                                                    "&:hover": {
                                                        backgroundColor: "#E26639",
                                                        opacity: 10,
                                                    }
                                                }} variant="contained" disableElevation>
                                                    <Link style={{ textDecoration: "None", color: "white" }} to={`/Post-an-answer/${quest}`}>
                                                        Post an Answer
                                                    </Link>
                                                </Button>

                                                <Button variant='outline' sx={{
                                                    height: 60,
                                                    border: 1,
                                                    borderRadius: 2,
                                                    marginLeft: "10px",
                                                    border: "1px solid grey",
                                                    alignItems: "right"
                                                }}>
                                                    <ThumbUpIcon /> {upvotes}
                                                </Button>
                                            </Grid>


                                            <Grid container justifyContent="right" xs={7.5} md={7.5} xl={7.5} sm={7.5} lg={7.5} >
                                                <Stack direction="row"
                                                    sx={{
                                                        height: 60,
                                                        padding: "3px",
                                                        border: "1px solid grey",
                                                        borderRadius: 2,
                                                        position: "relative",
                                                        alignItems: "right",

                                                    }}>
                                                    <Item elevation={0} sx={{
                                                        borderRight: "1px solid grey",
                                                        borderRadius: "0px"
                                                    }}>
                                                        <Typography variant="subtitle1" color='black'>
                                                            <VisibilityIcon />
                                                            {views}
                                                        </Typography>
                                                    </Item>

                                                    <Item elevation={0} sx={{
                                                        borderRight: "1px solid grey",
                                                        borderRadius: "0px"
                                                    }}>
                                                        <Typography variant="subtitle1" color='black'>
                                                            <ThumbUpIcon />
                                                            {upvotes}
                                                        </Typography>

                                                    </Item>
                                                    <Item elevation={0}>
                                                        <Typography variant="subtitle1" color='black'>
                                                            <QuestionAnswerIcon />
                                                            {answers.length}
                                                        </Typography>

                                                    </Item>
                                                </Stack>
                                            </Grid>
                                        </Grid>

                                        <Grid container>
                                            {answers.map(answer => {
                                                return (
                                                    <Grid sx={{
                                                        width: "100%",
                                                        border: "1px solid #d3d3d3",
                                                        margin: "10px",
                                                        borderRadius: "0px",
                                                        "&:hover": {
                                                            cursor: "pointer",
                                                            boxShadow: "0 0 10px #d3d3d3",
            
                                                        }
                                                    }} >
                                                        <CardHeader sx={{
                                                            alignItems: 'left',
                                                            textAlign: 'left',
                                                        }}
                                                            avatar={
                                                                <Avatar sx={{
                                                                    height: "50px",
                                                                    width: "50px",
                                                                }}
                                                                    alt={content.author}
                                                                    src="https://th.bing.com/th/id/OIP.6C4bCvrEnKURBcRjCOr0sQHaHa?pid=ImgDet&rs=1"
                                                                />
                                                            }
                                                            title={
                                                                <Typography sx={{
                                                                    fontSize: 20,
                                                                    fontFamily: "'urw-din',sans-serif",
                                                                }}>
                                                                    {answer.author}
                                                                </Typography>
                                                            }
                                                        />
                                                        <Typography color='black' sx={{
                                                            padding: 2,
                                                            textAlign: 'left',
                                                            fontSize: 20,
                                                            fontFamily: "'urw-din',sans-serif",
                                                        }}>
                                                            <GoArrowRight /> {answer.answer}</Typography>

                                                        <Grid container justifyContent="right"
                                                        ><Button variant='outline' sx={{
                                                            margin: "10px",
                                                            border: "1px solid grey",
                                                            alignItems: "right"
                                                        }}>
                                                                <ThumbUpIcon /> {answer.upvotes}
                                                            </Button></Grid>


                                                    </Grid>
                                                )
                                            })}
                                        </Grid>
                                    </Grid>

                                ))}
                            </Item>
                        </Grid>
                    </Grid>




                    {/* --------------------------------TAGS SECTION--------------------------------------------*/}

                    <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
                        <Item>
                            <Typography color='black' sx={{
                                fontFamily: "'urw-din',sans-serif",
                                fontSize: 20
                            }}>
                                Tags
                            </Typography>
                            <Divider light />
                            {queTags.map((content) => (
                                <Grid sx={{ padding: 1 }}>
                                    <Button sx={{
                                        backgroundColor: "#E26639",
                                        width: 100,
                                        height: 35,
                                        padding: "10px",
                                        borderRadius: 1,
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

                            <Grid sx={{ paddingTop: 10 }}>
                                <Button sx={{
                                    backgroundColor: "#20D867",
                                    width: 150,
                                    height: 60,
                                    border: 1,
                                    borderRadius: 2,
                                    fontSize: 15,
                                    "&:hover": {
                                        backgroundColor: "#E26639",
                                        opacity: 10,
                                    }
                                }} variant="contained" disableElevation>

                                    <Link style={{ textDecoration: "None", color: "white" }} to={red_link}>
                                        Post a question
                                    </Link>

                                </Button>

                            </Grid>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        );
    }
}

export default Ans