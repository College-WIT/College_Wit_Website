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
import * as animationData from "../../Assets/ques.json";
import Lottie from "react-lottie";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#457b9d" : "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

class QuestionsPages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      QuestionsData: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://rcoem-overflow-backend.herokuapp.com/view_all_questions")
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
    const { QuestionsData } = this.state;
    return (
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "#d9d9d9",
          padding: 2,
          fontFamily: "Josefin Sans, sans-serif",
        }}
      >
        <Grid container spacing={2}>
          {/* ----------------------------QUICK ACCESS------------------------------ */}
          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <Leftbar />
          </Grid>

          {/* ------------------------------------Questions------------------------------------- */}

          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
            <marquee width="100%" direction="left">
              <b>To Answer or Post Questions, Please fill the Contributors form on top right corner in Navbar !!</b> 
            </marquee>
            <Grid item>
              <Item>
                <Grid columns={16} container>
                  <Grid item xs={4}>
                    <Lottie
                      options={defaultOptions}
                      height="100%"
                      width="70%"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      sx={{
                        fontSize: "40px",
                        fontWeight: "bold",
                        fontFamily: "Josefin Sans, sans-serif",
                        color: "#000",
                        paddingTop: 5,
                      }}
                    >
                      Answered Questions
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container>
                  {QuestionsData.map((content) => (
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
                      <Link
                        to={{
                          pathname: `/answers/${content.question}`,
                          state: { propQue: true },
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
                                height: "45px",
                                width: "45px",
                              }}
                              alt={content.author}
                              src="
                              https://avatars.dicebear.com/api/bottts/goo.svg"
                            />
                          }
                          title={
                            <Typography
                              sx={{
                                fontSize: 18,
                                fontFamily: "Josefin Sans, sans-serif",
                              }}
                            >
                              {content.author}
                            </Typography>
                          }
                        />
                        <Typography
                          variant="h6"
                          sx={{
                            color: "black",
                            textAlign: "left",
                            paddingLeft: 3,
                            fontFamily: "Josefin Sans, sans-serif",
                          }}
                        >
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
                                    color: "#001d3d",
                                    width: "auto",
                                    height: "auto",
                                    px: 1,
                                    py: 1,
                                    fontWeight: "600",
                                    fontFamily: "Josefin Sans, sans-serif",
                                    borderRadius: 1,
                                    fontSize: "13px",
                                    border: "1px solid #001d3d",

                                    "&:hover": {
                                      backgroundColor: "#118ab2",
                                      color: "white",
                                      opacity: 10,
                                    },
                                  }}
                                  variant="outlined"
                                  disableElevation
                                >
                                  See Full Answer
                                </Button>
                              </Link>
                            </Item>
                          </Grid>

                          <Grid
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
                              sx={{
                                padding: "3px",
                                border: "1px solid #d3d3d3",
                                borderRadius: "10px ",
                                position: "relative",
                                alignItems: "right",
                                "@media (max-width:1000px)": {
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
                                <Typography
                                  variant="subtitle1"
                                  color="black"
                                  sx={{
                                    fontFamily: "Josefin Sans, sans-serif",
                                  }}
                                >
                                  <VisibilityIcon sx={{ color: "#04274d" }} />
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
                                <Typography
                                  variant="subtitle1"
                                  color="black"
                                  sx={{
                                    fontFamily: "Josefin Sans, sans-serif",
                                  }}
                                >
                                  <ThumbUpIcon sx={{ color: "#04274d" }} />
                                  {content.upvotes}
                                </Typography>
                              </Item>
                              <Item elevation={0}>
                                <Typography
                                  variant="subtitle1"
                                  color="black"
                                  sx={{
                                    fontFamily: "Josefin Sans, sans-serif",
                                  }}
                                >
                                  <QuestionAnswerIcon
                                    sx={{ color: "#04274d" }}
                                  />
                                  {content.no_of_answers}
                                </Typography>
                              </Item>
                            </Stack>
                          </Grid>
                        </Stack>
                      </Link>
                    </Grid>
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

export default QuestionsPages;
