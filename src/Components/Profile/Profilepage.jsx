import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Grid, Button, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";
import Typography from "@mui/material/Typography";
import getCookie from "../../hooks/getCookie";

const Styles = {
  Item: {
    color: "black",
    fontFamily: "'urw-din',sans-serif",
    minHeight: "500px",
    height: "auto",
    borderRadius: "10px",
    my: 3,
    mx: 1,
    justifyContent: "center",
  },
  header: {
    fontSize: "20px",
    background: "#001d3d",
    color: "white",
    textAlign: "center",
    borderRadius: "5px",
    fontFamily: "Josefin Sans, sans-serif",
    width: "auto",
    p: 1,
  },
  card: {
    p: 1,
    maxWidth: 500,
    width: "auto",
    height: "auto",
    minHeight: "500px",
    boxShadow: "0",
  },
  media: {
    padding: "10px",
    height: "200px",
    width: "200px",
    borderRadius: "50%",
    margin: "auto",
    marginTop: "20px",
  },
  icon: {
    fontSize: 20,
    color: "#ffffff",
  },
  button: {
    fontSize: "15px",
    my: 3,
    width: "150px",
    height: "40px",
    borderRadius: "10px",
    background: "#293241",
    color: "white",
    boxShadow: "0",
    position: "relative",
    fontFamily: "Josefin Sans, sans-serif",
    "&:hover": {
      background: "#d3d3d3",
      color: "black",
    },
  },
  content: {
    fontSize: "20px",
    color: "black",
    fontFamily: "Josefin Sans, sans-serif",
    fontWeight: "bold",
  },
  content2: {
    fontSize: "20px",
    color: "black",
    fontFamily: "Josefin Sans, sans-serif",
    fontWeight: 400,
    marginLeft: "10px",
  },
};

const UserInfo = () => {
  let loggedin = getCookie("login");

  var username_real = "fake6969";
  if (loggedin) {
    // eslint-disable-next-line no-unused-vars
    username_real = JSON.parse(getCookie("login")).username;
  }

  var str = window.location.pathname;
  const usernames = str.substring(9);
  console.log(usernames);
  const username = { username: usernames };

  const [UserData, setUserData] = useState([]);

  var getUserData = async () => {
    console.log("DATA CALL");
    await axios
      .post("https://cw-backend.vercel.app/user_info", username)
      .then((response) => {
        console.log(response);
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getUserData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usernames]);

  console.log(UserData);

  const personal = [
    { Name: UserData.name },
    { College: UserData.college },
    { Semester: UserData.semester },
    { Branch: UserData.branch },
    { Company: UserData.company },
    { Position: UserData.position },
  ];

  const contact = [
    { Email: UserData.email },
    { LinkedIn: UserData.linkedin_url },
    { GitHub: UserData.github_url },
    { Codechef: UserData.codechef_url },
    { Codeforces: UserData.codeforces_url },
    { Leetcode: UserData.leetcode_url },
  ];

  const skills = [{ Skills: UserData.skills }];

  return (
    <div>
      <Grid
        container
        justifyContent="center"
        xs={12}
        sx={{ background: "#d3d3d3" }}
      >
        {/* ----------------------------left Bar--------------------------------------------------------------- */}
        <Grid
          item
          xs={10}
          sm={8}
          md={3}
          lg={3}
          sx={Styles.Item}
          textAlign="center"
        >
          <Card sx={Styles.card}>
            <Grid
              item
              xs={12}
              sx={{
                height: "auto",
                borderRadius: "10px",
                border: "1px solid #457b9d",
                m: 1,
              }}
            >
              <CardMedia
                component="img"
                sx={Styles.media}
                image="https://xsgames.co/randomusers/avatar.php?g=pixel"
              />
              <CardContent>
                <Typography
                  sx={{
                    fontSize: 30,
                    fontWeight: "bold",
                    textAlign: "center",
                    fontFamily: "Josefin Sans, sans-serif",
                  }}
                >
                  {UserData.name}
                </Typography>
                <Typography
                  gutterBottom
                  component="div"
                  color="text.secondary"
                  sx={{
                    fontSize: "20px",
                    textAlign: "center",
                    fontFamily: "Josefin Sans, sans-serif",
                    fontWeight: 200,
                  }}
                >
                  {UserData.user_name}
                </Typography>
              </CardContent>
            </Grid>

            <CardActions>
              <Grid container justifyContent="center">
                <Typography>
                  <a href={UserData.linkedin_url}>
                    <Button sx={Styles.icon}>
                      <img
                        alt="LinkedIn"
                        src="https://img.icons8.com/color/48/000000/linkedin.png"
                      />
                    </Button>
                  </a>
                  <a href={UserData.github_url}>
                    <Button sx={Styles.icon}>
                      <img
                        alt="github"
                        src="https://img.icons8.com/color/48/000000/github--v1.png"
                      />
                    </Button>
                  </a>
                </Typography>
              </Grid>
            </CardActions>

            <Divider />
          </Card>
        </Grid>

        {/* -----------------------------------------RIght Bar--------------------------------------------------------- */}

        <Grid
          item
          xs={10}
          sm={8}
          md={8}
          lg={8}
          sx={Styles.Item}
          backgroundColor="white"
        >
          <Typography
            sx={{
              fontSize: "40px",
              textAlign: "center",
              fontFamily: "Josefin Sans, sans-serif",
              fontWeight: 200,
              my: 1,
            }}
          >
            Profile
          </Typography>
          <Divider />

          <Grid
            container
            justifyContent="center"
            sx={{ my: 3, p: 1, borderRadius: "10px" }}
          >
            {/* ----------------------------------Personal Information-------------------------------- */}
            <Grid item xs={11} sm={11} md={10} lg={5} sx={{ m: 0.5 }}>
              <Card sx={{ width: "auto" }}>
                <Typography sx={Styles.header}>Personal </Typography>
                <CardContent>
                  {personal.map((data) => {
                    return (
                      <Grid container>
                        <Grid
                          item
                          xs={11}
                          sm={11}
                          lg={11}
                          sx={{ ml: 1, my: 1 }}
                        >
                          {Object.values(data) !== "" ? (
                            <Typography sx={Styles.content}>
                              {Object.keys(data)} :
                              <span style={Styles.content2}>
                                {Object.values(data)}
                              </span>
                            </Typography>
                          ) : (
                            <></>
                          )}
                        </Grid>
                      </Grid>
                    );
                  })}
                </CardContent>
              </Card>
            </Grid>

            {/* ----------------------------------Contact Information-------------------------------- */}

            <Grid item xs={11} sm={11} md={10} lg={6} sx={{ m: 0.5 }}>
              <Card sx={{ width: "auto" }}>
                <Typography sx={Styles.header}>Links </Typography>
                <CardContent>
                  {contact.map((data) => {
                    return (
                      <Grid container>
                        <Grid
                          item
                          xs={11}
                          sm={11}
                          lg={11}
                          sx={{ ml: 1, my: 1 }}
                        >
                          {Object.values(data) !== "" ? (
                            <>
                              <Typography sx={Styles.content}>
                                {Object.keys(data)} :
                                <a href={Object.values(data)}>
                                  <span style={Styles.content2}>
                                    {Object.values(data)}
                                  </span>
                                </a>
                              </Typography>
                            </>
                          ) : (
                            <></>
                          )}
                        </Grid>
                      </Grid>
                    );
                  })}
                </CardContent>
              </Card>
            </Grid>

            {/* ----------------------------------Skills-------------------------------- */}

            <Grid item xs={11} sm={10} md={10} lg={11} sx={{ m: 1 }}>
              <Card sx={{ width: "auto" }}>
                <Typography sx={Styles.header}>Skills </Typography>
                <CardContent>
                  {skills.map((data) => {
                    return (
                      <Grid container>
                        <Grid item sx={{ ml: 1, my: 1 }}>
                          {Object.values(data) !== "" ? (
                            <Typography sx={Styles.content}>
                              {Object.keys(data)} :
                              <span style={Styles.content2}>
                                {Object.values(data)}
                              </span>
                            </Typography>
                          ) : (
                            <></>
                          )}
                        </Grid>
                      </Grid>
                    );
                  })}
                </CardContent>
              </Card>
            </Grid>

            {/* ----------------------------------Projects and Achievements-------------------------------- */}

            {/* <Grid item xs={11} sm={10} md={10} lg={11} sx={{ m: 1 }}>
              <Card sx={{ width: "auto" }}>
                <Typography sx={Styles.header}>
                  Projects and Achievements{" "}
                </Typography>
                <CardContent>
                  {Projects.map((data) => {
                    return (
                      <Grid container>
                        <Grid item xs={4} sm={3} lg={3} sx={{ ml: 1, my: 1 }}>
                          <Typography sx={Styles.content}>
                            {Object.keys(data)} : {Object.values(data)}
                          </Typography>

                          <Typography sx={Styles.content}>
                            Description :
                          </Typography>

                          <Typography sx={Styles.content}>Link :</Typography>
                        </Grid>
                      </Grid>
                    );
                  })}
                </CardContent>
              </Card>
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>

      {/* Right Bar */}
    </div>
  );
};

export default UserInfo;
