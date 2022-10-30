import React from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { GoArrowRight } from "react-icons/go";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Avatar } from "@mui/material";
import { CardHeader } from "@mui/material";
import { Component } from "react";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const dummyQue = [
  {
    que: "Create a class TimeZone which will add functionality to convert the time from one time zone to another time zone.Note: Class Time zone  uses the TIme Object and uses the Add and Subtract methods of Time Class.",
    // ans: ["Answers1","Answer2"],
    upvotes: 10,
    ans: 20,
    views: 300,
    answers: [],
  },
];

  /////// Upvotes api functions

  var question_upvote =  async (que) => {
    // POST request using axios with async/await
    console.log(que.quest);
    var question_data={
      "question":que.quest
    }
    const response = await axios.post('https://rcoem-overflow-backend.herokuapp.com/upvote_question', question_data);
    console.log(response);
    window.location.reload();
};

var answer_upvote =  async (que,answer) => {
  // POST request using axios with async/await
  console.log(que);
  console.log(answer);
  var question_data={
    "question":que,
    "answer":answer
  }
  const response = await axios.post('https://rcoem-overflow-backend.herokuapp.com/upvote_answer', question_data);
  console.log(response);
  window.location.reload();
};



class Ans extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quest: "",
      author: "",
      views: 0,
      upvotes: 0,
      answers: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    const obj = {
      question: this.props.qq,
    };

    localStorage.removeItem("recentQuest");
    const strJSON = this.props.qq;
    localStorage.setItem("recentQuest", strJSON);

    var rp = window.location.href;
    console.log(rp);
    localStorage.removeItem("RecentPage");
    localStorage.setItem("RecentPage", rp);
    //console.log(window.location.href);

    axios
      .post(
        "https://rcoem-overflow-backend.herokuapp.com/view_specific_question",
        obj
      )
      .then((response) => {
        console.log("POST COMPLETE");
        // const n = response.data.answers.length;
        var arr = response.data.answers;

        this.setState({
          quest: response.data.question,
          author: response.data.author,
          views: response.data.views,
          upvotes: response.data.upvotes,
          answers: arr,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          errorMsg: "Error retrieving data",
        });
      });
  }

  render() {
    const {
      quest,
      // author,
      views,
      upvotes,
      answers,
      //  errorMsg
    } = this.state;
    return (
      <Box sx={{ flexGrow: 1, backgroundColor: "#d9d9d9", padding: 2 }}>
        <Grid container spacing={2}>
          {/* ----------------------------QUICK ACCESS------------------------------ */}

          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <Leftbar />
          </Grid>

          {/* -----------------------------------Middle Section (Questions) ------------------------------------------------ */}

          <Grid item xl={8} lg={8} md={8} sm={8} xs={12}>
            <Grid item>
              <Item>
                {dummyQue.map((content) => (
                  <Grid>
                    {/* ***********HEADING***************** */}
                    <Typography
                      sx={{
                        color: "black",
                        fontFamily: "'urw-din',sans-serif",
                        margin: "50px",
                        fontSize: "40px",
                        // margin:"10px",
                      }}
                    >
                      {/* <HelpCenterIcon sx={{
                                                fontSize: "100px"
                                            }} />   */}
                      {quest}
                    </Typography>

                    {/* ******************************************************** */}

                    <Grid
                      container
                      sx={{
                        margin: "20px",
                      }}
                    >
                      <Grid
                        container
                        spacing="10px"
                        justifyContent="left"
                        item
                        xs={4}
                        md={4}
                        xl={4}
                        sm={4}
                        lg={4}
                      >
                        <Button
                          sx={{
                            backgroundColor: "#20D867",
                            width: 200,
                            height: 60,
                            border: 1,
                            borderRadius: 2,
                            fontSize: 15,
                            "&:hover": {
                              backgroundColor: "#E26639",
                              opacity: 10,
                            },
                          }}
                          variant="contained"
                          disableElevation
                        >
                          <Link
                            to={`/Post-an-answer/${quest}`} 
                            state={{propQue:quest}}
                            style={{ textDecoration: "None", color: "white" }}
                          >
                            Post an Answer
                          </Link>
                        </Button>

                        <Button onClick={()=>question_upvote({quest})}
                          variant="outline"
                          sx={{
                            height: 60,
                            borderRadius: 2,
                            marginLeft: "10px",
                            border: "1px solid grey",
                            alignItems: "right",
                          }}
                        >
                          <ThumbUpIcon /> {upvotes}
                        </Button>
                      </Grid>

                      <Grid
                        container
                        justifyContent="right"
                        xs={7.5}
                        md={7.5}
                        xl={7.5}
                        sm={7.5}
                        lg={7.5}
                      >
                        <Stack
                          direction="row"
                          sx={{
                            height: 60,
                            padding: "3px",
                            border: "1px solid grey",
                            borderRadius: 2,
                            position: "relative",
                            alignItems: "right",
                          }}
                        >
                          <Item
                            elevation={0}
                            sx={{
                              borderRight: "1px solid grey",
                              borderRadius: "0px",
                            }}
                          >
                            <Typography variant="subtitle1" color="black">
                              <VisibilityIcon />
                              {views}
                            </Typography>
                          </Item>

                          <Item
                            elevation={0}
                            sx={{
                              borderRight: "1px solid grey",
                              borderRadius: "0px",
                            }}
                          >
                            <Typography variant="subtitle1" color="black">
                              <ThumbUpIcon />
                              {upvotes}
                            </Typography>
                          </Item>
                          <Item elevation={0}>
                            <Typography variant="subtitle1" color="black">
                              <QuestionAnswerIcon />
                              {answers.length}
                            </Typography>
                          </Item>
                        </Stack>
                      </Grid>
                    </Grid>

                    <Grid container>
                      {answers.map((answer) => {
                        return (
                          <Grid
                            sx={{
                              width: "100%",
                              border: "1px solid #d3d3d3",
                              margin: "10px",
                              borderRadius: "0px",
                              "&:hover": {
                                cursor: "pointer",
                                boxShadow: "0 0 10px #d3d3d3",
                              },
                            }}
                          >
                            <CardHeader
                              sx={{
                                alignItems: "left",
                                textAlign: "left",
                              }}
                              avatar={
                                <Avatar
                                  sx={{
                                    height: "50px",
                                    width: "50px",
                                  }}
                                  alt={content.author}
                                  src="https://th.bing.com/th/id/OIP.6C4bCvrEnKURBcRjCOr0sQHaHa?pid=ImgDet&rs=1"
                                />
                              }
                              title={
                                <Typography
                                  sx={{
                                    fontSize: 20,
                                    fontFamily: "'urw-din',sans-serif",
                                  }}
                                >
                                  {answer.author}
                                </Typography>
                              }
                            />
                            <Typography
                              color="black"
                              sx={{
                                padding: 2,
                                textAlign: "left",
                                fontSize: 20,
                                fontFamily: "'urw-din',sans-serif",
                              }}
                            >
                              <GoArrowRight /> {answer.answer}
                            </Typography>

                            <Grid container justifyContent="right">
                              <Button onClick={()=>answer_upvote(quest,answer.answer)}
                                variant="outline"
                                sx={{
                                  margin: "10px",
                                  border: "1px solid grey",
                                  alignItems: "right",
                                }}
                              >
                                <ThumbUpIcon /> {answer.upvotes}
                              </Button>
                            </Grid>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Grid>
                ))}
              </Item>
            </Grid>
          </Grid>

          {/* --------------------------------TAGS SECTION--------------------------------------------*/}

          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <Rightbar />
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default Ans;
