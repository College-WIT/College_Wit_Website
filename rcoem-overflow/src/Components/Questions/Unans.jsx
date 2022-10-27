import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Component } from "react";
import axios from "axios";
import { Avatar } from "@mui/material";
import { CardHeader } from "@mui/material";
import getCookie from "../../hooks/getCookie";
import Divider from "@mui/material/Divider";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import * as animationData from "../../Assets/que.json";
import Lottie from "react-lottie";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

var cookie = getCookie("login");
var red_link = "/Post-a-question";
var red_link2 = "/Post-an-answer";
if (cookie == null) {
  red_link = "/login";
  red_link2 = "/login";
  console.log(red_link);
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const quickAccBar = ["Home", "Answered", "Unanswered", "Trending"];
const queTags = ["Tags", "Tags", "Tags", "Tags", "Tags"];

class unans extends Component {
  constructor(props) {
    super(props);

    this.state = {
      QuestionsData: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://rcoem-overflow-backend.herokuapp.com/view_unanswered_questions"
      )
      .then((response) => {
        console.log(response);
        this.setState({
          QuestionsData: response.data,
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
    const { QuestionsData, errorMsg } = this.state;
    return (
      <Box sx={{ flexGrow: 1, backgroundColor: "#d9d9d9", padding: 2 }}>
        <Grid container spacing={2}>
          {/* ----------------------------QUICK ACCESS------------------------------ */}
          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <Leftbar />
          </Grid>

          {/* ------------------------------------Questions------------------------------------- */}

          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
            <Grid item>
              <Item>
                <Grid
                  columns={16}
                  container
                  sx={{
                    paddingBottom: 1,
                  }}
                >
                  <Grid item xs={4} md={6}>
                    <Lottie
                      options={defaultOptions}
                      height="100%"
                      width="50%"
                    />
                  </Grid>
                  <Grid item xs={4} md={10}>
                    <Typography
                      sx={{
                        fontFamily: "'urw-din',sans-serif",
                        fontSize: 40,
                        position: "relative",
                        top: 55,
                        left: "-100px",
                      }}
                    >
                      Unanswered Questions
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container>
                  {QuestionsData.map((content) => (
                    <Box
                      sx={{
                        width: "100%",
                        border: "1px solid #d3d3d3",
                        margin: "10px",
                        // borderRadius: "10px",
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
                              height: "40px",
                              width: "40px",
                            }}
                            alt={content.author}
                            src="https://th.bing.com/th/id/OIP.6C4bCvrEnKURBcRjCOr0sQHaHa?pid=ImgDet&rs=1"
                          />
                        }
                        title={
                          <Typography
                            sx={{
                              fontSize: 18,
                              // fontWeight: "bold",
                              fontFamily: "roboto",
                            }}
                          >
                            {content.author}
                          </Typography>
                        }
                      />
                      <Typography
                        variant="h6"
                        sx={{ color: "black", textAlign: "left", padding: 0.5 }}
                      >
                        <LiveHelpIcon
                          sx={{
                            margin: "0 20px",
                          }}
                        />

                        {content.question}
                      </Typography>

                      <Stack
                        direction="row"
                        sx={{
                          padding: 0.6,
                        }}
                      >
                        <Grid container xs={8} md={8} xl={8} sm={6} lg={7}>
                          <Item elevation={0}>
                            <Link
                              to={{
                                pathname: `/answers/${content.question}`,
                                state: { propQue: true },
                              }}
                            >
                              <Button
                                sx={{
                                  backgroundColor: "#E26639",
                                  width: "auto",
                                  height: "auto",
                                  padding: "10px",
                                  borderRadius: 1,
                                  "&:hover": {
                                    backgroundColor: "#41D450",
                                    opacity: 10,
                                  },
                                }}
                                variant="contained"
                                disableElevation
                              >
                                Visit the Question Page
                              </Button>
                            </Link>
                          </Item>
                        </Grid>

                        {/*<Grid
                          container
                          xs={4}
                          md={4}
                          xl={4}
                          sm={6}
                          lg={3}
                          sx={{
                            margin: "10px",
                          }}
                        >
                          <Stack
                            direction="row"
                            spacing={2}
                            sx={{
                              padding: "10px",
                              border: "1px solid #d3d3d3",
                              borderRadius: "10px ",
                              position: "relative",
                              alignItems: "right",
                              "@media (max-width:1000px)": {
                                paddingLeft: 20,
                              },
                              "@media (max-width:850px)": {
                                paddingLeft: 1,
                              },
                            }}
                          >
                            <Item
                              elevation={0}
                              sx={{
                                borderRight: "1px solid #d3d3d3",
                                borderRadius: "0px",
                              }}
                            >
                              <Typography variant="subtitle1" color="black">
                                <VisibilityIcon />
                                {content.views}
                              </Typography>
                            </Item>

                            <Item
                              elevation={0}
                              sx={{
                                borderRight: "1px solid #d3d3d3",
                                borderRadius: "0px",
                              }}
                            >
                              <Typography variant="subtitle1" color="black">
                                <ThumbUpIcon />
                                {content.upvotes}
                              </Typography>
                            </Item>
                            <Item elevation={0}>
                              <Typography variant="subtitle1" color="black">
                                <QuestionAnswerIcon />
                                {content.no_of_answers}
                              </Typography>
                            </Item>
                          </Stack>
                        </Grid>*/}
                      </Stack>
                    </Box>
                  ))}
                </Grid>
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
export default unans;
