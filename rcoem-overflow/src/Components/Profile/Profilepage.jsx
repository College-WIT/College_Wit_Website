import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Grid, Button, Divider, Paper, CardHeader } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import axios from "axios";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Item = {
  // backgroundColor: "white",
  color: "black",
  fontFamily: "'urw-din',sans-serif",
  minHeight: "500px",
  height: "auto",
  borderRadius: "10px",
  my: 3,
  mx: 1,
  justifyContent: "center",
};

const header = {
  fontSize: "20px",
  background: "#293241",
  color: "white",
  textAlign: "center",
  borderRadius: "5px",
  height: "50px",
  padding: "5px",
};

const UserInfo = () => {
  let location = useLocation();
  const username = { username: location.state.username };
  console.log(username);

  const [UserData, setUserData] = useState([]);

  var getUserData = async () => {
    console.log("DATA CALL");
    await axios
      .post("https://rcoem-overflow-backend.herokuapp.com/user_info", username)
      .then((response) => {
        console.log(response);
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
        //errorMsg: "Error retrieving data"
      });
  };
  useEffect(() => {
    getUserData();
  }, []);
  console.log(UserData);

  // var user_data={
  //   "leetcode_url": "",
  //   "password": "check",
  //   "linkedin_url": "https://github.com/Bhushan21z",
  //   "branch": "CSE A",
  //   "gender": "MALE",
  //   "other_url": "https://github.com/Bhushan21z",
  //   "skills": [
  //       "C++",
  //       "Java",
  //       "Python",
  //       "JavaScript",
  //       "C"
  //   ],
  //   "company": "fffg",
  //   "github_url": "https://github.com/Bhushan21z",
  //   "codechef_url": "https://github.com/Bhushan21z",
  //   "college": "RCOEM",
  //   "email": "bhushanwanjari21z@gmail.com",
  //   "codeforces_url": "https://github.com/Bhushan21z",
  //   "name": "Bhushan Wanjari",
  //   "semester": "5th",
  //   "position": "fff",
  //   "points": 43,
  //   "contributor": true,
  //   "user_name": "bhushan21z"
  // }

  const personal = [
    { Name: UserData.name },
    // { Gender: "male" },
    { College: UserData.college },
    { Semester: UserData.semester },
    { Branch: UserData.branch },
    { Company: UserData.company },
    { Position: UserData.position },
  ];

  const contact = [
    { Email: UserData.email },
    { Phone: "123456789" },
    { LinkedIn: UserData.linkedin_url },
    { GitHub: UserData.github_url },
  ];

  const Projects = [{ Project: "Project1" }, { Project2: "Project2" }];

  //  ANJALI USE THIS

  // const Projects = [
  //   { Project1: {
  //       "Project Name": "Project1 Name",
  //       "Project Description": "Project Description",
  //       "Project Link":"Project Description"
  //     }
  //   },
  //   { Project2: {
  //     "Project Name": "Project2 Name",
  //     "Project Description": "Project Description",
  //     "Project Link":"Project Description"
  //   }
  //   }
  // ];

  const skills = [
    { Skills: UserData.skills },
    { Codechef: UserData.codechef_url },
    { Codeforces: UserData.codeforces_url },
    { Leetcode: UserData.leetcode_url },
    { Personal: UserData.other_url },
  ];

  //const skills = ["Python", "Java", "C++", "C#", "JavaScript", "React", "Node"];

  return (
    <div>
      <Grid
        container
        justifyContent="center"
        xs={12}
        sx={{ background: "#d3d3d3" }}
      >
        {/* ----------------------------left Bar--------------------------------------------------------------- */}
        <Grid item xs={10} sm={8} md={3} lg={3} sx={Item} textAlign="center">
          <Card
            sx={{
              p: 1,
              maxWidth: 500,
              width: "auto",
              height: "auto",
              minHeight: "500px",
              boxShadow: "0",
            }}
          >
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
                sx={{
                  padding: "10px",
                  height: "200px",
                  width: "200px",
                  borderRadius: "50%",
                  margin: "auto",
                  marginTop: "20px",
                }}
                image="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1667425437~exp=1667426037~hmac=9464865d765f09b4765dcb5d8b8f905e26e6f9aa81d444199cace0b4b2e50d3e"
              />
              <CardContent>
                <Typography
                  sx={{
                    fontSize: 30,
                    fontWeight: "bold",
                    textAlign: "center",
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
                  }}
                >
                  {UserData.user_name}
                </Typography>
              </CardContent>
            </Grid>

            <CardActions>
              <Grid container justifyContent="center">
                <Typography sx={{ fontSize: 20, color: "#ffffff" }}>
                  <Button sx={{ fontSize: 20, color: "#ffffff" }}>
                    <img src="https://img.icons8.com/color/48/000000/linkedin.png" />
                  </Button>
                  <Button sx={{ fontSize: 20, color: "#ffffff" }}>
                    <img src="https://img.icons8.com/color/48/000000/github--v1.png" />
                  </Button>
                  <Button sx={{ fontSize: 20, color: "#ffffff" }}>
                    <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" />
                  </Button>
                </Typography>
              </Grid>
            </CardActions>

            <Divider />
            <Grid item justifyContent="center">
              <Link to="/editprofile" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    fontSize: "15px",
                    my: 3,
                    width: "150px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "#293241",
                    color: "white",
                    boxShadow: "0",
                    position: "relative",

                    "&:hover": {
                      background: "#d3d3d3",
                      color: "black",
                    },
                  }}
                  variant="contained"
                >
                  Edit Info
                </Button>
              </Link>
            </Grid>
          </Card>
        </Grid>

        {/* -----------------------------------------RIght Bar--------------------------------------------------------- */}

        <Grid
          item
          xs={10}
          sm={8}
          md={8}
          lg={8}
          sx={Item}
          backgroundColor="white"
        >
          <Typography sx={{ fontSize: "40px", m: 3, textAlign: "center" }}>
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
                <Typography sx={header}>Personal </Typography>
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
                          <Typography sx={{ fontSize: "20px", color: "black" }}>
                            {Object.keys(data)} : {Object.values(data)}
                          </Typography>
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
                <Typography sx={header}>Contact </Typography>
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
                          <Typography sx={{ fontSize: "20px", color: "black" }}>
                            {Object.keys(data)} : {Object.values(data)}
                          </Typography>
                        </Grid>
                      </Grid>
                    );
                  })}
                </CardContent>
              </Card>
            </Grid>

            {/* ----------------------------------Skills and Links-------------------------------- */}

            <Grid item xs={11} sm={10} md={10} lg={11} sx={{ m: 1 }}>
              <Card sx={{ width: "auto" }}>
                <Typography sx={header}>Skills and Links </Typography>
                <CardContent>
                  {skills.map((data) => {
                    return (
                      <Grid container>
                        <Grid item sx={{ ml: 1, my: 1 }}>
                          <Typography sx={{ fontSize: "20px", color: "black" }}>
                            {Object.keys(data)} : {Object.values(data)}
                          </Typography>
                        </Grid>
                      </Grid>
                    );
                  })}
                </CardContent>
              </Card>
            </Grid>

            {/* ----------------------------------Projects and Achievements-------------------------------- */}

            <Grid item xs={11} sm={10} md={10} lg={11} sx={{ m: 1 }}>
              <Card sx={{ width: "auto" }}>
                <Typography sx={header}>Projects and Achievements </Typography>
                <CardContent>
                  {Projects.map((data) => {
                    return (
                      <Grid container>
                        <Grid item xs={4} sm={3} lg={3} sx={{ ml: 1, my: 1 }}>
                          <Typography sx={{ fontSize: "20px", color: "black" }}>
                            {Object.keys(data)} : {Object.values(data)}
                          </Typography>

                          <Typography sx={{ fontSize: "20px", color: "black" }}>
                            Description :
                          </Typography>

                          <Typography sx={{ fontSize: "20px", color: "black" }}>
                            Link :
                          </Typography>
                        </Grid>
                      </Grid>
                    );
                  })}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Right Bar */}
    </div>
  );
};

export default UserInfo;
