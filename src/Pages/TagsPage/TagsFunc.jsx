import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { Avatar } from "@mui/material";
import { CardHeader } from "@mui/material";
import * as animationData from "../../Assets/QnA.json";
import Lottie from "react-lottie";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Rightbar from "../../Components/Questions/Rightbar";
import Leftbar from "../../Components/Questions/Leftbar";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function TagsFunc(props) {
  console.log(props.tag);
  var Tag = props.tag;
  const tags = {
    tag: props.tag,
  };

  const [QuestionsData, setQuestionsData] = useState([]);

  var getData = async () => {
    console.log("DATA CALL");
    await axios
      .post(
        "https://cw-backend.vercel.app/tagwise_question",
        tags
      )
      .then((response) => {
        console.log(response);
        setQuestionsData(response.data);
      })
      .catch((error) => {
        console.log(error);
        //errorMsg: "Error retrieving data"
      });
  };
  useEffect(() => {
    getData();
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [props]);

  console.log(QuestionsData);
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "#d9d9d9",
        padding: 2,
      }}
    >
      {/* ----------------------------QUICK ACCESS------------------------------ */}
      <Grid container spacing={2}>
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
                  <Lottie options={defaultOptions} height="100%" width="50%" />
                </Grid>
                <Grid item xs={4} md={10}>
                  <Typography
                    sx={{
                      fontFamily: "Josefin Sans, sans-serif",
                      fontSize: 40,
                      position: "relative",
                      fontWeight: 700,
                      top: 55,
                      left: "-110px",
                    }}
                  >
                    {Tag}
                  </Typography>
                </Grid>
              </Grid>
              {QuestionsData.length === 0 ? (
                <h1>No Questions Yet</h1>
              ) : (
                <Grid container>
                  {QuestionsData.map((content) => (
                    <Box
                      sx={{
                        width: "100%",
                        border: "1px solid #d3d3d3",
                        margin: "5px",
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
                            src="https://avatars.dicebear.com/api/bottts/qw.svg"
                          />
                        }
                        title={
                          <Typography
                            sx={{
                              fontSize: 16,
                              fontFamily: "Josefin Sans, sans-serif",
                            }}
                          >
                            {content.author}
                          </Typography>
                        }
                      />
                      <Typography
                        variant="h6"
                        sx={{ paddingLeft: 2, color: "black", textAlign: "left", paddingTop: 0.5, fontFamily: "Josefin Sans, sans-serif", }}
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
                                  padding: "10px",
                                  borderRadius: 1,
                                  fontFamily: "Josefin Sans, sans-serif",
                                  border: "1px solid #001d3d",
                                  "&:hover": {
                                    backgroundColor: "#118ab2",
                                    color: "#fff",
                                    opacity: 10,
                                  },
                                }}
                                variant="outlined"
                                disableElevation
                              >
                                See Full Answer
                              </Button>
                            </Link>

                            {/* <Link
                                                                  component="button"
                                                                  variant="body2"
                                                                  onClick={() => {
                                                                      console.info("I'm a button.");
                                                                  }}
                                                              >
                                                                  Button Link
                                                              </Link> */}
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
                            margin: "3px",
                          }}
                        >
                          <Stack
                            direction="row"
                            spacing={1}
                            sx={{
                              padding: "3px",
                              border: "1px solid #d3d3d3",
                              borderRadius: "10px ",
                              position: "relative",
                              alignItems: "right",
                              "@media (max-width:1000px)": {
                                paddingLeft: 1,
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
                              <Typography variant="subtitle1" color="black" sx={{ fontFamily: "Josefin Sans, sans-serif", }}>
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
                              <Typography variant="subtitle1" color="black" sx={{ fontFamily: "Josefin Sans, sans-serif", }}>
                                <ThumbUpIcon />
                                {content.upvotes}
                              </Typography>
                            </Item>
                            <Item elevation={0}>
                              <Typography variant="subtitle1" color="black" sx={{ fontFamily: "Josefin Sans, sans-serif", }}>
                                <QuestionAnswerIcon />
                                {content.no_of_answers}
                              </Typography>
                            </Item>
                          </Stack>
                        </Grid>
                      </Stack>
                    </Box>
                  ))}
                </Grid>
              )}
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
